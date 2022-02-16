import React from "react";
import styles from "./FormsControl.module.css";

export const TextArea = ({input, meta, ...props}) => {
    const hasTouched = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + hasTouched ? styles.error : ""}>
            <div>
                <textarea {...input} {...props}/><br/>
            </div>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    );
}

export const Input = ({input, meta, ...props}) => {
    let hasTouched = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + hasTouched ? styles.error : ""}>
            <textarea {...input} {...props}/><br/>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    );
}