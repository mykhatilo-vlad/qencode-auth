import { FormEvent, useState } from "react";
import Heading from "../../Typography/Heading/Heading";
import FieldPass from "../../Fields/FieldPass/FieldPass";
import Button from "../../Buttons/Button/Button";
import InfoBox from "../../Typography/InfoBox/InfoBox";
import axios from '../../../configs/axios';
import { useSearchParams } from "react-router-dom";

type FieldListType = {
    label: string,
    key: string
}

const FormNewPass = () => {
    const [searchParams] = useSearchParams();

    const fieldsList: FieldListType[] = [
        {
            label: 'Password',
            key: 'password'
        },
        {
            label: 'Confirm Password',
            key: 'password_confirm'
        },
    ]

    const [fieldsValue, setFieldsValue] = useState<{[key: string]: string}>({
        password: '',
        password_confirm: '',
        secret: searchParams.get('secret') || '',
        token: searchParams.get('token') || '',
    });

    const [info, setInfo] = useState<{
        type: 'success'|'warning'|'error',
        text: string,
    }>({
        type: 'success',
        text: '',
    })

    const onSubmit = (ev: FormEvent) => {
        ev.preventDefault();

        axios.post('/v1/auth/password-set', fieldsValue)
                .then((resp: any): void => {
                    if(resp.data.error === 0) {
                        setInfo({
                            type: 'success',
                            text: resp.data.detail
                        });

                        setTimeout(() => {
                            window.location.href = window.location.href;
                        }, 1000);
                    }
                })
                .catch((error: any): void => {
                    const responseData = error?.response?.data;
                    setInfo({
                        type: 'error',
                        text: responseData?.detail[0]?.error || responseData?.detail
                    })
                })
    } 

    const onChange = (name: string, value: string) => {
        setFieldsValue({...fieldsValue, ...{
            [name]: value,
        }})
    }

    return (
        <>
            <Heading title="Create new Password?" />

            {info.text && ( <InfoBox type={info.type} text={info.text} /> )}

            <form className="form-vertical" onSubmit={onSubmit}>
                {fieldsList.map((field) => {
                    return (
                        <FieldPass 
                            key={field.key}
                            label={field.label}
                            placeholder="Password"
                            value={fieldsValue[field.key]}
                            name={field.key}
                            showLabel={true}
                            onChange={(value) => onChange(field.key, value)}
                        />
                    );
                })}

                <Button label="Reset Password" type="submit" classes={['button-primary']} />
            </form>
        </>
    )
}

export default FormNewPass;