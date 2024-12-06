import styles from "../styles/Empty.module.css";

export default function Empty() {
    return(
        <div className={styles.empty}>
            <img src="src/assets/empty.svg" alt="" />
            <p>Empty...</p>
        </div>
    )
}