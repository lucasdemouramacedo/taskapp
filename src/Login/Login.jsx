import './Login.css'
import Logo from '.././assets/taskapp.svg';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

function Login() {

    const circles = [
        { width: 150, height: 150, top: '-10%', left: '-5%' },
        { width: 120, height: 120, top: '-5%', left: '75%' },
        { width: 150, height: 150, top: '65%', left: '35%' },
        { width: 80, height: 80, top: '20%', left: '30%' },
        { width: 120, height: 120, top: '75%', left: '5%' },
        { width: 110, height: 110, top: '76%', left: '85%' },
        { width: 50, height: 50, top: '40%', left: '95%' },
      ];

    return (
        <div className='main'>
            <div className='logo-container'>
                <img className='logo' src={Logo} />
            </div>
            <div className='container'>
                <h2 className='title'>Entre na sua conta</h2>
                <Input type="text" label="Email"></Input>
                <Input type="password" label="Senha"></Input>
                <div className='forgot-password'>
                    <a>Esqueceu sua senha?</a>
                </div>
                <Button label="Entrar"></Button>
                <div className='sign-up'>
                    <span>Ainda não tem uma conta?</span> <Link className='link' to="/register">Cadastre-se</Link>
                </div>
            </div>
            {circles.map((circle, index) => (
                <div
                    className='circle'
                    key={index}
                    style={{
                        width: circle.width,
                        height: circle.height,
                        top: circle.top,
                        left: circle.left,
                    }}
                />
            ))}
        </div>
    )
}

export default Login
