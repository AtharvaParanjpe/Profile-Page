import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';

import project1 from "../images/Google-fact-ranking.jpg";
import project2 from "../images/Image Captioning.png";
import project3 from "../images/security.jpeg";
import project4 from "../images/real time voting.jpeg";
import project5 from "../images/colorization.png";
import project6 from "../images/gan.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Neural Approach for fact ranking - Research Paper",
    description: ``,
    image: project1,
    link: "https://github.com/AtharvaParanjpe/Dynamic-Fact-Ranking-For-Entity-Centric-Queries",
  },
  {
    name: "Image Captioning",
    description: ``,
    image: project2,
    link: "https://github.com/AtharvaParanjpe/Image-Captioning",
  },
  {
    name: "Security Information and Event Management",
    description: `Final Year Project`,
    image: project3,
    link: "",
  },
  {
    name: "Real time Voting App",
    description: ``,
    image: project4,
    link: "https://github.com/AtharvaParanjpe/votingapp",
  },
  {
    name: "Image Colorization",
    description: `Course Project`,
    image: project5,
    link: "https://github.com/AtharvaParanjpe/Image-Colorization",
  },
  {
    name: "GAN on fashion MNIST",
    description: ``,
    image: project6,
    link: "",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => { window.location.href = project.link; }}>
                  Github Link
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
