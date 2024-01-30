import meter90 from "../assets/90.png";
import meter80 from "../assets/80.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/color-sharp.png"
import colorSharp2 from "../assets/color-sharp2.png"
import 'animate.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 5000, min: 1101 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1100, min: 801 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 465 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>Some of the tech stack that I learned along the way.<br></br> And will surely learn more moving forward.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>React JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Vue JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter90} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Project Management</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Solidity</h5>
                            </div>
                            <div className="item">
                                <img src={meter80} alt="Image" />
                                <h5>Cosmos Blockchain</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-right" src={colorSharp2} alt="Image" />
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills