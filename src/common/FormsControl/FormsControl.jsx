import React from "react";

export const TextArea = ({input, meta, ...props}) => {
    debugger
    return (
        <div>
            <textarea {...input} {...props}/>
        </div>
    );
}