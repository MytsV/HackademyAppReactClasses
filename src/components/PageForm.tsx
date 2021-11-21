import React from 'react';

export default class PageForm extends React.Component {
  render() {
    return <div id="page-5" className="bg-indigo-900">
      <div id="form-div">
        <h2 className="my-8">Записатися на навчання</h2>

        <form id="apply-form" method="post">
          <div id="right-form">
            <input id="name" placeholder="Ім'я" />
            <input id="email" placeholder="Email" />

            <select id="experience">
              <option value="beginner">Новачок</option>
              <option value="professional">Професіонал</option>
              <option value="investor">Інвестор</option>
            </select>

            <div>
              <input type="checkbox" id="consent" />
              <label htmlFor="consent" className="ml-3">Даю згоду на обробку персональних даних</label>
            </div>

          </div>
          <input id="submit-button" type="submit" className="button mt-10" value="Відправити" />
        </form>
      </div>
    </div>;
  }
}