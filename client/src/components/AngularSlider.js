import React, { useState } from 'react';

import CommandService from '../services/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function App() {
  const [value, setValue] = useState(180);
  const [committed, setCommitted] = useState([180])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const commitChange = (event) => {
    const valueArray = [...committed]
    valueArray.push(value)
    let prevValue = valueArray.shift()
    setCommitted(valueArray)

    let curr = parseInt(value)
    let prev = parseInt(prevValue)

    let action = curr > prev ? "c" : "a"

    let angleDiff = Math.ceil(Math.abs(curr - prev))
    let steps = Math.ceil(315 / (360 / angleDiff))

    if (steps < 5) {
      steps = 5
    }

    let speed = steps <= 10 ? 10 : 50

    let command = action.toString() + steps.toString() + " " + speed.toString()

    console.log(command)

    CommandService.sendCommand(command)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" align="center">
          Angular Displacement
        </Typography>
        <Typography variant="h4" align="center">
          {value}°
        </Typography>

        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Slider
            sx={{ marginTop: 2 }} 
            size="small"
            value={value} 
            onChange={handleChange} 
            onChangeCommitted={commitChange} 
            min={0}
            max={360}
            step={1}
          />
        </div>
        </CardContent>
    </Card>
  );
}