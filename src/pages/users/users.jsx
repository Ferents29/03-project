import React from 'react';
import {Card, Container, Button, Pagination} from "react-bootstrap";
import girls from "../../assets/girls5.jpg";
import {NavLink} from "react-router-dom";

let Users = (props) => {

        let countPages = Math.ceil(props.state.usersPage.totalUsersCount / props.state.usersPage.sizePage);
        let pages = [];
        for (let i = 1; i <= countPages; i++){
            pages.push(i);
        }

        return (
            <Container>
                <h1>Users page</h1>
                {props.state.usersPage.usersData.map(u =>
                    <Card style={{ width: '18rem' }}>
                        <NavLink to={"/profile/"+u.id}>
                            <Card.Img variant="top"  src={u.photos.small !== null ? u.photos.small : girls}/>
                        </NavLink>
                        <Card.Body>
                            <span>Ім'я користувача: </span><br/>
                            <Card.Title>{u.name}</Card.Title>
                            <span><i>{u.status}</i></span><br/>
                            <Card.Text>
                                <span>{'u.location.city'}</span><br/>
                                <span><h4>{'u.location.country'}</h4></span>
                            </Card.Text>
                            {u.followed
                                ? <Button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id);
                                              // props.unfollowThunk(u.id) //Закоментуємо даний колбек,
                                                                           // так як в нас проблеми з
                                                                           // реєстрацією на АПИ.
                                          }
                                } variant="danger">Unfollow</Button>
                                : <Button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                    // props.followThunk(u.id) //Закоментуємо даний колбек,
                                                               // так як в нас проблеми з
                                                               // реєстрацією на АПИ.
                                }} variant="success">Follow</Button>}
                        </Card.Body>
                    </Card>
                )}

                <div className="m-5">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            {/*<Pagination.Item>{p}</Pagination.Item>*/}
                            <Pagination.Ellipsis />
                            {pages.map(p =>
                                <div>
                                    {props.state.usersPage.currentPage === p
                                        ? <span><Pagination.Item onClick={ (e) => {props.onPageChange(p)} } active>{p}</Pagination.Item></span>
                                        : <span><Pagination.Item onClick={ (e) => {props.onPageChange(p)} }>{p}</Pagination.Item></span>}

                                    {/*/!*<Pagination.Item>{11}</Pagination.Item>*!/*/}
                                    {/*<Pagination.Item>{13}</Pagination.Item>*/}
                                    {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}
                                    {/*<Pagination.Item>{p[this.props.state.usersPage.totalUsersCount - 1]}</Pagination.Item>*/}
                                </div>
                            )}
                            <Pagination.Ellipsis />
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                </div>

            </Container>
        )

}
export default Users;