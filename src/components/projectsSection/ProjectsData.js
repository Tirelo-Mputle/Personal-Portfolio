import twoCoffeSiteImg from "../../assets/images/two14coffee.JPG";
import shortnerSiteImg from "../../assets/images/shortener.JPG";
import two14Video from "../../assets/video/two14 final video.mp4";
import shortlyVideo from "../../assets/video/shortly final video.mp4";
const projectData = [
  {
    projectName: "Two 14 Coffee website",
    description:
      "A slight clone of an actual coffee shop website. View their wide range of coffee and you can add and remove what you like to your cart. Cart items are stored in your local storage. ",
    image: twoCoffeSiteImg,
    tools: ["React", "Styled Components"],
    stateManagement: "useState",
    api: "",
    github: "https://github.com/Tirelo-Mputle/two14-coffee-portfolio-project",
    siteLink: "https://two14coffee.netlify.app/",
    video: two14Video,
  },
  {
    projectName: "Shortly - link shortener",
    description:
      "Shorten any valid URL with this URL shortener. It uses the ..... API to create the short links. The copy button copies the link to your clipboard. The local storage saves a maximum of three links. ",
    image: shortnerSiteImg,
    tools: ["React", "Styled Components", "API"],
    stateManagement: "useState",
    api: "",
    github: "https://github.com/Tirelo-Mputle/Shortly-Link-Shortener",
    siteLink: "https://shortly-url-shorter-api.netlify.app/",
    video: shortlyVideo,
  },
];

export default projectData;
