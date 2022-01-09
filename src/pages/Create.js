import React, { useState } from "react";
import { TextField, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core"; //needs to be destructured as a function, but not component
// import { TextField } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == '') {
      setTitleError(true)
    }
    if (details == '') {
      setDetailsError(true)
    }



    if (title && details) console.log(title, details);
  };

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

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
          />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <Button
          type="submit"
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </form>

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
