import React from 'react';
import styles from './Input.module.scss';

const Input = ({ type, placeHolder, state, setState }) => {
    return (
        <input className={styles.input} type={type} placeholder={placeHolder} value={state} onChange={(e) => setState(e.target.value)} />
    )
}

export default Input;
