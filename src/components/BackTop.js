import React, { Component } from "react";
import BackToTop from "react-back-to-top-button";

export default class BackTop extends Component {
  render() {
    return (
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={1500}
        easing="easeInOutQuint"
      >

        <p className='scroll'>
          <button><i className='fa fa-chevron-circle-up'></i> Top</button>
        </p>

      </BackToTop>
    );
  }
}