import React from 'react';
import HeaderBlock from '../header/headerBlock';
import FooterBlock from '../footer/footer';
import Setings from './Setings';

const SettingsPage = () => {
  return (
    <>
      <HeaderBlock />
      <main style={{ padding: '2rem' }}>
        <Setings />
      </main>
      <FooterBlock />
    </>
  );
};

export default SettingsPage;