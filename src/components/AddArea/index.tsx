import { ReactElement, useState, KeyboardEvent } from 'react';
import * as C from './styles';

type Props = {
    onEnter: (taskName: string) => void;
}

export function AddArea({ onEnter}: Props): ReactElement {
    const [inputText, setInputText] = useState<string>('');

    function handleKeyUp(event: KeyboardEvent): void {
        console.log(event.code);

        if (event.code === 'Enter' && inputText !== '') {
            onEnter(inputText);

            setInputText('');
        }
    }

    return (
        <C.Container>
            <div className="image">➕</div>
            <input 
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputText}
                onChange={(event) => setInputText(event.target.value)}
                onKeyUp={handleKeyUp}
            />
        </C.Container>
    );
}