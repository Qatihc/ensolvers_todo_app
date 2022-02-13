import React, { useState, useEffect } from 'react';

const Input = ({ 
  name,
  type,
  label,
  onChange,
  value,
  error,
  forceDisplayError,
  displayErrorOnBlur,
  className
}) => {
  const [displayError, setDisplayError] = useState(false);
  useEffect(() => {
    if (!forceDisplayError) return;
    setDisplayError(error);
  }, [forceDisplayError])

  useEffect(() => {
    if (error) return;
    setDisplayError(false);
  }, [error])

  const handleBlur = () => {
    if (error && displayErrorOnBlur) setDisplayError(true);
  }
  
  return (
    <div className='inputContainer'>
      <input
        className={`${className} ${(displayError) ? 'error' : ''}`}
        name={name}
        type={type}
        aria-label={label}
        placeholder={label}
        onChange={onChange}
        value={value}
        onBlur={handleBlur}
      />
      <p className='errorMsg'>{(displayError) ? error : ''}</p>
    </div>
  )
}
  
export default Input;