import React from 'react';
import { styles } from './style';

const Input = ({setValue, value}: any) => {
  return (
    <input
    value={value}
    className={styles.input}
    id="exampleFormControlInput1"
    placeholder="surname"
    onChange={(e) => setValue(e.target.value)}
  />

  );
};

export default Input;