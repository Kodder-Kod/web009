import * as React from 'react';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import LanguageIcon from '@mui/icons-material/Language';
import { IoWifiSharp } from "react-icons/io5";
import DashboardIcon from '@mui/icons-material/Dashboard';
import LanIcon from '@mui/icons-material/Lan';
import { FaHandsHelping } from "react-icons/fa";

import CategoryCard from "../../../components/client/page";



import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

// react plugin used to create charts
 
// reactstrap components
import {
    //  Button,
    // Card,
    // CardHeader,
    //  CardBody,
    CardFooter,
    //  CardTitle,
    ListGroupItem,
    ListGroup,
    // Container,
    // Row,
    // Col,
} from "reactstrap";

import {
    //Container,
    //Card,
    CardContent,
    Typography,
    Grid,
    // Button,
    Box,
    AvatarGroup,
    Avatar,
    Alert
} from "@mui/material";

import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    CardTitle,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel,
} from "reactstrap";
// core components

import { Stack } from "@mui/system";
import ExamplesNavbar from "../../../components/Navbars/ExamplesNavbar.js";
import Footer from "../../../components/Footer/Footer.js";
import Services from '../../../components/PageHeader/Services';
import IndexNavbar from '../../../components/Navbars/IndexNavbar';
import ContactApi from '../../../components/PageHeader/Contact';

const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 20,000",
      features: [
        "Responsive website design",
        "SEO-ready structure",
        "Hosting support",
        "Email support"
      ],
      img: require("../../../assets/img/bitcoin.png"),
      buttonColor: "primary"
    },
    {
      title: "Intermediate Package",
      description: "Best Value",
      price: "Ksh 60,000",
      features: [
        "Custom website design",
        "Basic web app functionality",
        "SEO and analytics integration",
        "Support via email and chat",
        "Monthly performance reports",
        "Security monitoring"
      ],
      img: require("../../../assets/img/bitcoin.png"),
      buttonColor: "success"
    },
    {
      title: "Advanced Package",
      description: "Premium Plan",
      price: "Ksh 100,000",
      features: [
        "Full-scale web and app development",
        "Multi-platform compatibility",
        "SEO, analytics, and marketing tools",
        "24/7 priority support",
        "Performance optimization",
        "Custom security protocols",
        "Real-time monitoring and alerts",
        "Continuous maintenance & updates"
      ],
      img: require("../../../assets/img/bitcoin.png"),
      buttonColor: "info"
    }
  ];
  


const Dev= () => {


    React.useEffect(() => {
        document.body.classList.toggle("landing-page");
        // Specify how to clean up after this effect:
        return function cleanup() {
            document.body.classList.toggle("landing-page");
        };
    }, []);

    return (
        <>
            <IndexNavbar />
            <div className="page-header">
                <img
                    alt="..."
                    className="path"
                    src={require("../../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                    src={require("../../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                    src={require("../../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                    src={require("../../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                    src={require("../../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                    src={require("../../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h1 className="text-white">
                            Web and App Development<br />
                                <span className="text-white">secured</span>
                            </h1>
                            <p className="text-white mb-3">
                            We create stunning websites and powerful apps that deliver seamless user experiences. Whether it's a business website, mobile app, or web app, we tailor each solution to meet your needs.
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                    Order Now
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                    size="sm"
                                >
                                    <i className="tim-icons icon-minimal-right" />
                                </Button>
                            </div>
                            <div className="btn-wrapper">
                                <div className="button-container">
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-dribbble" />
                                    </Button>
                                    <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="#pablo"
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className="fab fa-facebook" />
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img
                                alt="..."
                                className="img-fluid"
                                src={require("../../../assets/img/services/programing.png")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>


            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >
                                <h1 className="text-center">Your best benefit</h1>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Low Commission</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            Divide details about your work into parts. Write a few
                                            lines about each one. A paragraph describing a feature
                                            will.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Low Commission</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }} >
                                            Divide details about your work into parts. Write a few
                                            lines about each one. A paragraph describing a feature
                                            will.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                            <i className="tim-icons icon-chart-pie-36" />
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>High Incomes</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Divide details about your product or agency work into
                                            parts. Write a few lines about each one. A paragraph
                                            describing feature will be a feature.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                            <i className="tim-icons icon-single-02" style={{ marginBottom: 20 }} />
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Verified People</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20 }}>
                                            Divide details about your product or agency work into
                                            parts. Write a few lines about each one. A paragraph
                                            describing be enough.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>



            <section >

            <Container>
                    <Row style={{ display: "flex", alignItems: "center", justifyContent: 'center' }} >
                        <Col md="4" style={{ marginTop: 100 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                <h1>
                                    Pricing
                                    <hr className="line-info" />
                                </h1>
                            </div>

                        </Col>
                    </Row>



                    <Row style={{ marginTop: 120 }}>
      {pricingPlans.map((plan, index) => (
        <Col md="4" key={index}>
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={plan.img}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">{plan.title}</h4>
                  <span>{plan.description}</span>
                  <hr className={`line-${plan.buttonColor}`} />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  {plan.features.map((feature, idx) => (
                    <ListGroupItem key={idx}>• {feature}</ListGroupItem>
                  ))}
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color={plan.buttonColor}>
                {plan.price}
              </Button>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </Row>
 



                </Container>
            </section>

            <ContactApi/>

            <Footer />
        </>
    )
}


export default Dev