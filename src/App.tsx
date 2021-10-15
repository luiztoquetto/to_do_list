import { ReactElement, useEffect, useState } from 'react';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
import { StorageService } from './services/storage';
import * as C from './App.styles';

function App(): ReactElement {
  const [list, setList] = useState<Item[]>([]);

  useEffect(() => {
    setList(StorageService.getTasksFromStorage());
  }, []);

  function handleAddTask(taskName: string): void {
    let newList = [...list];

    newList.push({
      id: (list.length + 1),
      name: taskName,
      done: false,
    });

    StorageService.setTasksAtStorage(newList);

    setList(newList);
  }

  function handleTaskChange(id: number, done: boolean): void {
    let newList = [...list];

    for (let item of newList) {
      if (item.id === id)
        item.done = done;
    }

    StorageService.setTasksAtStorage(newList);

    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem 
            key={index} 
            item={item} 
            onChange={handleTaskChange}
          />
        ))}

      </C.Area>
    </C.Container>
  );
}

export default App;
