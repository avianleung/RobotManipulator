import React, { useState } from 'react';

import CommandService from '../services/service';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function App() {

  const sendCommand = (command) => {
    CommandService.sendCommand(command)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  return (
    <Card sx={{ width: 200, margin: 3 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Main
        </Typography>
        <Button 
                sx={{ marginTop: 1 }}
                onClick={() => sendCommand("demo")}
                size="small" 
                variant="contained"
              >
                Start Demo
        </Button>
        {/* <Button 
                sx={{ marginTop: 1 }}
                onClick={() => sendCommand("n")}
                size="small" 
                variant="contained"
                color="error"
              >
                Stop
        </Button> */}
        </CardContent>
    </Card>
  );
}