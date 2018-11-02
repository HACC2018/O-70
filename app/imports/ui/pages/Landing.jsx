import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background-image'>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Header as='h3' inverted>
              As trash continues to be a problem for our islands, we require better ways to collect and represent efforts 
              around the state to reduce it.
              
              Humabala Opala is a user-friendly way to input data of a wide range of waste items and return a systematic
              analysis of it, visually and numerically. This will contribute to efforts across campuses in the UH system to 
              quantify our push towards a more sustainable future. 
            </Header>
            <Button basic color='green'>
              UHM
            </Button>
            <Button basic color='green'>
              KCC
            </Button>
            <Button basic color='green'>
              UHMC
            </Button>
            <Button basic color='green'>
              KauaiCC
            </Button>
          </Grid>
        </div>
    );
  }
}

export default Landing;
