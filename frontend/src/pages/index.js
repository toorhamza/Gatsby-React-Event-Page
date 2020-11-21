import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import axios from "axios"

import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import "./index.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const [events, setEvents] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:1337/events/1").then(json => {
      setEvents(json.data)
      console.log(json.data)
    })
  }, [])

  const img = events ? events.Images.formats.medium.url : null

  return (
    <Layout>
      <SEO title="Event Name" />
      <div className="mainContainer">
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h3"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {events ? events.Name : null}
          </Typography>
          <Grid container spacing={2} justify="center" className="ctaButton">
            <img src={`http://localhost:1337` + img} />
          </Grid>
          <Typography variant="h6" align="left" color="textSecondary" paragraph>
            {events ? events.Description : null}
          </Typography>
          <div>
            <Grid container spacing={2} justify="center" className="ctaButton">
              <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{ width: "300px", height: "60px" }}
              >
                <Link
                  to="/signmeup/"
                  style={{
                    color: `white`,
                    textDecoration: `none`,
                  }}
                >
                  Sign Me Up
                </Link>
              </Button>
            </Grid>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage
