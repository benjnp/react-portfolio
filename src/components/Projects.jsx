import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/project-img1.png";
import projImg2 from "../assets/project-img1.png";
import asterisk from "../assets/asterisk_thumb.jpg";
import n1 from "../assets/n1_thumb.jpg";
import socials from "../assets/socials_thumb.jpg";
import mindbulb from "../assets/mindbulb_thumb.jpg";
import realz from "../assets/realz_thumb.jpg";
import quasar from "../assets/quantum_thumb.jpg";
import reactPortfolio from "../assets/react_portfolio_thumb.jpg";
import portfolio from "../assets/portfolio_thumb.jpg";
import mntn from "../assets/mntn_thumb.jpg";
import blockx from "../assets/blockx_thumb.jpg";
import blockxContract from "../assets/blockx_contract_thumb.jpg";
import blockxStaking from "../assets/blockx_staking_thumb.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const reactProjects = [
        {
            title: "Asterisk Finance",
            description: "An NFT and DEX website that sells NFTs to users under the zkSync chain",
            language: "Next JS",
            url: "https://bpacheco-asterisk.vercel.app/",
            imgUrl: asterisk,
        },
        {
            title: "Nutrition First",
            description: "A health and wellness website that sells subscription to users.",
            language: "Vue JS",
            url: "https://bpacheco-n1.netlify.app/",
            imgUrl: n1,
        },
        {
            title: "Socials",
            description: "A Social Media website that uses Sanity as the backend solution",
            language: "React JS",
            url: "https://bpacheco-socials.vercel.app/",
            imgUrl: socials,
        },
        {
            title: "Realz",
            description: "A Real Estate website template",
            language: "React JS",
            url: "https://bpacheco-realz.vercel.app/",
            imgUrl: realz,
        },
        {
            title: "Quantum Prime",
            description: "A financial website where users will subscribe to receive financial tips",
            language: "Vue JS / Quasar",
            url: "https://bpacheco-quantum-prime.netlify.app/",
            imgUrl: quasar,
        },
        {
            title: "React Portfolio",
            description: "This is the current portfolio being used. It was made using ",
            language: "React JS",
            url: "https://bpacheco.site",
            imgUrl: reactPortfolio,
        }
    ];

    const htmlProjects = [
        {
            title: "HTML Portfolio",
            description: "This is a portfolio website that I previously used",
            language: "HTML + Bootstrap CSS",
            url: "https://bpacheco-html-portfolio.vercel.app/",
            imgUrl: portfolio,
        },
        {
            title: "Hiking Template",
            description: "A website template made for mountaineers or hiking groups",
            language: "HTML + Bootstrap CSS",
            url: "https://bpacheco-hiking.vercel.app/",
            imgUrl: mntn,
        },
        {
            title: "Mindbulb",
            description: "An IT Service provider that we started around 2019 but closed due to the pandemic.",
            language: "HTML + CSS",
            url: "https://bpacheco-mindbulb.vercel.app/",
            imgUrl: mindbulb,
        },
    ];

    const blockchainProjects = [
        {
            title: "BlockX Mainnet",
            description: "This is an EVM chain created using Cosmos SDK and launched to mainnet last January 16, 2024 with 50+ public validators. A separate testnet is also working that can be accessed by the public.",
            language: "Cosmos SDK",
            url: "https://github.com/BlockXLabs/networks/tree/master/chains/blockx_100-1",
            imgUrl: blockx,
        },
        {
            title: "BlockX Smart Contract",
            description: "Deployed the smart contract in the Polygon network with customized functions such as vested sending of tokens. Such token was also previous deployed in Binance Smart Chain prior to this Polygon version.",
            language: "Solidity",
            url: "https://polygonscan.com/address/0x871531a59ef89c5262bcf58a80ab29f9711ea5a7",
            imgUrl: blockxContract,
        },
        {
            title: "BlockX Staking",
            description: "A staking platform launched when the BlockX Token was solely within the Polygon Network. The platform is no longer active as BlockX already has its own chain.",
            language: "Solidity + Vue JS",
            url: "https://bpacheco-blockx-staking.vercel.app/",
            imgUrl: blockxStaking,
        },
    ];

  return (
    <section className="project" id="projects">
      <Container>
      <TrackVisibility once>
              {({ isVisible }) =>
              isVisible && 
        <Row className={isVisible ? "animate__animated animate__fadeIn animate__slower" : ""}>
          <Col size={12}>
              <div >
                <h2>Projects</h2>
                <p>These are some of the projects I've been part of for the past 5 years.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React/Vue JS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">HTML/CSS</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Blockchain</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp">
                    <Tab.Pane eventKey="first">
                    <p>Some sites are done via Freelancing and most are no longer active. CSS used are either Bootstrap CSS or Tailwind CSS</p>
                        <Row>
                            {
                            reactProjects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>These are HTML-only sites or templates done using regular CSS or Bootstrap CSS.</p>
                      <Row>
                            {
                            htmlProjects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>These are Smart Contracts created as well as Blockchain deployed while working with BlockX</p>
                      <Row>
                            {
                            blockchainProjects.map((project, index) => {
                                return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                            })
                            }
                        </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
             
          </Col>
        </Row>
        }
        </TrackVisibility>
      </Container>
    </section>
  )
}

export default Projects