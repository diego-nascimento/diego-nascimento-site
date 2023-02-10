import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Introducao from './Pages/Introducao/Introducao';
import Contato from './Pages/Contato/Contato';
import Sobre from './Pages/QuemSou/QuemSou';
import Portifolio from './Pages/Portifolio/Portifolio';
import Experiencia from './Pages/Experiencia/Experiencia';

export default function Switch() {
  return (
    <Routes>
      <Route path="/" element={<Introducao />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/portifolio" element={<Portifolio />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/experiencias" element={<Experiencia />} />
    </Routes>
  );
}
