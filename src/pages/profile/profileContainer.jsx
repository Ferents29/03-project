import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getProfileThunkAC, setUserProfileAC} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if ( ! userId){
            userId = 10;
        }
        this.props.getProfileThunk(userId);
    }
    render() {
        return <Profile {...this.props}
                        profile={this.props.profile}/>;
    }
}
let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfile: (profile) => {
            dispatch(setUserProfileAC(profile));
        },
        getProfileThunk: (userId) => {
            dispatch(getProfileThunkAC(userId));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// let withAuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let withUrlDataContainerComponent = withRouter(withAuthRedirectComponent);
//
// export default connect(mapStateToProps,mapDispatchToProps)(withUrlDataContainerComponent);