import React from 'react';
import {Pagination} from "react-bootstrap";

let Paginator = (props) => {
        let countPages = Math.ceil(props.totalUsersCount / props.sizePage);
        let pages = [];
        for (let i = 1; i <= countPages; i++){
            pages.push(i);
        }

        return (
                <div className="m-5">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            {/*<Pagination.Item>{p}</Pagination.Item>*/}
                            <Pagination.Ellipsis />
                            {pages.map(p =>
                                <div>
                                    {props.currentPage === p
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
        )
}
export default Paginator;