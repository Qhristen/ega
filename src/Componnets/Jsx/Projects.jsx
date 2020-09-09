import TextWrite from "../img/textwrite.jpg";
import zeemap from "../img/zeemap.jpg";
import FeedBack from "../img/feedback.PNG";
import smash from "../img/smashit.jpg";

const Projects = [
  {
    name: "Medos",
    about: "covid-19 Tracker",
    image: zeemap,
    git: "url",
    id: 1,
  },

  {
    name: "Text to Writting",
    about:
      "A webapp which covert typed text to handwritting Text to writting and present it in form of a note book with horizontal lines and vertical marins ",
    image: TextWrite,
    git: "url",
    id: 2,
  },
  {
    name: "Smash it",
    about: "weather report",
    image: smash,
    git: "url",
    id: 3,
  },
  {
    name: "Visual FeedBack",
    about: `An online web base Visual FeedBack webapp widget, it focus on feedback with canvas drawing and geting user details which can be shared to any medium, it's user and mobile fiendly and can be used as widget accross multiple web applications, developed with REACT, NODE and canvas element`,
    image: FeedBack,
    git: "url",
    id: 4,
  },
];

export default Projects;
