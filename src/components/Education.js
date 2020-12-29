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
        fontSize: "1.1rem",
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
                Education
      </Typography>
            <Box component="div" className={classes.timeLine}>
                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2019 - Present
        </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Rutgers University, New Brunswick
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Masters in Computer Science
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <List>
                            <ListItem>
                                <ListItemText>
                                    CGPA: <br></br>3.9/4.0
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Core Subjects : <br></br>Machine Learning, Computer Vision, Intro to Artificial Intelligence
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>

                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2014 - 2018
        </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Veermata Jijabai Technilogical Institute
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        B.Tech  Electronics and Telecommunications Engineering
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <List>
                        <ListItem>
                                <ListItemText>
                                    CGPA: <br></br>9.11 / 10
                                </ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Core Subjects : <br></br>Embedded Systems, Analog and Digital Communications, Satellite Communication
                                </ListItemText>
                            </ListItem>
                        </List>
                    </Typography>
                </Box>


                <Typography
                    variant="h2"
                    className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                >
                    2012 - 2014
        </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography
                        variant="h5"
                        align="center"
                        className={classes.subHeading}
                    >
                        Apeejay School, Nerul
          </Typography>
                    <Typography variant="body1" align="center" className={classes.body1}>
                        Major - Computer Science
          </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        className={classes.subtitle1}
                    >
                        <List>
                        <ListItem>
                                <ListItemText>
                                    CGPA: <br></br>10/10
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
