import style from './Home.module.css'
import Header from '../components/Header/Header.jsx'
import DaySelector from '../components/DaySelector/DaySelector.jsx'
function Home() {
    return (
        <div className={style.main}>
            <Header />
            <div className={style.container}>
                <DaySelector />
            </div>
        </div>
    )
}

export default Home