import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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
