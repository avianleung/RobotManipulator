import React, { Fragment, useState } from 'react';

import CommandService from '../services/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function App() {
  const [value, setValue] = useState(0); // 8.9 max
  const [committed, setCommitted] = useState([0])

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

    let action = curr > prev ? "o" : "i"

    let radialDiff = Math.round(Math.abs(curr - prev) * 10) / 10
    let steps = Math.ceil(500 / (11 / radialDiff))

    let speed;
    if (steps < 50) {
      speed = 50
    } else {
      speed = 500
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
          Radial Displacement
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
            max={11}
            step={0.1}
          />
        </div>
        </CardContent>
    </Card>
  );
}