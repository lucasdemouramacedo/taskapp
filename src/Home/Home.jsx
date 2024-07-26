import style from './Home.module.css'
import Header from '../components/Header/Header.jsx'

function Home() {
    return (
        <div className={style.main}>
            <Header />
            <div className={style.container}>
            </div>
        </div>
    )
}

export default Home