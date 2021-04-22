import React from 'react';
import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const group1 = ['AC', '+/-', '%', '÷'];
  const group2 = ['7', '8', '9', 'x'];
  const group3 = ['4', '5', '6', '-'];
  const group4 = ['1', '2', '3', '+'];
  const group5 = ['0', '.', '='];

  return (
    <div>
      <div className="group1">
        {group1.map((el, i) => (
          <Button
            key={group1[i]}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="group2">
        {group2.map((el, i) => (
          <Button
            key={group2[i]}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="group3">
        {group3.map((el, i) => (
          <Button
            key={group3[i]}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="group4">
        {group4.map((el, i) => (
          <Button
            key={group4[i]}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="group5">
        {group5.map((el, i) => (
          <Button
            key={group5[i]}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};
export default ButtonPanel;
