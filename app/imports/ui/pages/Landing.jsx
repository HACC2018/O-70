import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background-image'>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Header as='h3' inverted>
              As trash continues to be a problem for our islands, we require better ways to collect and represent
              efforts
              around the state to reduce it.

              Humabala Opala is a user-friendly way to input data of a wide range of waste items and return a systematic
              analysis of it, visually and numerically. This will contribute to efforts across campuses in the UH system
              to
              quantify our push towards a more sustainable future.
              <Header centered as='h4' inverted><br/><br/><br/><br/>Campuses</Header>
            </Header>

            <Button basic color='green'>
<<<<<<< HEAD
              UH Manoa
            </Button>
            <Button basic color='green'>
              Campus
            </Button>
            <Button basic color='green'>
              Campus
=======
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
>>>>>>> 94a9f4ef6e2d80f63da9f418a9f03e4be9aa4118
            </Button>
          </Grid>
        </div>
    );
  }
}

export default Landing;
