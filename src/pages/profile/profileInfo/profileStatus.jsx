import React, {useEffect, useState} from 'react';

export const ProfileStatus = (props) => {
    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status);
    },[props.status]);
    let activateEditMode = () => {
        setEditMode(true);
    }

    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatusThunk(status);
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }
        return (
            <div>
                { ! editMode &&
                <div >
                    <span onDoubleClick={activateEditMode}>
                        {props.status || "Пользователь не обозначил свой статус."}
                    </span>
                </div>}
                {editMode &&
                <div>
                    <input onBlur={deactivateEditMode}
                           onChange={onStatusChange}
                           value={status}/>
                </div>}
            </div>
        )
}