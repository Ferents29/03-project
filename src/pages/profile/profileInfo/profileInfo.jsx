import React from 'react';
import {Card, Container, ListGroup, ListGroupItem} from "react-bootstrap";
import Preloader from "../../../common/Preloader/preloader";
import {ProfileStatus} from "./profileStatus";

const ProfileInfo = (props) => {

        return (! props.profile) ? <Preloader /> : (
            <div>
                <Container>
                    <h2>Сторінка користувача </h2>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top"
                                  src={props.profile.photos.large} />
                        <Card.Body>
                            <Card.Title>Статус користувача</Card.Title>
                            <Card.Text>
                                <ProfileStatus status={props.status}
                                               updateStatusThunk={props.updateStatusThunk}/>
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Cras justo odio</ListGroupItem>
                            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                            <ListGroupItem>Vestibulum at eros</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                    <hr />
                </Container>
            </div>
        )
}

export default ProfileInfo;