import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {authThunkAC, setUserDataAC} from "../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authThunk();
    }
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (id, login, email) => {
            dispatch(setUserDataAC(id, login, email));
        },
        authThunk: () => {
            dispatch(authThunkAC());
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);