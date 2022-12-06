import React, { Fragment, useState } from 'react';

import CommandService from '../services/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function App() {
  const [value, setValue] = useState(14);
  const [committed, setCommitted] = useState([14])

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const commitChange = (event) => {
    const valueArray = [...committed]
    valueArray.push(value)
    let prevValue = valueArray.shift()
    setCommitted(valueArray)

    let curr = parseFloat(value)
    let prev = parseFloat(prevValue)

    let action = curr > prev ? "r" : "l"

    let verticalDiff = Math.round(Math.abs(curr - prev) * 10) / 10
    let steps = Math.ceil(3500 / (14 / verticalDiff))

    let speed;
    if (steps < 50) {
      speed = 50
    } else {
      speed = 300
    }

    let command = action.toString() + steps.toString() + " " + speed.toString()

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
          Vertical Displacement
        </Typography>
        <Typography variant="h4" align="center">
          {value} cm
        </Typography>

        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Slider
            sx={{ marginTop: 2 }} 
            size="small"
            value={value} 
            onChange={handleChange} 
            onChangeCommitted={commitChange}
            min={0}
            max={14}
            step={0.1}
          />
        </div>
        </CardContent>
    </Card>
  );
}