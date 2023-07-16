import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Tela() {
  return (
    <div style={style.containerStyle}>
      <span style={style.spanStyle}>Cadastre sua primeira fruta.</span>
      <button style={style.buttonStyle}>
        <FontAwesomeIcon icon={faPlus} style={style.iconStyle} />
        Cadastrar fruta
      </button>
    </div>
  );
}

export default Tela;

const style = {
  spanStyle: {
    color: "black",
    fontSize: "16px",
    marginBottom: '10px',
  },
  buttonStyle: {
    fontSize: "16px",
    display: 'flex',
    width: '328px',
    height: '40px',
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

