import React, {useRef} from "react";
import {Form, FormControl, Overlay, Tooltip} from "react-bootstrap";

export const FieldInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    const target = useRef(null);
    return (
        <>
            <Form.Control ref={target} {...input} {...props} />
            {hasError &&
            <Overlay target={target.current} show={true} placement="right">
                {(props) => (
                    <Tooltip id="overlay-example" {...props}>
                        {meta.error}
                    </Tooltip>
                )}
            </Overlay>
            }
        </>
    );
};

export const PlainInput = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <FormControl {...input} {...props} />
            {hasError && <span> {meta.error} </span>}
        </>
    );
};

export const CheckForm = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <>
            <Form.Check {...input} {...props} />
            {hasError && <span> {meta.error} </span>}
        </>
    );
};