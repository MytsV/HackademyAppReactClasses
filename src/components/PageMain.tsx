import { tempStringLong } from '../tools/TempStrings';
import React from 'react';

export default class PageMain extends React.Component {
    render() {
        return <div id="page-1" className="bg-indigo-900 items-center">
            <div id="page-1-content">
                <div className="vertical-line-top float-right mb-20"></div>
                <h1 className="pt-20">Як вкласти гроші в криптовалюту і отримати прибуток?</h1>
                <p className="py-12">{tempStringLong}</p>
                <input type="button" className="button mt-18 block mx-auto" value="Пройти навчання" />
                <div className="vertical-line-bottom"></div>
            </div>
        </div>;
    }
}
