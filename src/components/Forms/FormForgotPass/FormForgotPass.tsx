import { FormEvent, useState } from "react";
import styles from './FormForgotPass.module.css';
import Heading from "../../Typography/Heading/Heading";
import FieldEmail from "../../Fields/FieldEmail/FieldEmail";
import Button from "../../Buttons/Button/Button";
import axios from "../../../configs/axios";
import InfoBox from '../../Typography/InfoBox/InfoBox';

type FormForgotPassProps = {
    toLogin: () => void,
    toNewPass: () => void,
}

const FormForgotPass = ({toLogin, toNewPass}: FormForgotPassProps) => {
    const [ fieldsValue, setFieldsValue ] = useState({
        email: '',
        redirect_url: window.location.href,
    });

    const [info, setInfo] = useState<{
        text: string,
        type: 'success'|'warning'|'error'
    }>({
        type: 'success',
        text: '', 
    });

    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        axios.post('/v1/auth/password-reset', fieldsValue)
            .then((resp): void => {
                if( resp.data.error === 0 ) {
                    setInfo({
                        type: 'warning',
                        text: resp.data.detail,
                    })
                }
            })
            .catch((error): void => {
                setInfo({
                    type: 'error',
                    text: 'Something went wrong. Please, try again!'
                })
            });
    }

    const onChange = (name: string, value: string) => {
        setFieldsValue({...fieldsValue, ...{
            [name]: value
        }})
    }

    return (
        <>
            <Heading title="Forgot Password?" />

            { info.text && ( <InfoBox type={info.type} text={info.text} /> ) }

            <form className={`form-vertical ${styles.FormForgotPass}`} onSubmit={onSubmit}>
                <FieldEmail
                    label="Enter your email"
                    placeholder="Enter your email"
                    name="email"
                    value={fieldsValue.email}
                    onChange={(value) => onChange( 'email', value )}
                />

                <Button classes={['button-primary', styles.SubmitButton]} label="Send" type="submit" />

                <Button label="Cancel" onClick={toLogin} classes={[styles.CancelButton]}  />

            </form>
        </>
    );
}

export default FormForgotPass;