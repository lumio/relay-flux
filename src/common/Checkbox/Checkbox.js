import React from 'react';
import PropTypes from 'prop-types';
import CheckboxStyles from './styles';

const Checkbox = ( props ) => (
  <CheckboxStyles
    type='checkbox'
    name={ props.name }
    checked={ props.checked }
    onClick={ props.onClick }
    onChange={ props.onChange }
  />
);

Checkbox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}

export { Checkbox };