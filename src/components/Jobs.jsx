import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import TrackVisibility from 'react-on-screen';

const Jobs = () => {
  return (
    <section className="jobs" id="jobs">
        <TrackVisibility once>
            {({ isVisible }) =>
            isVisible && 
            <div className={isVisible ? "animate__animated animate__fadeIn animate__slower jobs-box" : "jobs-box"}>
                <h2 className="mb-5">Job History</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">BlockX</span>
                                    <span className="text-bold">Web Developer / Project Manager</span>
                                </div>
                                <div className="a-header-right">
                                    <span>June 2020 - December 2023</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Launched the blockchain project to Mainnet with 50+ public validators.
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> It is a Blockchain startup company with a goal of having its blockchain and its own ecosystems of supporting web apps that blockchain users 
                                will be able to use for trading, bridging, creating smart contracts, etc. 
                                </span>
                            </div>
                            
                        </Accordion.Body>
                    </Accordion.Item>
                    {/* <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">BlockX</span>
                                    <span className="text-bold">Node JS / Solidity Developer</span>
                                </div>
                                <div className="a-header-right">
                                    <span>June 2020 - February 2021</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Participated in a hackathon organized by Binance.
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> This is a Part-time role. As a smart contract developer, my role is to work with other smart contract developers who are working on the smart contracts being
                                used by the company. The primary language being used is Solidity and in order for it to be read by a frontend framework, I used Web3 JS alongside Node JS for the smart
                                contract data to be readable by either React JS or Vue JS.
                                </span>
                            </div>                                    
                        </Accordion.Body>
                    </Accordion.Item> */}
                    {/* <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">Yondu Inc</span>
                                    <span className="text-bold">Vue JS Developer</span>
                                </div>
                                <div className="a-header-right">
                                    <span>January 2021 - August 2022</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Programs created were deployed in GCash Application.
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> A Frontend Developer role that includes Web Development for clients using Vue JS as well as 
                                Miniapp Frontend development using a Javascript framework similar to Vue JS.
                                </span>
                            </div>
                            
                        </Accordion.Body>
                    </Accordion.Item> */}
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">TOA Inc</span>
                                    <span className="text-bold">Chief Technology Officer</span>
                                </div>
                                <div className="a-header-right">
                                    <span>August 2017 - February 2019</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Attended several International Blockchain Expos.
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> The role is to fulfill the technical roadmap of the company as well attending and representing 
                                the project in different blockchain expos. It also includes managing the company operations here in the Philippines as well as attending 
                                to meetings requested by prospective partners to answer their technical questions regarding the project.
                                </span>
                            </div>                                    
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">Indra Philippines Inc</span>
                                    <span className="text-bold">Support Analyst Team Lead</span>
                                </div>
                                <div className="a-header-right">
                                    <span>January 2014 - July 2017</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Was able to grow the project team members from 4 to 20+.
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> The role is to spearhead a new project that will cater to Telefonica UK, a UK-based Telco, 
                                to provide technical support and monitoring to their internal tools being used to monitor their servers to make sure that their operations will run smoothly for their users.
                                </span>
                            </div>                                    
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            <div className="a-header">
                                <div className="a-header-left">
                                    <span className="text-bold">Orchid Cybertech Services Inc</span>
                                    <span className="text-bold">Network Engineer</span>
                                </div>
                                <div className="a-header-right">
                                    <span>January 2010 - December 2013</span>
                                </div>
                            </div>
                        </Accordion.Header>
                        <Accordion.Body>
                            <div className="a-body text-sm-start">
                                <span>
                                    <span className="text-bold">Highlight:</span> Recipient of Employee of the Year award and became CCNA certified
                                </span>
                                <span>
                                <span className="text-bold">Role:</span> After taking up a CCNA (Cisco) bootcamp, I became a Network Engineer for TPG Telecoms which is one of the 
                                largest Australian Telco. The tasks revolve on using the command-line interface of a corporate client's Cisco routers to connect a certain branch to their other branches.
                                </span>
                            </div>                                    
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            }
        </TrackVisibility>
    </section>
  )
}

export default Jobs