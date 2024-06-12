import tags from "../../contants/tags"
// styles
import styles from "./styles.module.scss"

function Tags() {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.tags}>
                {tags?.map(tag => {
                    return <li key={tag.id} className={styles.tag}><a href={tag.refId}>{tag.title}</a></li>
                })}
            </ul>
            <button className={styles.btn}>Корзина</button>
        </div>
    )
}

export default Tags
