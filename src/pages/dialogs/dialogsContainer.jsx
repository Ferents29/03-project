import React from 'react';
import {addTextMessageAC, onTextMessageChangeAC} from "../../redux/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
   return {
       state:state,
   }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addTextMessage: () => {
            dispatch(addTextMessageAC());
        },
        onTextMessageChange: (textMessageChange) => {
            dispatch(onTextMessageChangeAC(textMessageChange));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);