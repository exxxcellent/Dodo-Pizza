import { Link } from "react-router-dom"
import styles from "./styles.module.scss"
import routes from "../../contants/routes"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <ul className={styles.links}>
                    <li className={styles.link}>
                        <button>Прямой эфир</button>
                    </li>
                    <li className={styles.link}>
                        <a href="https://rabotavdodo.ru/?utm_source=web" target="_blank">Работа в Додо</a>
                    </li>
                    {routes.map(route => {
                        return <Link to={route.route} key={route.title} className={styles.link}>{route.title}</Link>
                    })}
                </ul>
            </div>
        </header>
    )
}

export default Header
