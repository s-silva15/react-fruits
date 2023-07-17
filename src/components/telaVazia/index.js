import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Tela() {
  return (
    <div style={style.containerStyle}>
      <span style={style.spanStyle}>Cadastre sua primeira fruta.</span>
      <Link to="/form/novo" style={style.buttonStyle}>
        <FontAwesomeIcon icon={faPlus} style={style.iconStyle} />
        Cadastrar fruta
      </Link>
    </div>
  );
  
}

export default Tela;

const style = {
  spanStyle: {
    color: "black",
    fontSize: "20px",
    marginBottom: '10px'
  },
  buttonStyle: {
    fontSize: "16px",
    display: 'flex',
    width: '320px',
    height: '30px',
    padding: '8px 24px 8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
    borderRadius: '100px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none'
  },
  iconStyle: {
    marginRight: '5px',
  },
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'white',
  }
};
