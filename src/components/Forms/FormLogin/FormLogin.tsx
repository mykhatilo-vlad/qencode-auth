import { FormEvent, useState, useEffect } from 'react';
import styles from './FormLogin.module.css';
import Heading from '../../Typography/Heading/Heading';
import SSOButtons from '../../Buttons/SSOButtons/SSOButtons';
import FieldEmail from '../../Fields/FieldEmail/FieldEmail';
import FieldPass from '../../Fields/FieldPass/FieldPass';
import Button from '../../Buttons/Button/Button';
import Paragraph from '../../Typography/Paragraph/Paragraph';
import Link from '../../Typography/Link/Link';
import InfoBox from '../../Typography/InfoBox/InfoBox';
import axios from '../../../configs/axios';
import { useCookies } from 'react-cookie';

type FormLogin = {
    toForgotPass?: () => void,
}

const FormLogin = ( {toForgotPass}: FormLogin ) => {
    const [ cookies, setCookies ] = useCookies();

    const [ fieldsValue, setFieldsValue ] = useState( {
        email: '',
        password: '',
    });

    const [info, setInfo] = useState<{
        text: string,
        type: 'success'|'warning'|'error'
    }>({
        type: 'success',
        text: '', 
    });

    const [ showPass, setShowPass ] = useState(false);


    useEffect(() => {
        if( cookies.__qencode_refresh_token ) {
            axios.post('/v1/auth/refresh-token', {
                refresh_token: cookies.__qencode_refresh_token,
            }).then((resp: any): void => {
                if(resp.data.error === 0 && resp.data.access_token && resp.data.refresh_token) {
                    setCookies('__qencode_refresh_token', resp.data.refresh_token);

                    setInfo({
                        type: 'success',
                        text: 'Already loggedin'
                    });
                }
            })
        }
    }, [])


    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        
        if(showPass) {
            axios.post('/v1/auth/login', fieldsValue)
                .then((resp: any): void => {
                    if(resp.data.error === 0) {
                        setCookies('__qencode_refresh_token', resp.data.refresh_token);

                        setInfo({
                            type: 'success',
                            text: resp.data.detail
                        });
                    }
                })
                .catch((error: any): void => {
                    setInfo({
                        type: 'error',
                        text: 'Something get wrong. Please, try again!'
                    })
                })
        } else {
            setShowPass(true);
        }
    }

    const onChange = (name: string, value: string) => {
        setFieldsValue( {...fieldsValue, ...{
            [name]: value,
        }} )
    }

    return (
        <>
            <Heading title="Log in to your account" />

            { info.text && ( <InfoBox type={info.type} text={info.text} /> ) }

            <SSOButtons />

            <span className="hr-text">OR</span>

            <form className="form-vertical" onSubmit={onSubmit}>
                <FieldEmail
                    label="Work Email"
                    placeholder='Work Email'
                    name="email"
                    value={fieldsValue.email}
                    onChange={(value) => onChange('email', value)}
                />

                {showPass && (
                    <div className={styles.FormLoginPass}>
                        <FieldPass
                            label="Password"
                            placeholder="Password"
                            name="password"
                            value={fieldsValue.password}
                            onChange={(value) => onChange('password', value)}
                        />

                        <div className={styles.FormLoginForgot}>
                            <Button 
                                label="Forgot your password?"
                                classes={['as-link']}
                                onClick={toForgotPass}
                            />
                        </div>
                    </div>
                )}


                <Button label="Log in to Qencode" type="submit" classes={[ 'button-primary' ]} />
            </form>

            <Paragraph align="center">Is your company new to Qencode? <Link url="#" title="Sign up" /></Paragraph>
        </>
    );
}

export default FormLogin;