import React, { useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Input from "@material-ui/core/Input"
import Snackbar from "@material-ui/core/Snackbar"
import Alert from "@material-ui/lab/Alert"

import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SignMeUp = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState("")
  const [message, setMessage] = useState("")

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }

    setOpen(false)
    setSeverity("")
    setMessage("Successfully Registered")
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post("http://localhost:1337/registrations", {
        name: name,
        email: email,
      })
      .then(() => {
        setOpen(true)
        setSeverity("success")
      })
      .catch(() => {
        setOpen(true)
        setSeverity("error")
        setMessage("An error occured! Please try again")
      })
  }

  return (
    <Layout>
      <SEO title="Event Registration" />
      <div className="mainContainer">
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            Event Registration
          </Typography>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            color="textPrimary"
            gutterBottom >
            Helsinki Data Science Day 2020
          </Typography>
          <div>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                  <Input
                    className="inputForm"
                    variant="outlined"
                    placeholder="Full Name"
                    inputProps={{ "aria-label": "description" }}
                    onChange={e => setName(e.target.value)}
                  />
                  <Input
                    className="inputForm"
                    variant="outlined"
                    placeholder="Email"
                    inputProps={{ "aria-label": "description" }}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />

                  <Grid container spacing={2} justify="center">
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        className="ctaButton"
                        type="submit"
                      >
                        Register
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="secondary"
                        className="ctaButton"
                      >
                        <Link
                          to="/"
                          style={{ color: `white`, textDecoration: `none` }}
                        >
                          Go back to homepage
                        </Link>
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </Layout>
  )
}

export default SignMeUp
