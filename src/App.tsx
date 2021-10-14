import { ReactElement, useState } from 'react';
import { Item } from './types/Item';

import { ListItem } from './components/ListItem';

import * as C from './App.styles';

function App(): ReactElement {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Panda',
      done: false,
    },

    {
      id: 2,
      name: 'Gato',
      done: true,
    }
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        {/* Nova tarefa */}

        { list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
