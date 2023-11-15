import avatar from '../../assets/images/avatar.png';
import { user } from '../../mocks/user';
import * as S from './styles';

export default function Profile() {
  return (
    <S.ContentProfile>
      <S.Figure>
        <img src={user.img ? user.img : avatar} alt="avatar perfil" />
      </S.Figure>
      <S.Name>{user.name}</S.Name>
      <S.Email className="email">{user.email}</S.Email>
    </S.ContentProfile>
  );
}
