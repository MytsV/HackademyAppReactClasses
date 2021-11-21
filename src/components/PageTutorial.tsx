import decorationImageSecond from './../images/decoration_2.png';
import { tempStringShort, tempStringLong } from '../tools/TempStrings';
import React from 'react';

export default class PageTutorial extends React.Component {
    render() {
        return <div id="page-4" className="md:inline-flex block">

            <div id="big-image" className="w-3/4 hidden md:list-item">
                <img src={decorationImageSecond} className="float-right" id="decoration-2" alt="" />
            </div>

            <div id="course-desc" className="bg-gray-100 flex flex-wrap pb-6">
                <h2 className="px-8 pt-8 pb-5">Навчальний курс "Основи криптоторгівлі"</h2>

                <div id="course-types" className="pt-6 bg-white w-full">
                    <span className="menu-item menu-item-highlighted">Для новачків</span>
                    <span className="menu-item">Для професіоналів</span>
                    <span className="menu-item">Для інвесторів</span>
                </div>

                <p className="px-8 pt-8 pb-3 w-2/3">{tempStringLong}</p>

                <div className="desc-item">
                    <i className="far fa-dot-circle"></i>
                    <p>{tempStringShort}</p>
                </div>

                <div className="desc-item">
                    <i className="far fa-dot-circle"></i>
                    <p>{tempStringShort}</p>
                </div>

                <div className="desc-item">
                    <i className="far fa-dot-circle"></i>
                    <p>{tempStringShort}</p>
                </div>

            </div>
        </div>;
    }
}