import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <form className="form" noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="name"
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    id="name"
                    label="Plase Enter Your Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                    {/* space */}
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className="submit"
              >
                Start
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="mustcc.lee@gmail.com" variant="body2">
                    Report Bugs.
                  </Link>
                </Grid>
              </Grid>
            </form>
          </header>
        </div>
      </div>
    );
  }
}
