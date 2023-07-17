import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import TelaVazia from '../src/components/telaVazia';
import Tela from '../src/components/tela';
import Form from '../src/components/form';
import Sucesso from '../src/components/form/telaSucesso';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaVazia />} />;
        <Route path="/inicio" element={<Tela />} />;
        <Route path="/form/cadastrar" element={<Form />} />;
        <Route path="/form/editar/:uuid" element={<Form />} />;
        <Route path="/form/telaSucesso" element={<Sucesso />} />;
      </Routes>
    </Router>
  );
}