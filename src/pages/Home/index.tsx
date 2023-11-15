import Card from '../../components/Card';
import { updates } from '../../mocks/updates';
import * as S from './styles';

export default function Home() {
  return (
    <S.Main>
      <section>
        <S.Top>
          <div>
            <h2>Painel</h2>
            <p>As últimas atualizações de hoje</p>
          </div>
          <div>
            <S.SearchIcon />
            <S.SaveIcon />
          </div>
        </S.Top>
        <S.Section>
          {updates.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </S.Section>
      </section>
    </S.Main>
  );
}
