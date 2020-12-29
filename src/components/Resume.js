import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import List from '@material-ui/core/List';
import { ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid tan",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid tan",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "tomato tomato transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "tan",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent tomato tomato",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.2rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "tomato",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "#fff",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "tomato",
  },
  subtitle1: {
    color: "tan",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Working Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Development Engineering Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Amazon Connect, AWS
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List>
              <ListItem>
                <ListItemText>
                  I was tasked with the creation of an end-end help panel component which would assist
                  new Amazon Connect users.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Creation of a reusable help panel web component which could be picked up and placed anywhere in the codebase.
                  This allows other teams to adapt their own backend solution for data retrieval
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Integration of the data querying mechanism with the help panel and to demonstrate its efficacy in a page. This was done through the use of a S3 bucket to store content data which was fronted by a cloudfront url.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Localization was implemented to allow people from different regions to view the content in the language specific to their region. Feature access control was also implemented to allow the feature to be
                  deployed till gamma environment and be tested.
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2019 - 2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Research Assistant, Part Time Lecturer and Grader
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Rutgers University
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List>
              <ListItem>
                <ListItemText>
                  Research Assistant - under Prof. Hannah Szlyk
                <ul>
                    <li>
                      Evaluating the suicide risk by race, gender or region and reducing the bias if any.
                    </li>
                  </ul>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  CS 170 - Computer Application for Business
                  <ul>
                    <li>
                      Introduces student to HTML, CSS, and Javascript programming.
                    </li>
                    <li>
                      Also introduces some key networking concepts and data analytics with Excel.
                    </li>
                  </ul>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  CS 111 - Introduction to Java Programming
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>

                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Box>


        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018 - 2019
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Analyst
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Credit Suisse
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List>
              <ListItem>
                <ListItemText>
                  I was initially responsible for assisting in technology migrations from Coldfusion to AngularJs and RESTful microservices using Java
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  I helped in trasistion from rule based to an action based access mechanism which significantly improved the handling of
                  user roles in the organiztion. I also implemented improvements in Watchlist (where users add products) and several new features
                  like
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Implemented the build tool (using Webpack) and test case framework (using Jest) for the front end of the application
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Assisted in development of front end for Digital Reguatory Reporting Pilot which was aimed at converting regulations into machine exectuable code and distribute it to firms’ architecture over blockchain
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2017 - 2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Technical Analyst Intern
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Credit Suisse
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            <List>
              <ListItem>
                <ListItemText>
                  Worked on implementation of a cache layer using Hazelcast API to reduce the access time for frequently used static databases
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  Assisted in indexing data to Elasticsearch for improved querying time.
                </ListItemText>
              </ListItem>
            </List>
          </Typography>
        </Box>

      </Box>
    </Box>
  );
};

export default Resume;
