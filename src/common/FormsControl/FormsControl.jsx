import React from "react";
import styles from "./FormsControl.module.css";
import {required} from "../../utils/validators/validators";
import {Field} from "redux-form";
import {Form} from "react-bootstrap";

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
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps}/>
        </FormControl>
    );
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input {...input} {...restProps}/>
        </FormControl>
    );
}
export const createField = (text,name,type,component,
                            validate,placeholder,props={}) => (
    <div>
        <Form.Label>{text}</Form.Label>
        <Field name={name}
               type={type}
               component={component}
               validate={validate}
               placeholder={placeholder}
               {...props}/>
    </div>
)