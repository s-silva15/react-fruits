import React, { useState, useEffect } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';

function Form() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const { uuid } = useParams();

  const currentURL = window.location.href;
  const tipo = currentURL.split('/form')[1].split('/')[1];
  const isEditar = tipo === 'editar';
  const titulo = isEditar ? 'Editar' : 'Cadastrar';
  const button = isEditar ? 'Atualizar' : 'Cadastrar';

  useEffect(() => {
    if (isEditar) {
      const savedData = localStorage.getItem('myArray');
      if (savedData) {
        const obj = JSON.parse(savedData).find((obj) => obj.id === uuid);
        if (obj) {
          setName(obj.nome_fruta);
          setPrice(obj.valor);
          setQuantity(obj.qtd_estoque);
        }
      }
    }
  }, [isEditar, uuid]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !price || !quantity) {
      alert('Por favor, preencha todos os campos');
      return;
    }

    const savedData = localStorage.getItem('myArray');
    const parsedData = savedData ? JSON.parse(savedData) : [];

    const newFruit = {
      id: isEditar ? uuid : uuidv4(),
      nome_fruta: name,
      valor: parseFloat(price),
      qtd_estoque: parseInt(quantity),
    };

    if (isEditar) {
      const index = parsedData.findIndex((obj) => obj.id === uuid);
      if (index !== -1) {
        parsedData[index] = newFruit;
      }
    } else {
      parsedData.push(newFruit);
    }

    localStorage.setItem('myArray', JSON.stringify(parsedData));

    setName('');
    setPrice('');
    setQuantity('');
  }

  return (
    <div style={style.listContainerStyle}>
      <div style={{ display: 'grid', gridGap: '15px', padding: '5%' }}>
        <div style={style.titleContainer}>
          <h2 style={style.title}>{titulo} Fruta</h2>
          <IoCloseOutline style={style.closeIcon} />
        </div>
        <form onSubmit={handleSubmit}>
          <div style={style.cardStyle}>
            <input
              style={style.inputStyle}
              type="text"
              id="fruitName"
              placeholder="Nome da fruta"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div style={style.cardStyle}>
            <input
              style={style.inputStyle}
              type="number"
              id="fruitPrice"
              placeholder="Preço do kilo"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div style={style.cardStyle}>
            <input
              style={style.inputStyle}
              type="number"
              id="fruitQuantity"
              placeholder="Quantidade no estoque"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button style={style.buttonStyle}>
            <HiOutlinePlusSm style={style.iconStylePlus} />
            {button} fruta
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;



const style = {

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    color: 'red',
    textAlign: 'left',
  },
  inputStyle: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    padding: '4px',
  },
  listContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardStyleSearch: {
    width: '328px',
    height: '60px',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D',
  },
  cardStyle: {
    marginBottom: '5%',
    width: '328px',
    height: '50px',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D',
  },
  containerStyle: {
    backgroundColor: 'white',
    padding: '16px',
    marginBottom: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  iconStyle: {
    fontSize: '25px',
    color: 'gray',
  },
  iconStylePlus: {
    fontSize: '25px',
    color: 'white'
  },
  modalOverlayStyle: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
  modalStyle: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-40%, -200%)',
    backgroundColor: 'white',
    color: 'black',
    padding: '16px',
    borderRadius: '8px',
    boxShadow: '0px 2px 6px 2px #00000026, 0px 1px 2px 0px #0000004D',
    display: 'grid',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80px',
    width: '120px',
    zIndex: 1000, // Ajuste o valor do zIndex conforme necessário
  },
  linkStyle: {
    color: 'black',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: '4px 0',
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
};
