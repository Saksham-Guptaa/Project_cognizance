import React , {useEffect} from "react";
import {Container , AppBar , Typography , Grow , Grid} from "@material-ui/core";
import { useDispatch } from "react-redux";
import {getPosts} from './actions/posts'
import cognizance from './images/logoimg.png'
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import usestyles from "./styles";
function App() {
  const dispatch = useDispatch();
  const classes = usestyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">COGNIZIANCE</Typography>
        <img className={classes.image} src={cognizance} alt="Cogniziance" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
