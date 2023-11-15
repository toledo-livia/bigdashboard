import * as S from './styles';

export default function Home() {
  return (
    <S.Container>
      <h1>Welcome to my React Architecture</h1>
      <p>
        This project was created to be used as the basis for React applications.
        The architecture was designed aiming at the organization and scalability
        of the application, counting on the main libraries in the market.
      </p>

      <S.CreatedBy>
        <span role="img" aria-label="heart">
          Created with ❤️ by Lívia Toledo
        </span>
      </S.CreatedBy>
    </S.Container>
  );
}
