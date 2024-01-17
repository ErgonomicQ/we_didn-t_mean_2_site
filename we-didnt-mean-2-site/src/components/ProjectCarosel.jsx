import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import Tale from '../style/images/TOGMenu_copy.png'
import Filler from '../style/images/WDM2_Phone_Background_copy.jpg'

function ProjectList (){
    const [index, setIndex] = useState(0);

    const handleSelection = (selectedIndex) => {
        setIndex(selectedIndex);
      };

const taleOne = () => {  
    window.location.href = 'https://store.steampowered.com/app/2102980/The_Tale_of_Galariel/';
  };

return (
    <Carousel activeIndex={index} onSelect={handleSelection}>
        <Carousel.Item>
            <img src={Tale} alt= "Tale of Galariel Menu Page"/>
            <Carousel.Caption>
                <h3 className="special-font">The Tale of Galariel</h3>
                <p>Our first Project! Join Thrusk on his journey of revenge as a benevolent force or malevolent crisis. </p>
                <button onClick={taleOne}>Store Page</button>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img src={Filler} alt ="a filler image containing the WDM2 logo"/>
        <Carousel.Caption>
          <h3 className="special-font">Coming Soon</h3>
          <p>Stay tuned for upcoming projects.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Filler} alt ="a filler image containing the WDM2 logo"/>
        <Carousel.Caption>
        <h3 className="special-font">Coming Soon</h3>
          <p>Stay tuned for upcoming projects.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
);
}

export default ProjectList;