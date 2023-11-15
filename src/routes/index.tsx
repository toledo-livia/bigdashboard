import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';

import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

import * as S from './styles';

export function Router() {
  return (
    <S.Container>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Sidebar />
    </S.Container>
  );
}
