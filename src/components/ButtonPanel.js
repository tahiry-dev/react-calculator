import React from 'react';
import Button from './Button';

/* eslint-disable react/prop-types */
const ButtonPanel = ({ clickHandler }) => {
  const group1 = ['AC', '+/-', '%'];
  const group2 = ['7', '8', '9'];
  const group3 = ['4', '5', '6'];
  const group4 = ['1', '2', '3'];
  const group5 = ['.'];
  const gray = { backgroundColor: '#e0e0e0' };

  return (
    <div>
      <div className="group1">
        {group1.map((el, i) => (
          <Button
            key={group1[i]}
            name={el}
            color={gray}
            clickHandler={clickHandler}
          />
        ))}
        <Button
          name="÷"
          clickHandler={clickHandler}
        />
      </div>
      <div className="group2">
        {group2.map((el, i) => (
          <Button
            key={group2[i]}
            name={el}
            color={gray}
            clickHandler={clickHandler}
          />
        ))}
        <Button
          name="x"
          clickHandler={clickHandler}
        />
      </div>
      <div className="group3">
        {group3.map((el, i) => (
          <Button
            key={group3[i]}
            color={gray}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
        <Button
          name="-"
          clickHandler={clickHandler}
        />
      </div>
      <div className="group4">
        {group4.map((el, i) => (
          <Button
            key={group4[i]}
            color={gray}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
        <Button
          name="+"
          clickHandler={clickHandler}
        />
      </div>
      <div className="group5">
        <Button
          name="0"
          color={gray}
          clickHandler={clickHandler}
          wide="zero"
        />
        {group5.map((el, i) => (
          <Button
            key={group5[i]}
            color={gray}
            name={el}
            clickHandler={clickHandler}
          />
        ))}
        <Button
          name="="
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};
/* eslint-enable react/prop-types */
export default ButtonPanel;
