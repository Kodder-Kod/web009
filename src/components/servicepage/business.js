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
import SavingsIcon from '@mui/icons-material/Savings';
import { FaHandsHelping } from "react-icons/fa";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CategoryCard from "../../components/client/page";

import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

import WebhookIcon from '@mui/icons-material/Webhook';



import { IoBusiness } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa";
import { AiFillAndroid } from "react-icons/ai";

import AddCardIcon from '@mui/icons-material/AddCard';
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
import BusinessIcon from '@mui/icons-material/Business';
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import Footer from "../../components/Footer/Footer.js";
import Services from '../../components/PageHeader/Services';
import IndexNavbar from '../../components/Navbars/IndexNavbar';
import ContactApi from '../../components/PageHeader/Contact';

const CATEGORIES = [
    {
        img: "#",
        icon: <AiFillAndroid />,
        title: "Frontend Web Development",
        desc: "300 Courses",
    },
    {
        img: '../image/blogs/blog-12.jpeg',
        icon: <AiFillAndroid />,
        title: "Backend Web Development",
        desc: "200 Courses",
    },
    {
        img: './image/blogs/blog-10.jpeg',
        icon: <AiFillAndroid />,
        title: "Web Security & Performance",
        desc: "240 Courses",
    },
    {
        img: '../image/blogs/blog-13.png',
        icon: <AiFillAndroid />,
        title: "Full-Stack Web Development",
        desc: "100 Courses",
    },
];



