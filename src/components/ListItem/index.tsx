import { ReactElement } from 'react';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
}

export function ListItem({ item, onChange }: Props): ReactElement {
    return(
        <C.Container done={item.done}>
            <input 
                type="checkbox" 
                checked={item.done} 
                onChange={e => onChange(item.id, e.target.checked)}
            />
            <label>
                {item.name} - {item.done ? 'Tarefa concluída ✅' : 'Tarefa em andamento ⌚'}
            </label>
            <span>{item.id}</span>
        </C.Container>
    );
}