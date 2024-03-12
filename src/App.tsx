import { ReactElement, useState } from 'react'
import './App.css'
import FormLogin from './components/Forms/FormLogin/FormLogin';
import FormForgotPass from './components/Forms/FormForgotPass/FormForgotPass';
import FormNewPass from './components/Forms/FormNewPass/FormNewPass';
import {useSearchParams} from 'react-router-dom';

type FormsMap = Map<string, ReactElement>;

function App() {
  const [searchParams] = useSearchParams();
  const isNewPass = Boolean(searchParams.get('secret') && searchParams.get('token'));
const [ currentForm, setCurrentForm ] = useState(isNewPass ? 'newPass' : 'login');
  
  const forms: FormsMap = new Map([
    ['login', <FormLogin toForgotPass={() => setCurrentForm('forgotPass')} />],
    ['forgotPass', <FormForgotPass 
      toLogin={() => setCurrentForm('login')} 
      toNewPass={() => setCurrentForm('newPass')} 
    />],
    ['newPass', <FormNewPass />],
  ]);

  return (
    <div className="App">
        <a href={window.location.origin}>
          <img width="179" height="32" src="logo.svg" alt="Logo" className="logo" />
        </a>

        { forms.get(currentForm) }
    </div>
  )
}

export default App
