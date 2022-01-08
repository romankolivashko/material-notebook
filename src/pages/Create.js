import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

export default function Create() {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>
      <Button 
        onClick = {()=> console.log("clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >Submit</Button>

      {/* <Button type="submit" color="secondary" variant="outlined">Un-submit</Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup> */}
    </Container>
  );
}
