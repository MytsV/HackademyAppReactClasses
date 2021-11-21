import decorationImage from './../images/decoration_1.png';
import { tempStringShort, tempStringLong } from '../tools/TempStrings';
import React from 'react';

export default class PageAbout extends React.Component {
  render() {
    return <div className="md:inline-flex block">
      <div id="page-2" className="md:flex block md:w-1/2 w-full bg-gray-100 md:justify-end justify-center">
        <div id="page-2-content">

          <div className="flex justify-between">
            <div className="vertical-line-top-dark float-left w-1"></div>
            <img id="decoration-1" src={decorationImage} className="float-right" alt="" />
          </div>

          <h2 className="py-7">CryptoTrade - експерт на фінансовому ринку</h2>
          <p>{tempStringLong}</p>
          <br />
          <p>{tempStringShort}</p>

        </div>
      </div>

      <div id="page-3" className="md:flex block md:w-1/2 w-full bg-white md:justify-start justify-center">
        <div id="page-3-content">
          <div className="icon-and-text">
            <i className="fas fa-globe"></i>
            <p>{tempStringShort}</p>
          </div>

          <div className="icon-and-text">
            <i className="fas fa-mobile-alt"></i>
            <p>{tempStringShort}</p>
          </div>

          <div className="icon-and-text">
            <i className="fab fa-bitcoin"></i>
            <p>{tempStringShort}</p>
          </div>

          <div className="icon-and-text">
            <i className="fas fa-cogs"></i>
            <p>{tempStringShort}</p>
          </div>
        </div>
      </div>
    </div>;
  }
}