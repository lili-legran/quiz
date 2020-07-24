import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

const Select = (props) => {
  const {
    label,
    options,
    value,
    onChange
  } = props;
  const htmlFor = `${label}${Math.floor(Math.random() * 1000)}`;
  return (
    <div className='select'>
      <label htmlFor={htmlFor}>{label}</label>
      <select id={htmlFor} value={value} onChange={onChange}>
        {
          options.map((option, index) => (
            <option key={index}>
              {option.text}
            </option>
          ))
        }
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Select;
