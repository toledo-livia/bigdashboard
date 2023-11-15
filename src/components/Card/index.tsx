import * as S from './styles';

interface ICard {
  title: string;
  description: string;
}

export default function Card({ title, description }: ICard) {
  return (
    <S.Article>
      <h5>{title}</h5>
      <p>{description}</p>
    </S.Article>
  );
}
