import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate, Link } from 'react-router-dom';

import cadastroImage from '../assets/cadastroSucesso.png';

const Sucesso = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/form/telaSucesso');
  };

  return (
    <div style={styles.container}>
      <div style={styles.gridContainer}>
        <IoCloseOutline style={styles.closeIcon} />
        <div style={styles.imageContainer}>
          <img src={cadastroImage} alt="Cadastro" style={styles.image} />
        </div>
        <h3 style={styles.subtitle}>Fruta cadastrada</h3>
        <p style={styles.paragraph}>
          Você cadastrou a fruta Lorem com sucesso!
        </p>
        <Link to={'/inicio'} style={styles.button} onClick={handleClick}>
          Voltar ao início
        </Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  gridContainer: {
    display: 'grid',
    gridGap: '15px',
    padding: '5%',
    alignItems: 'center',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '200px',
    height: '179px',
  },
  subtitle: {
    fontWeight: 'bold',
  },
  paragraph: {
    textAlign: 'center',
    fontSize: '16px',
    margin: '10px 0',
    color: 'darkslategray',
  },
  button: {
    fontSize: '20px',
    display: 'flex',
    width: '328px',
    height: '30px',
    padding: '8px 24px 8px 16px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
    borderRadius: '100px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
  },
  closeIcon: {
    fontSize: '20px',
    color: 'gray',
    justifySelf: 'end',
  },
};

export default Sucesso;
