import style from './Register.module.css'
import Logo from '.././assets/taskapp.svg';
import Input from '../components/Input/Input.jsx';
import Button from '../components/Button/Button.jsx';
import { Link } from 'react-router-dom';

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
        <div className={style.main}>
            <div className={style.logoContainer}>
                <img className={style.logo} src={Logo} />
            </div>
            <div className={style.container}>
                <h2 className={style.title}>Crie sua conta</h2>
                <Input type="text" label="Email"></Input>
                <Input type="password" label="Senha"></Input>
                <Input type="password" label="Comfirme sua senha"></Input>
                <Button label="Criar conta"></Button>
                <div className={style.signIn}>
                    <span>Já possui uma conta?</span>
                    <Link className={style.link} to="/login"> Entre</Link>
                </div>
            </div>
            {circles.map((circle, index) => (
                <div
                    className={style.circle}
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

export default Register
