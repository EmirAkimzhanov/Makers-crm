import React from 'react';
import Select from 'react-select';

const Test = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate', dank: '2323' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const def = [
    { value: 'chocolate', label: 'Chocolate', id: 1}
  ]
  
  
  return (
    <div>
      <Select isMulti options={options} defaultValue={def} />
    </div>
  );
};

export default Test;