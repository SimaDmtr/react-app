import s from "./Dialogs.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import React from "react";
import {FieldInput} from "../common/FormControls/FormsControls";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
    return (
        <form className={s.dialogs_area_textfield} onSubmit={props.handleSubmit}>
            <Field
                component={FieldInput}
                name="newMessageBody"
                placeholder="Enter your message"
                validate={[required, maxLength100]}
                className={s.dialogs_area_textfield__input}
            />
            <button className={s.dialogs_area_textfield__send}>
                <img
                    src="https://image.flaticon.com/icons/svg/1301/1301459.svg"
                    alt=""
                />
            </button>
        </form>
    );
};
export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
