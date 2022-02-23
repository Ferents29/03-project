import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import HeaderContainer from "./components/HeaderContainer";
import {connect} from "react-redux";
// import {getAuthUserDataThunkAC} from "./redux/auth-reducer";
import {initializeAppThunkAC} from "./redux/app-reducer";
import Preloader from "./common/Preloader/preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunk();
    }
    render() {
        if ( ! this.props.initialized){
            return <Preloader />;
        }
        return (
            <div>
                <HeaderContainer/>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
  return {
      initialized: state.app.initialized,
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        // authThunk: () => {
        //     dispatch(getAuthUserDataThunkAC());
        // },
        initializeAppThunk: () => {
            dispatch(initializeAppThunkAC());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
