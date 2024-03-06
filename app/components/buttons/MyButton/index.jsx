import React from 'react';
import styles from './MyButton.module.scss'

const Index = ({children}) => {
    return (
        <button className={styles.root}>
            {children}
        </button>
    );
};

export default Index;