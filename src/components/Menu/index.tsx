import logo from '../../assets/images/logo.png';
import { menuTitle } from '../../mocks/menu';
import Profile from '../Profile';
import * as S from './styles';

export default function Menu() {
  return (
    <S.Nav>
      <S.Logo>
        <figure>
          <img src={logo} alt="logo" />
        </figure>
        <span>BigDashboard</span>
      </S.Logo>

      <ul>
        {menuTitle.map((item) => (
          <S.Content key={item.id}>
            <S.Icon>{item.icon}</S.Icon>
            <li>{item.name}</li>
          </S.Content>
        ))}
      </ul>

      <Profile />
    </S.Nav>
  );
}
