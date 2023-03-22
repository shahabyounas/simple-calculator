import * as React from 'react';
import Screen from './components/Screen';
import KeyPaid from './components/keypaid';
import './style.css';

export const MATH_OPERATORS: string[] = ['+', '-', '*', '/', '=', '.'];

export default function App() {
  const [expression, setExpression] = React.useState('');
  const [result, setResult] = React.useState('');

  function resetExpression() {
    setExpression('');
    setResult('');
  }

  function expressionHander(exp) {
    // Reset when clear button is clicked
    if (exp.label === 'c') {
      resetExpression();
    }

    // Prevent adding 0, when expression has no length
    if (!expression.length && exp.value == 0) {
      return;
    }

    // Operators conditions
    if (MATH_OPERATORS.includes(exp.value)) {
      if (
        exp.value == '=' &&
        !MATH_OPERATORS.includes(expression.charAt(expression.length - 1))
      ) {
        resultHandler(expression);
        return;
      }

      if (
        !expression.length ||
        MATH_OPERATORS.includes(expression.charAt(expression.length - 1))
      ) {
        return;
      }
    }
    setExpression((pre) => pre + exp.value);
  }

  // Calculate  Result
  function resultHandler(val) {
    try {
      const evaluatedExpression = eval(val);
      let roundResult = evaluatedExpression;
      if (!Number.isInteger(evaluatedExpression)) {
        roundResult = Number(roundResult).toFixed(5);
      }

      setResult(roundResult);
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
