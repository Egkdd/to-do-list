import styles from "../styles/AddNote.module.css";

export default function AddNote(props) {
    return(
        <>
            <form className={styles.form} onSubmit={props.onFormSubmit}>
                <input className={styles.text} type="text" value={props.name} 
                onChange={props.onNameChange} placeholder="Input your note..."/>
                <input className={styles.button} type="submit" value="+"/>
            </form>
        </>
    )
}