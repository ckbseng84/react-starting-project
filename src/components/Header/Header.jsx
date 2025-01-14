// convert reactImage as image object
import reactImage from '../../assets/react-core-concepts.png'
import './header.css'
const descriptions = ['Fundamental','Crucial','Core']

function getRandomInt(max){
    return Math.floor(Math.random() * (max +1));
  }
export function Header() {
    const description =descriptions[getRandomInt(descriptions.length-1)];
    return (
      <header>
        <img src={reactImage} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }