import React from "react";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

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
        startIcon={<SendIcon />}
        endIcon={<KeyboardArrowRightIcon />}
      >Submit</Button>

    {/* icons */}
      <br />
      <AccessAlarmIcon color="secondary" fontSize="large" />
      <AccessAlarmIcon color="secondary" fontSize="small" />
      <AccessAlarmIcon color="action" fontSize="large" />
      <AccessAlarmIcon color="error" fontSize="large" />
      <AccessAlarmIcon color="disabled" fontSize="large" />
      <br />
      <AcUnitIcon color="secondary" />
    </Container>
  );
}
