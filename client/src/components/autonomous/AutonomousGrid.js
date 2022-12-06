import React, { useEffect, useState, Fragment } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import MyLocationOutlinedIcon from '@mui/icons-material/MyLocationOutlined'; // -12 x, -12 y
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'; // -12 x, -22 y

// <LocationOnOutlinedIcon style={{position: "relative", left: 288, top: 228 }}/>

export default function App(props) {
    const { box, setBox, handleMouseMove, pickUp, dropOff, setPickUpCoords, setDropOffCoords, deliveryState } = props;

    const onMouseOver = event => {
      setBox(event.target.getAttribute("box"));
    };

    const handleOnClickCoords = () => {
      if (deliveryState === 1) {
        return setPickUpCoords()
      }
      else if (deliveryState === 3) {
        return setDropOffCoords()
      }
    };

  return (
    <Card sx={{ width: 750, height: 550, margin: 3 }} variant="outlined">
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 15 }}>
          <div onClick={handleOnClickCoords}>
            <Paper 
              sx={{ width: 300, height: 250 }} 
              variant="outlined" 
              onMouseMove={handleMouseMove} 
              onMouseOver={onMouseOver} 
              box={1}
            >
              { deliveryState && pickUp && pickUp.pickUpBox === "1" && (
                <MyLocationOutlinedIcon style={{position: "relative", left: pickUp.x, top: pickUp.y }}/>
              )}
              { deliveryState && dropOff && dropOff.dropOffBox === "1" && (
                <LocationOnOutlinedIcon color="primary" style={{position: "relative", left: dropOff.x, top: dropOff.y }}/>
              )}
            </Paper>
          </div>
          <div onClick={handleOnClickCoords}>
            <Paper 
              sx={{ width: 300, height: 250 }} 
              variant="outlined" 
              onMouseMove={handleMouseMove} 
              onMouseOver={onMouseOver} 
              box={2}
            >
              { pickUp && pickUp.pickUpBox === "2" && (
                  <MyLocationOutlinedIcon style={{position: "relative", left: pickUp.x, top: pickUp.y }}/>
              )}
              { deliveryState && dropOff && dropOff.dropOffBox === "2" && (
                <LocationOnOutlinedIcon color="primary" style={{position: "relative", left: dropOff.x, top: dropOff.y }}/>
              )}
            </Paper>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div onClick={handleOnClickCoords}>
            <Paper 
              sx={{ width: 300, height: 250 }} 
              variant="outlined" 
              onMouseMove={handleMouseMove} 
              onMouseOver={onMouseOver} 
              box={3}
            >
              { pickUp && pickUp.pickUpBox === "3" && (
                  <MyLocationOutlinedIcon style={{position: "relative", left: pickUp.x, top: pickUp.y }}/>
              )}
              { deliveryState && dropOff && dropOff.dropOffBox === "3" && (
                <LocationOnOutlinedIcon color="primary" style={{position: "relative", left: dropOff.x, top: dropOff.y }}/>
              )}
            </Paper>
          </div>
          <div onClick={handleOnClickCoords}>
            <Paper 
              sx={{ width: 300, height: 250 }} 
              variant="outlined" 
              onMouseMove={handleMouseMove} 
              onMouseOver={onMouseOver} 
              box={4}
            >
              { pickUp && pickUp.pickUpBox === "4" && (
                  <MyLocationOutlinedIcon style={{position: "relative", left: pickUp.x, top: pickUp.y }}/>
              )}
              { deliveryState && dropOff && dropOff.dropOffBox === "4" && (
                <LocationOnOutlinedIcon color="primary" style={{position: "relative", left: dropOff.x, top: dropOff.y }}/>
              )}
            </Paper>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}