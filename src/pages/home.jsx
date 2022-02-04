import React, {Component} from 'react';
import CarouselBox from "../components/CarouselBox";
import {Card, Button, CardGroup} from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div>
                <CarouselBox />
                <CardGroup>
                    <Card className="m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top"
                                  src="https://i.pinimg.com/236x/2c/ec/69/2cec69be7145ce977acd612ef019c02d.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top"
                                  src="https://i.pinimg.com/236x/2c/ec/69/2cec69be7145ce977acd612ef019c02d.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top"
                                  src="https://i.pinimg.com/236x/2c/ec/69/2cec69be7145ce977acd612ef019c02d.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                    <Card className="m-3" style={{ width: '18rem' }}>
                        <Card.Img variant="top"
                                  src="https://i.pinimg.com/236x/2c/ec/69/2cec69be7145ce977acd612ef019c02d.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        )
    }
}