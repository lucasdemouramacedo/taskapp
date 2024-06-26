import './Login.css'
import Logo from '.././assets/taskapp.svg';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';

function Login() {

    return (
        <main>
            <div className='logo-container'>
                <img className='logo' src={Logo} />
            </div>
            <div className='container'>
                <h1 className='title'>Login</h1>
                <Input type="text" label="Email"></Input>
                <Input type="password" label="Senha"></Input>
                <div className='link'>
                    <a >Esqueceu sua senha?</a>
                </div>
                <Button label="Entrar"></Button>
            </div>
        </main>
    )
}

export default Login
