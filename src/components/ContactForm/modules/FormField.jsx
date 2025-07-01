import React, { useState } from 'react';
import inputStyle from './inputStyles';
import './styles.css';

const FormField = ({ field, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const isFloating = isFocused || value;

  return (
    <div className="w-full relative">
      <label
        htmlFor={field.id}
        className={`floating-label ${isFloating ? 'floating dark:bg-theme-dark bg-theme-light transition-colors' : ''}`}
      >
        {field.label}
      </label>
      { field.type === 'textarea' ? (
        <textarea
          id={field.id}
          name={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={field.rows || 5}
          cols={field.cols || 30}
          placeholder=" "
          style={{
            resize: 'none',
            overflow: 'auto',
          }}
        />
      ) : (
        <input
          type={field.type}
          id={field.id}
          name={field.id}
          className={inputStyle}
          required={field.required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder=" "
        />
      )}
    </div>
  );
};

export default FormField;