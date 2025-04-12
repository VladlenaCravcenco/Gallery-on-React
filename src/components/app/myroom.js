import React, { Component } from 'react';

import HeaderBlock from '../header/headerBlock';
import Myroomheader from '../Myroomheader/Myroomheader.js';
import MenuAdd from '../Myroomheader/menu-add.js';
import UserArtworks from '../UserArtworks.jsx'; // вместо UploadArtwork

import FooterBlock from '../footer/footer.js';

export default class MyRoom extends Component {
  render() {
    return (
      <>
        <HeaderBlock />
        <Myroomheader />
        <MenuAdd />

        <div style={{ padding: '2rem 0' }}>
        <UserArtworks /> {/* 👈 форма загрузки */}
        </div>

        <FooterBlock />
      </>
    );
  }
}