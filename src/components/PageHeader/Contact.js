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

import React, { useState } from 'react'

import { db } from "../../config";
import { ref, set, onValue, push, remove, get } from 'firebase/database';


const ContactApi = () => {

    const [userName, setUserName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    const sendMessage = async () => {

        try {
            const dbRef = ref(db, `Chisendwebsite/messages/`);

            const newbranchRef = push(dbRef, {

                Name: userName,
                Email: email,
                Phone: phone,
                Meassge: message,

            });

            const newCreditKey = newbranchRef.key;

            setUserName("")
            setPhone("")
            setEmail("")
            setMessage("")
            alert("Message sent successfully!");

        }
        catch (error) {

            console.error("Error sending message: ", error);
            alert("Failed to send message. Try again.");
        }




    };

    return (

        <>
            <section className="section">
                <div className="squares square2" />
                <div className="squares square3" />
                <div className="squares square7" />

                <Container>

                    <div className="mx-auto max-w-2xl py-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8 ">
                        <h3 className=" sm:text-5xl font-semibold text-black text-center my-3" style={{ fontSize: 40, fontWeight: "bold", }}>Contact </h3>
                    </div>

                    <Row>

                        <Col md="6">
                            <Card className="card-plain">
                                <CardBody>
                                    <Form onSubmit={sendMessage}>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Your Name</label>
                                                    <Input
                                                        placeholder="Betty"
                                                        type="text"
                                                        value={userName}
                                                        onChange={(e) => setUserName(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label classname="text-white">Email address</label>
                                                    <Input placeholder="Betty@email.com"
                                                        type="email"
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="6">
                                                <FormGroup>
                                                    <label>Phone</label>
                                                    <Input placeholder="0712345678" type="tel"
                                                        pattern="[0-9]*"
                                                        inputMode="numeric"
                                                        value={phone}
                                                        onChange={(e) => setPhone(e.target.value)} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md="12">
                                                <FormGroup>
                                                    <label>Message</label>
                                                    <Input placeholder="Hello there!" type="textarea"
                                                        style={{
                                                            height: '170px', // Set a fixed height
                                                            border: '0.5px solid #dcdcdc ', // Set border style
                                                            borderRadius: '10px', // Optional: round corners
                                                            padding: '10px' // Optional: add some padding 
                                                        }}
                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Button
                                            className="btn-round float-right"
                                            color="primary"
                                            data-placement="right"
                                            id="tooltip341148792"
                                            type="submit"
                                        >
                                            Send Message
                                        </Button>

                                    </Form>
                                </CardBody>
                            </Card>
                        </Col>


                        <Col className="ml-auto" md="4">

                            <div className=" info-horizontal "  >
                                <div className="icon icon-primary  ">
                                    <i className="tim-icons icon-square-pin" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Find us at the office</h4>
                                    <p>
                                        Chi-Send Offices , Utawala <br />
                                        Mon - Sat,07:00-19:00 <br />
                                        Nairobi , Kenya <br />
                                    </p>
                                </div>
                            </div>

                            <div className="info info-horizontal ">
                                <div className="icon icon-primary">
                                    <i className="tim-icons icon-mobile" />
                                </div>
                                <div className="description">
                                    <h4 className="info-title">Connect with us </h4>
                                    <p>
                                        Chi-send contact <br />
                                        +254794410921 <br />
                                        trentbrian007@gmail.com
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>



                </Container>
            </section>
        </>

    )


}


export default ContactApi