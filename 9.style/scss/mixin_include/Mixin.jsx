import React from 'react';
import './demo.scss';

export default function Mixin() {
  return (
    <div className="demoContainer">
      <div className="my-font-block" />
      <div className="block">
        <div className="my-font-block" />
      </div>
      <div className="arguments-img" />
      <div className="avatar" />
      <p className="styleOne">A</p>
      <p className="styleTwo">B</p>
      <p className="styleThree">C</p>
      <p className="icon-40 icon-type01">40</p>
      <p className="icon-50 icon-type02">50</p>
      <p className="icon-80 icon-type03">80</p>
      <button type="button" className="button">a</button>
    </div>
  );
}