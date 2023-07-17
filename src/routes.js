import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import TelaVazia from '../src/components/telaVazia';
import Tela from '../src/components/tela';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<TelaVazia/>}/>;
                <Route path="/inicio" element={<Tela/>}/>;
            </Routes>
        </Router>
    );
}