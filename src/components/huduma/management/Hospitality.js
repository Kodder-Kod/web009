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

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import MoneyIcon from '@mui/icons-material/Money';
import StorageIcon from '@mui/icons-material/Storage';


const pricingPlans = [
    {
      title: "Basic Package",
      description: "Entry Plan",
      price: "Ksh 30,000",
      features: [
        "Reservation management",
        "Single-user access",
        "Front desk operations",
        "Daily reports"
      ],
      img: require("../../../assets/img/services/medal.png"),
      buttonColor: "primary"
    },
    {
     title: "Advanced Package",
      description: "Best Value",
      price: "Ksh 50,000",
      features: [
        "Up to 5 users",
        "Housekeeping management",
        "Channel management",
        "Automated billing & invoicing",
        "Guest feedback system",
        "Priority support"
      ],
      img: require("../../../assets/img/services/belt.png"),
      buttonColor: "success"
    },
    {
      title: "Premium Package",
      description: "Premium Plan",
      price: "Ksh 80,000",
      features: [
        "Unlimited users",
        "Loyalty program management",
        "Mobile app for guest services",
        "POS integration",
        "Inventory management",
        "Custom analytics & reports",
        "Third-party integrations",
        "24/7 premium support"
      ],
      img: require("../../../assets/img/services/crown.png"),
      buttonColor: "info"
    }
  ];
  


const Hospitality = () => {


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
                            <h3 className=" sm:text-5xl font-semibold text-black  " style={{ fontSize: 35, fontWeight: "bold", }}>
            
                            Hospitality and Hotel Management System
                            </h3>
                            <p className="text-white mb-3" style={{ fontSize: 16 }}>
                            Hospitality and hotel management system helps manage various operations in the hospitality industry, including reservations, front desk operations, housekeeping, and guest services. It aims to enhance guest experience and streamline hotel operations.
                            </p>
                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                Social Media  
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#pablo"
                                    
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
                                        href="https://twitter.com/"
                                       
                                    >
                                        <i className="fab fa-twitter" />
                                    </Button>
                                     <Button
                                        className="btn-icon btn-simple btn-round btn-neutral"
                                        color="default"
                                        href="https://facebook.com/"
                                       
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
                                src={require("../../../assets/img/services/hotel.png")}
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
                                 <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>Your benefits</h3>
                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                              
                                            <ThumbUpIcon  sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Guest Satisfaction</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Improves guest experience through efficient reservation and check-in processes, leading to higher guest satisfaction and loyalty.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                        < AutoGraphIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }} >Operational Efficiency</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Streamlines front desk, housekeeping, and other operations, reducing workload and errors, ensuring smooth hotel operations.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <MoneyIcon  sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Revenue Management</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Optimizes pricing and inventory management to maximize revenue, helping hotels achieve their financial goals.
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="3">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            < StorageIcon  sx={{ color: "#00bbff", fontSize: 50 }} />,
                                      
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20 }}>Data Insights</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize:16 }}>
                                        Provides valuable insights into guest preferences and behavior, enabling personalized services and targeted marketing strategies.
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
                                  <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>
                                    Pricing
                                    <hr className="line-info" />
                                </h3>
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


export default Hospitality