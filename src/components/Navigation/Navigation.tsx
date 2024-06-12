// router
import { Link } from "react-router-dom"
// styles
import styles from "./styles.module.scss"
// icons
import logo from "../../assets/icons/logo.svg"
import dodocoin from "../../assets/icons/dodocoin.svg"
import promotion from "../../assets/icons/promotion.svg"
import profile from "../../assets/icons/profile.svg"

function Navigation() {

    return (
        <nav className={styles.wrapper}>
            <div>
                <Link className={styles.logo} to="/">
                    <img src={logo} alt="Додо Пицца" className={styles.logo} />
                    <a href="https://docs.google.com/document/d/1OqaMef63wANPbsGCE8RD5QW9ve8Z7QBE" target="_blank" className={styles.link}>Сеть №1 в России по количеству пиццерий</a>
                </Link>
            </div>
            <ul className={styles.nav}>
                <li>
                    <img src={dodocoin} alt="dodocoin" />
                    <Link to="/loyaltyprogram">Додокоины</Link>
                </li>
                <li>
                    <img src={promotion} alt="dodocoin" />
                    <Link to="/profile#promotions">Мои акции</Link>
                </li>
                <li>
                    <img src={profile} alt="dodocoin" />
                    <Link to="/profile">Кабинет</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