const items = [
    {
        icon: <PointOfSaleIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: "Point of Sale (POS) Systems",
        pin: "/services/business/POS",
        description:
            "POS systems facilitate transactions, manage inventory, and enhance customer interactions, improving the overall checkout process and providing valuable sales data."
    },
    {
        icon: <SupportAgentRoundedIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Customer Relationship Management (CRM)',
        pin: "/services/business/CRM",
        description:
            "CRM systems centralize customer information, streamline communication, and support sales management, enhancing customer satisfaction and loyalty."
    },
    {
        icon: <BusinessIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Enterprise Resource Planning (ERP)',
        pin: "/services/business/EPR",
        description:
            'ERP systems integrate various business processes into a single system, providing a comprehensive view of operations and driving efficiency and informed decision-making.'
    },
    {
        icon: <AddBusinessIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'eCommerce Platforms ',
        pin: "/services/business/Ecommerce",
        description:
            "eCommerce platforms enable businesses to sell products and services online, offering tools for website creation, payment processing, and order management."
    },
    {
        icon: <AddCardIcon style={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Payroll Systems',
        pin: "/services/business/Payroll",
        description:
            "Payroll systems automate the process of managing employee salaries, tax deductions, and other related tasks, ensuring accuracy, compliance, and timely payments."
    },
    {
        icon: < SavingsIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
        title: 'Savings and Credit Cooperative Organizations (SACCOs)',
        pin: "/services/business/Sacco",
        description:
            'SACCOs provide financial services to members, including savings and credit facilities, offering competitive interest rates and fostering community financial well-being.'
    },
];



const Business = () => {


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
                    src={require("../../assets/img/blob.png")}
                />
                <img
                    alt="..."
                    className="path2"
                    src={require("../../assets/img/path2.png")}
                />
                <img
                    alt="..."
                    className="shapes triangle"
                    src={require("../../assets/img/triunghiuri.png")}
                />
                <img
                    alt="..."
                    className="shapes wave"
                    src={require("../../assets/img/waves.png")}
                />
                <img
                    alt="..."
                    className="shapes squares"
                    src={require("../../assets/img/patrat.png")}
                />
                <img
                    alt="..."
                    className="shapes circle"
                    src={require("../../assets/img/cercuri.png")}
                />
                <div className="content-center">
                    <Row className="row-grid justify-content-between align-items-center text-left">
                        <Col lg="6" md="6">
                            <h3 className=" sm:text-5xl font-semibold text-black  " style={{ fontSize: 35, fontWeight: "bold", }}>
                                Business Solutions
                            </h3>

                            <p className="text-white mb-3" style={{ fontSize: 16 }}>
                                Our business solutions streamline operations, improve customer interactions, and drive growth. With POS for efficient transactions, CRM for customer management, ERP for integrated processes, eCommerce for online selling, Payroll for accurate payments, and SACCO systems for financial services, each product simplifies processes and boosts productivity. This guide highlights each solution’s benefits for your business needs.
                            </p>

                            <div className="btn-wrapper mb-3">
                                <p className="category text-success d-inline">
                                Social Media  
                                </p>
                                <Button
                                    className="btn-link"
                                    color="success"
                                    href="#Services"

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
                                src={require("../../assets/img/services/biz.jpeg")}
                            />
                        </Col>
                    </Row>
                </div>
            </div>



            <section id="#Services">
                <Box
                    id="highlights"
                    sx={{
                        pt: { xs: 4, sm: 12 },
                        pb: { xs: 8, sm: 16 },
                        color: 'white',


                    }}
                >
                    <Container
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 3, sm: 6 },
                        }}
                    >

                        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">

                            <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>Empower Your Business</h3>

                            <p className=" sm:text-5xl font-semibold text-black text-center mb-5" style={{ fontSize: 16, }}>
                                Discover our cutting-edge IT solutions designed to drive innovation and efficiency. From bespoke software and management systems to comprehensive data analysis and robust networking infrastructure, we provide the tools to transform and elevate your business operations. Let us help you achieve your goals with our expert services.
                            </p>
                        </div>

                        <Grid container spacing={1}>
                            {items.map((item, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Stack
                                        direction="column"
                                        color="inherit"
                                        component={Card}
                                        spacing={1}
                                        useFlexGap
                                        sx={{
                                            p: 3,
                                            height: '90%',
                                            border: '1px solid',
                                            borderColor: '#5e72e4',
                                            background: 'transparent',
                                            borderRadius: 15,
                                            backgroundColor: 'grey.900',
                                        }}
                                    >
                                        <NavLink href={item.pin}  >
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Box>{item.icon} </Box>
                                            </div>

                                            <div style={{ marginBottom: 15 }}>

                                                <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>

                                                    <Typography fontWeight="Bold" gutterBottom>
                                                        {item.title}
                                                    </Typography>

                                                </div>
                                            </div>
                                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'center' }}>
                                                <Typography variant="body2" sx={{ color: 'grey.400', }} style={{ fontStyle: "light", }} >
                                                    {item.description}
                                                </Typography>
                                            </div>
                                            <div style={{ marginTop: 20 }}>
                                                <NavLink href={item.pin} style={{ color: "#00bbff", }} >
                                                    Read More  ...
                                                </NavLink>
                                            </div>
                                        </NavLink>

                                    </Stack>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

            </section>

            <section className="section " >

                <Container>
                    <Row className="justify-content-center">
                        <Col lg="12">
                            <div >

                                <h3 className=" sm:text-5xl font-semibold text-black text-center " style={{ fontSize: 35, fontWeight: "bold", }}>Your benefits</h3>

                            </div>

                            <Row className="row-grid justify-content-center" >
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-primary" style={{ marginBottom: 10 }}>
                                            <WebhookIcon sx={{ color: "#00bbff", fontSize: 50 }} />,
                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontSize: 18, fontWeight: "bold" }} >Streamlined Operations</h4>
                                        <hr className="line-primary" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16 }} >
                                            Business solutions automate processes and workflows, reducing manual effort and improving operational efficiency
                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }} >
                                        <div className="icon icon-warning" style={{ marginBottom: 10 }}>
                                            <SupportAgentRoundedIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18, }}>Enhanced Customer Relations:</h4>
                                        <hr className="line-warning" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16, }}>
                                            These solutions often include CRM (Customer Relationship Management) tools that help businesses manage and strengthen relationships with customers, leading to better satisfaction and retention.


                                        </p>
                                    </div>
                                </Col>
                                <Col lg="4">
                                    <div style={{ margin: 20 }}  >
                                        <div className="icon icon-success" style={{ marginBottom: 20 }}>
                                            <PrecisionManufacturingIcon sx={{ color: "#00bbff", fontSize: 50 }} />,

                                        </div>
                                        <h4 className="info-title" style={{ marginBottom: 20, fontWeight: "bold", fontSize: 18 }}>Improved Productivity</h4>
                                        <hr className="line-success" style={{ marginBottom: 20 }} />
                                        <p style={{ marginBottom: 20, fontSize: 16, }}>
                                            By optimizing tasks and providing tools for collaboration and communication, business solutions boost overall productivity within the organization.
                                        </p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>


            <ContactApi />

            <Footer />
        </>
    )
}


export default Business