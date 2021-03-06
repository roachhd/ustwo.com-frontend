'use strict';

import React from 'react';
import find from 'lodash/collection/find';
import get from 'lodash/object/get';

import getScrollTrackerMixin from 'app/lib/get-scroll-tracker-mixin';

import Rimage from 'app/components/rimage';

const PageLegal = React.createClass({
  mixins: [getScrollTrackerMixin('legal')],
  render() {
    const pageData = this.props.page;
    const sizes = { hardcoded: { url: '/images/photo.jpg' }};

    return <article className="page-legal">
      <Rimage className='hero-image' sizes={sizes} wrap='div' />
      <div className="content-container">
        <h2>Legal</h2>
        <p>ustwo studio ltd. Registered No. 05286528. Registered in England & Wales.</p>
        <p>Registered office:</p>
        <p>2 AC Court, High Street, Thames Ditton, Surrey, KT7 0SR</p>
        <p>VAT number: 853 3847 04</p>
      </div>
    </article>;
  }
});

export default PageLegal;
