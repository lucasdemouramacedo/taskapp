import './Register.css'
import Logo from '.././assets/taskapp.svg';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';

function Register() {

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
        <main>
            <div className='logo-container'>
                <img className='logo' src={Logo} />
            </div>
            <div className='container'>
                <h2 className='title'>Cadastre sua conta</h2>
                <Input type="text" label="Email"></Input>
                <Input type="password" label="Senha"></Input>
                <Input type="password" label="Comfirme sua senha"></Input>
                <Button label="Entrar"></Button>
                <div className='sign-up'>
                    <span>Já possui uma conta?</span> <a>Entre</a>
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
        </main>
    )
}

export default Register
