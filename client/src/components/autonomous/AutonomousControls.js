import React, { Fragment, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function App(props) {
  const { coords, box, deliveryState, setDeliveryState, pickUp, dropOff, setPickUp, cancelDelivery } = props

  return (
    <Card sx={{ width: 345, margin: 3 }} variant="outlined">
      <CardContent>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 40 }}>
          <Typography gutterBottom variant="subtitle1" component="div">
            Semi-Autonomous Delivery
          </Typography>
          {
            !deliveryState ? (
              <Button size="small" variant="contained" onClick={() => setDeliveryState(1)}>Start</Button>
            ) : (
              <Button size="small" variant="contained" color="error" onClick={cancelDelivery}>Cancel</Button>
            )
          }
          
        </div>
        { deliveryState && deliveryState > 0 && (
          <div>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {deliveryState > 1 ? "Pick Up Location" : "Choose Pick Up Location"}
            </Typography>
            <Typography variant="body2">
              Box: {deliveryState > 1 ? pickUp.pickUpBox : box ? box: pickUp.pickUpBox ? pickUp.pickUpBox : "N/A"}, 
              Coordinates: {deliveryState > 1 ? pickUp.x + ", " + pickUp.y : coords.x + ", " + coords.y}
            </Typography>
            { deliveryState === 1 &&(
              <Button 
                sx={{ marginTop: 1, float: "right" }}
                onClick={() => setDeliveryState(2)}
                size="small" 
                variant="outlined"
              >
                Next
              </Button>
            )}
          </div>
        )}
        { deliveryState && deliveryState === 2 && (
          <div style={{ marginTop: 30, display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Manually Adjust Location
            </Typography>
            { deliveryState === 2 &&(
              <Button 
                sx={{ marginTop: 1, float: "right" }}
                onClick={() => setDeliveryState(3)}
                size="small" 
                variant="outlined"
              >
                Next
              </Button>
            )}
          </div>
        )}
        { deliveryState && deliveryState > 2 && (
          <div style={{ marginTop: 30 }}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {deliveryState > 3 ? "Drop Off Location" : "Choose Drop Off Location"}
            </Typography>
            <Typography variant="body2">
              Box: {deliveryState > 3 ? dropOff.dropOffBox : box ? box: dropOff.dropOffBox ? dropOff.dropOffBox : "N/A"}, 
              Coordinates: {deliveryState > 3 ? dropOff.x + ", " + dropOff.y : coords.x + ", " + coords.y}
            </Typography>
            { deliveryState === 3 &&(
              <Button 
                sx={{ marginTop: 1, float: "right" }}
                onClick={() => setDeliveryState(4)}
                size="small" 
                variant="outlined"
              >
                Next
              </Button>
            )}
          </div>
        )}
        { deliveryState && deliveryState > 3 && (
          <div style={{ marginTop: 30 }}>
            { deliveryState === 4 &&(
              <Button 
                sx={{ marginTop: 1, float: "right" }}
                onClick={() => setDeliveryState(4)}
                color="info"
                size="small" 
                variant="contained"
              >
                Deliver
              </Button>
            )}
          </div>
        )}
        
        </CardContent>
    </Card>
  );
}