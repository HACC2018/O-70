import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className='landing-background-image'>
          <Grid verticalAlign='middle' textAlign='center' container>
            <Header as='h3' inverted>
              At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti
              atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non-provident,
              similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum
              quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio,
              cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
              eveniet, ut et voluptates repudiandae sint et molestiae non-recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
            </Header>
            <Button basic color='green'>
              Green
            </Button>
            <Button basic color='green'>
              Green
            </Button>
            <Button basic color='green'>
              Green
            </Button>
          </Grid>
        </div>
    );
  }
}

export default Landing;
