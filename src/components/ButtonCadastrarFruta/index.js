import React, { useState, useEffect } from 'react';
import { HiOutlinePlus } from 'react-icons/hi';
import { Link } from 'react-router-dom';

function Button() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const offset = window.scrollY;
      if (offset > 0 && !isFixed) {
        setIsFixed(true);
      } else if (offset === 0 && isFixed) {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  return (
    <div
      style={{
        textAlign: '-webkit-right',
      }}
    >
      <Link to="/form/cadastrar" style={style.buttonStyle}>
        <HiOutlinePlus style={style.iconStyle} />
      </Link>
    </div>
  );
}

export default Button;

const style = {
  buttonStyle: {
    fontSize: "40px",
    display: 'flex',
    width: '20px',
    height: '35px',
    padding: '5px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
    borderRadius: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none'
  }
}