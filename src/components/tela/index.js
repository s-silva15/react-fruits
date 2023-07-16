import React, { useState } from 'react';
import frutas from '../data/mock.js';
import { IoCashOutline, IoCogOutline } from 'react-icons/io5';
import { CiSearch } from 'react-icons/ci';

const FruitList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
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
              <IoCogOutline style={{ color: 'red', fontSize: 40 }} />
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
    </div>
  );
};

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
  }
};

export default FruitList;
