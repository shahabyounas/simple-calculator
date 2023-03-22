import React from 'react';

function KeyPaid(props) {
  const { onClickButton } = props;
  const buttons = [
    {
      label: '7',
      value: 7,
    },
    {
      label: '8',
      value: 8,
    },
    {
      label: '9',
      value: 9,
    },
    {
      label: '÷',
      value: '/',
    },
    {
      label: '4',
      value: 4,
    },
    {
      label: '5',
      value: 5,
    },
    {
      label: '6',
      value: 6,
    },
    {
      label: 'x',
      value: '*',
    },
    {
      label: '1',
      value: 1,
    },
    {
      label: '2',
      value: 2,
    },
    {
      label: '3',
      value: 3,
    },
    {
      label: '+',
      value: '+',
    },
    {
      label: 'C',
      value: null,
    },
    {
      label: '0',
      value: 0,
    },
    {
      label: '.',
      value: '.',
    },
    {
      label: '=',
      value: '=',
    },
  ];

  return (
    <div className="keypaid">
      {buttons.map((button) => {
        return (
          <button
            className="keypaid-button"
            onClick={() => onClickButton(button)}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
}

export default KeyPaid;
