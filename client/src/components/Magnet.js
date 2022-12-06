import React, { useState } from 'react';

import CommandService from '../services/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

export default function App() {
    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
      setChecked(event.target.checked);

      let command = event.target.checked ? "on" : "off"

      CommandService.sendCommand(command)
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    };

  return (
    <Card sx={{ maxWidth: 345, margin: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="div" align="center">
          Magnet
        </Typography>
        <Typography variant="h4" align="center">
          {checked ? "On" : "Off"}
        </Typography>

        <div style={{ paddingTop: "10px", paddingLeft: "10px", paddingRight: "10px", textAlign: "center" }}>
        <Switch
            checked={checked}
            onChange={handleChange}
        />
        </div>
        </CardContent>
    </Card>
  );
}