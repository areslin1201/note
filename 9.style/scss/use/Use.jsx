import React from 'react';
import './demo.scss';

export default function Use() {
  return (
    <div className="demoContainer">
      <p>demo</p>
      <p className="my-font-style">demo2</p>
      <p className="private-use-1">private 01</p>
      <p className="private-use-2">private 01</p>
      <p className="change-dark-p">dark</p>
      <div className="newDivBox" />
      <div className="newDivBox2" />
    </div>
  );
}