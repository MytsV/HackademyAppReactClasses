import React from "react";

export default class Footer extends React.Component {
  render() {
    return <div id="footer">
      <div id="footer-contacts" className="my-4">
        <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
        <a href="https://google.com"><i className="fas fa-globe-europe"></i></a>
      </div>
      <a href="https://google.com">Privacy Policy</a>
      <p className="my-3">© CryptoTrade 2021</p>
    </div>;
  }
}