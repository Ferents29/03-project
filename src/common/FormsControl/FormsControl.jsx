import React from "react";
import styles from "./FormsControl.module.css";

const FormControl = ({input, meta, child, ...props}) => {
    const hasTouched = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasTouched ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasTouched && <span>{meta.error}</span>}
        </div>
    );
}

export const TextArea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}