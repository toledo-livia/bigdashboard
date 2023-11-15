import { projects } from '../../mocks/projects';
import { tasks } from '../../mocks/tasks';
import Card from '../Card';

import * as S from './styles';

export default function Sidebar() {
  return (
    <S.Sidebar>
      <S.Tasks>
        <h4>Tarefas de Hoje</h4>
        {tasks.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </S.Tasks>
      <div className="project">
        <h4>Projeto recente</h4>
        {projects.map((item, index) => (
          <Card key={index} title={item.title} description={item.description} />
        ))}
      </div>
    </S.Sidebar>
  );
}
