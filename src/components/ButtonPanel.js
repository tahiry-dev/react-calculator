import React from 'react';
import Button from './Button';

const ButtonPanel = () => {

    const group1 = ['AC', '+/-', '%', '÷'];
    const group2 = ['7', '8', '9', 'X'];
    const group3 = ['4', '5', '6', '-'];
    const group4 = ['1', '2', '3', '+'];
    const group5 = ['0', '.', '='];

    return (
        <div>
            <div className="group1">
                {group1.forEach(touch => {
                    <Button name={touch} />
                })}
            </div>
            <div className="group2">
                {group2.forEach(touch => {
                    <Button name={touch} />
                })}
            </div>
            <div className="group3">
                {group3.forEach(touch => {
                    <Button name={touch} />
                })}
            </div>
            <div className="group4">
                {group4.forEach(touch => {
                    <Button name={touch} />
                })}
            </div>
            <div className="group5">
                {group5.forEach(touch => {
                    <Button name={touch} />
                })}
            </div>
        </div>
    );
}
export default ButtonPanel;