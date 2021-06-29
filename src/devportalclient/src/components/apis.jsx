import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ApiProductCard from './apiproduct';

import logo from '../apigee-icon-blue.svg';

export default function ApiProducts(props) {

  return (
    <div>
      <section className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{props.title}</h1>
        <p>{props.tag}</p>
      </section>

      <br></br>
      <h1>Browse our API Products</h1>
      <br></br><br></br>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs>
            <ApiProductCard></ApiProductCard>
          </Grid>
          <Grid item xs>
            <ApiProductCard></ApiProductCard>
          </Grid>
          <Grid item xs>
            <ApiProductCard></ApiProductCard>
          </Grid>                
        </Grid>
      </Container>

      <br></br><br></br>
    </div>
    
  );
}