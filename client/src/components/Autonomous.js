import React, { useEffect, useState } from 'react';

import AutonomousGrid from './autonomous/AutonomousGrid'
import AutonomousControls from './autonomous/AutonomousControls'

export default function App() {
  const [box, setBox] = useState(null)
  const [deliveryState, setDeliveryState] = useState(null)
  const [pickUp, setPickUp] = useState(null)
  const [dropOff, setDropOff] = useState(null)
  const [coords, setCoords] = useState({x: 0, y: 0});
  
  useEffect(() => {
    // 👇️ get global mouse coordinates
    const handleWindowMouseMove = event => {
    window.addEventListener('mousemove', handleWindowMouseMove);
  
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  }
  }, []);
  
  const handleMouseMove = event => {
    setCoords({
      x: event.clientX - event.target.offsetLeft,
      y: event.clientY - event.target.offsetTop,
    });
  };

  const cancelDelivery = () => {
    setBox(null)
    setDeliveryState(null)
    setPickUp(null)
    setDropOff(null)
    setCoords({x: 0, y: 0})
  }

  const setPickUpCoords = () => {
    setPickUp({
        pickUpBox: box,
        x: coords.x - 12,
        y: coords.y - 12,
      });
  }

  const setDropOffCoords = () => {
    setDropOff({
        dropOffBox: box,
        x: coords.x - 12,
        y: coords.y - 22,
      });
  }

  return (
    <div style={{ display: "flex" }}>
      <AutonomousGrid
        box={box}
        setBox={setBox}
        handleMouseMove={handleMouseMove}
        pickUp={pickUp}
        setPickUpCoords={setPickUpCoords}
        dropOff={dropOff}
        setDropOffCoords={setDropOffCoords}
        deliveryState={deliveryState}
      />
      <AutonomousControls 
        box={box}
        coords={coords}
        setCoords={setCoords}
        pickUp={pickUp}
        dropOff={dropOff}
        deliveryState={deliveryState}
        setDeliveryState={setDeliveryState}
        cancelDelivery={cancelDelivery}
      />
    </div>
  );
}