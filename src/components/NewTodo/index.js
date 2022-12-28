import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './styles.css';

const NewTodo = ({ onNewTodo }) => {
  const ESCAPE_KEY = 27; // 27 é a tecla esc
  const ENTER_KEY = 13;  // e 13 a de enter

  const [value, setValue] = useState("");

  const erase = () => {  // funcao para zerar o value do input
    setValue("");
  };

  const submit = () => {
    if (onNewTodo) {
      onNewTodo(value);
      erase();  // aqui ele esta enviando o value e ja apagando do input(visualizacao)
    }
  };

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event) => {
    if (event.which === ENTER_KEY) {
      submit();
    } else if (event.which === ESCAPE_KEY) {
      erase();
    }
  }

  return (
    <input
      className='new-todo'
      placeholder="o que precisa ser feito?"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
};

NewTodo.propTypes = {
  onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;

