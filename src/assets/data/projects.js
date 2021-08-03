import { v4 as uuidv4 } from 'uuid';
import HappyPetsImg from '../images/happy-pet-shelter.jpg';
import SportsAlmanacImg from '../images/sports-almanac.jpg';
import WeatherDashboardImg from '../images/weather-dashboard.jpg';
import CodeQuizImg from '../images/code-quiz.jpg';
import PodcastChannelImg from '../images/podcast-channel.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Happy Pets Shelter',
    desc:
      'Responsive application built to match animals with their perfect new family. I was in charge of the front-end and I could do my first SVG animation for the header',
    img: HappyPetsImg,
  },
  {
    id: uuidv4(),
    name: 'Sports Almanac',
    desc:
      'Application created to provide football fans with the latest information about their favorite leagues worldwide including matches data thanks to API fetching',
    img: SportsAlmanacImg,
  },
  {
    id: uuidv4(),
    name: 'Weather Dashboard',
    desc:
      'Application designed to provide real-time weather information about any searched city. It can display a Five-day forecast thanks to the OpenWeather API',
    img: WeatherDashboardImg,
  },
  {
    id: uuidv4(),
    name: 'JavaScript Code Quiz',
    desc:
      'Simple application with a fun game about JavaScript fundamentals including a timer and a local storage hall of fame',
    img: CodeQuizImg,
  },
  {
    id: uuidv4(),
    name: 'Podcast Channel',
    desc:
      'Puzzle-built application with Spotify podcast content regarding coding and a responsive design',
    img: PodcastChannelImg,
  },
];

export default projects;
