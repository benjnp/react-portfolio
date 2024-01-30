import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="d-flex align-items-center footer-row justify-content-between">
            <span>Created using React Bootstrap </span>
            <span>Copyright 2022. All Rights Reserved</span>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;