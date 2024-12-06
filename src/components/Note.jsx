import styles from '../styles/Note.module.css';

export default function Note(props) {
  const { details } = props;

  if (!details) {
    return null;
  }

  return (
      <div className={styles.note}>
        <input type="checkbox" className={styles.checkbox}/>
        <p>{details.name}</p>
      </div>
  );
}
