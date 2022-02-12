import React from 'react';

export default class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status:this.props.status,
    }
    activateEditMode = () => {
        this.setState(
            {editMode: true,}
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {editMode: false,}
        )
        this.props.updateStatusThunk(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
                status: e.currentTarget.value,
            }
        )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState(
                {status: this.props.status}
            );
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode}>
                    {this.props.status || "Пользователь не обозначил свой статус."}
                </div>}

                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>}
            </div>
        )
    }
}