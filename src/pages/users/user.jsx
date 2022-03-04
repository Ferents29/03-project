import React from 'react';
import {Card, Button} from "react-bootstrap";
import girls from "../../assets/girls5.jpg";
import {NavLink} from "react-router-dom";

let User = (props) => {
        return (
                <Card style={{ width: '18rem' }}>
                        <NavLink to={"/profile/"+props.user.id}>
                            <Card.Img variant="top"
                                      src={props.user.photos.small !== null ? props.user.photos.small : girls}/>
                        </NavLink>
                        <Card.Body>
                            <span>Ім'я користувача: </span><br/>
                            <Card.Title>{props.user.name}</Card.Title>
                            <span><i>{props.user.status}</i></span><br/>
                            <Card.Text>
                                <span>{'props.user.location.city'}</span><br/>
                                <span><h4>{'props.user.location.country'}</h4></span>
                            </Card.Text>
                            {props.user.followed
                                ? <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.unfollow(props.user.id);
                                              // props.unfollowThunk(props.user.id) //Закоментуємо даний колбек,
                                                                           // так як в нас проблеми з
                                                                           // реєстрацією на АПИ.
                                          }
                                } variant="danger">Unfollow</Button>
                                : <Button disabled={props.followingInProgress.some(id => id === props.user.id)}
                                          onClick={() => {
                                              props.follow(props.user.id)
                                    // props.followThunk(props.user.id) //Закоментуємо даний колбек,
                                                               // так як в нас проблеми з
                                                               // реєстрацією на АПИ.
                                }} variant="success">Follow</Button>}
                        </Card.Body>
                </Card>
        )

}
export default User;