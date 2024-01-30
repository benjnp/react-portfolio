import { Col } from "react-bootstrap";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";


export const ProjectCard = ({ title, description, imgUrl, url, language }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <div>
            <h4>{title}</h4>
            <span className="proj-description">{description}</span>
          </div>
          <div className="bottom-text">
            <a href={url} target="_blank">Website <FaArrowUpRightFromSquare></FaArrowUpRightFromSquare></a>
            <span>{language}</span>
          </div>
        </div>
      </div>
    </Col>
  )
}