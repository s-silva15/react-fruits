import React, { useState, useRef } from 'react';
import frutas from '../data/mock.js';
import { IoCashOutline, IoCogOutline, IoCloseOutline, IoPencil } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';
import { BsTrash3 } from 'react-icons/bs';
import { Link } from 'react-router-dom';


const FruitList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOverlayClick = (event) => {
    if (event.target === modalRef.current) {
      setIsModalOpen(false);
    }
  };

  const filteredFrutas = frutas.filter((fruta) =>
    fruta.nome_fruta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={style.listContainerStyle}>
      <div style={{ display: "grid", gridGap: "15px", padding: '5%' }}>

        <div style={style.cardStyleSearch}>
          <CiSearch style={style.iconStyle} />
          <input
            type="text"
            placeholder="Pesquisar Frutas"
            value={searchTerm}
            onChange={handleSearch}
            style={style.inputStyle}
          />
        </div>

        {filteredFrutas.map((fruta, index) => (
          <div key={index} style={style.cardStyle}>
            <div style={{ width: '-webkit-fill-available', display: 'flex', alignItems: 'center' }}>
              <span style={{ fontWeight: 'bold', flex: 1 }}>{fruta.nome_fruta}</span>
              <IoCogOutline
                style={{ color: 'red', fontSize: 40, cursor: 'pointer' }}
                onClick={handleOpenModal}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <p style={style.pCash}>
                <IoCashOutline style={{ marginRight: '5px' }} />
                {'R$ ' + fruta.valor.toFixed(2)}
              </p>
              <p style={style.pFruit}>
                {fruta.qtd_estoque} em estoque
              </p>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <>
          <div
            style={style.modalOverlayStyle}
            ref={modalRef}
            onClick={handleOverlayClick}
          />
          <div style={style.modalContainerStyle}>
            <div style={style.modalStyle}>
              <IoCloseOutline
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  cursor: 'pointer',
                }}
                onClick={handleCloseModal}
              />
              <div>
                <Link to="/form/editar" style={style.linkStyle}>
                  <IoPencil style={{ marginRight: '5%' }} /> Editar Fruta
                </Link>
              </div>
              <div>
                <a href="#" style={style.linkStyle}>
                  <BsTrash3 style={{ marginRight: '5%' }} /> Excluir Fruta
                </a>
              </div>
            </div>
          </div>
        </>
      )}




    </div>
  );
};


export default FruitList;

const style = {
  pFruit: {
    fontSize: '12px',
    color: 'gray',
    marginLeft: 'auto',
  },

  pCash: {
    color: 'green',
    fontSize: '12px',
    width: '100px'
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
    width: '328px',
    height: '60px',
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

  inputStyle: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    padding: '4px',
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



};
