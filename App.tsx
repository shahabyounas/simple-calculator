import * as React from 'react';
import Screen from './components/Screen';
import KeyPaid from './components/keypaid';
import './style.css';

export const MATH_OPERATORS: string[] = ['+', '-', '*', '/'];

export default function App() {
  const [expression, setExpression] = React.useState('');
  const [result, setResult] = React.useState('');

  function expressionHander(exp) {
    if (MATH_OPERATORS.includes(exp.value)) {
      // Add calculator conditions
    }
    setExpression((pre) => pre + exp.value);
  }

  function resultHandler(val) {
    console.log(val);

    try {
      const evaluatedExpression = eval(val);
      setResult(evaluatedExpression);
    } catch (err) {
      console.error('Infinity');
    }
    return val;
  }

  return (
    <div>
      <h1> Basic Calculator - CBF </h1>

      <div className="calc-wraper">
        <div className="screen">
          <Screen mathStr={expression} result={result} />
        </div>
        <div className="mt-auto keypaid-wrapper">
          <KeyPaid onClickButton={expressionHander} />
        </div>
      </div>
    </div>
  );
}
