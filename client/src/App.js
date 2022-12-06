import './App.css';

import * as React from 'react';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import Main from './components/Main'
import Magnet from './components/Magnet'
import VerticalSlider from './components/VerticalSlider'
import RadialSlider from './components/RadialSlider'
import AngularSlider from './components/AngularSlider'
import Autonomous from './components/Autonomous'

export default function App() {
  return (
    <Container className="container" maxWidth="lg" style={{ paddingTop: "10vh" }}>
      <div style={{ display: "flex" }}>
        <div>
          <Grid container>
            <Grid item xs={6}>
              <Magnet />
            </Grid>
            <Grid item xs={6}>
              <AngularSlider />
            </Grid>
            <Grid item xs={6}>
              <VerticalSlider />
            </Grid>
            <Grid item xs={6}>
              <RadialSlider />
            </Grid>
          </Grid>
        </div>
        <div>
          <Main />
        </div>
      </div>
      {/* <Autonomous /> */}
    </Container>
  );
}