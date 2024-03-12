import styles from './InfoBox.module.css';

type InfoBoxProps = {
    text: string,
    type?: 'success' | 'warning' | 'error',
}

const InfoBox = ({text, type}: InfoBoxProps) => {
    const classes = [
        styles.InfoBox,
        type ? styles[type] : 'success'
    ]

    return (
        <p className={ classes.join(' ') }>{text}</p>
    );
}

export default InfoBox;