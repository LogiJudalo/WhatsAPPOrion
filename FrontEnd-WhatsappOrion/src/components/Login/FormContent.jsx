import React from 'react';


const FormContent = ({ handleSubmit }) => {
  return (
    <form className="form-content" onSubmit={handleSubmit}>     
    <div className='login-form'>
        <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input 
            type="text" 
            className="form-control" 
            id="username" 
            placeholder="Escriba su usuario" 
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input 
            type="password" 
            className="form-control" 
            id="password" 
            placeholder="Escriba su contraseña" 
            />
        </div>
        <button type="submit" className="btn-submit">
            Ingresar
        </button>
      </div>
    </form>
  );
};

export default FormContent;
