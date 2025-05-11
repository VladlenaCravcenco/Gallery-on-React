import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import MainPage from './mainpage';
import MyRoom from './myroom';
import RandomProf from './randomprofile';
import SettingsPage from './SettingsPage';
import TablouriPopulare from './TablouriPopularePage';
import Desprenoi from './desprenoi';
import Evenimente from './evenimente';
import Licitatie from './licitatie';
import Artistii from './artistii';
import Contacte from './contacte';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/myroom" element={<MyRoom />} />
        <Route path="/random" element={<RandomProf />} />
        <Route path="/setings" element={<SettingsPage />} />
        <Route path="/tablouripopulare" element={<TablouriPopulare />} />
        <Route path="/desprenoi" element={<Desprenoi />} />
        <Route path="/evenimente" element={<Evenimente />} />
        <Route path="/licitatie" element={<Licitatie />} />
        <Route path="/artistii" element={<Artistii />} />
        <Route path="/contacte" element={<Contacte />} />
      </Routes>
    </HashRouter>
  );
};

export default App;