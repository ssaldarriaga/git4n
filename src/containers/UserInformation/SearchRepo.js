import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Components
import { Input } from '../../components/Input/Input.styles';

let controller;
let signal;

export function SearchRepo({ onSearch }) {
  const [value, setValue] = useState('');

  const handleChange = (ev) => {
    setValue(ev.target.value);
    if (ev.target.value.length >= 3 || ev.target.value.length === 0) {
      // Cancel old pending requests
      if (signal) {
        controller.abort();
      }
      // Create a new controller to cancel future extra requests
      controller = new AbortController();
      signal = controller.signal;

      onSearch(ev.target.value, signal);
    }
  }

  return <Input className="mb-3" placeholder="Search repository" value={value} onChange={handleChange}/>;
}

SearchRepo.propTypes = {
  onSearch: PropTypes.func.isRequired,
};