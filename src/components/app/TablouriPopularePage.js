// components/app/TablouriPopularePage.js
import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';
import FooterBlock from '../footer/footer';
import SubscribeBlock from '../footer/subscribe';
import TablouriPopulare from './tablouri-populare';

export default class TablouriPopularePage extends Component {
  render() {
    return (
      <>
        <HeaderBlock />

        <main style={{ padding: '2rem' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Tablouri populare
          </h2>
          <TablouriPopulare />
        </main>

        <SubscribeBlock />
        <FooterBlock />
      </>
    );
  }
}