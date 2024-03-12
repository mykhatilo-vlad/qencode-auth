import styles from './Heading.module.css';

type HeadingProps = {
    title: string,
}

const Heading = ( {title}: HeadingProps ) => {

    return ( <h1 className={styles.Heading}>{ title }</h1> );
}

export default Heading;