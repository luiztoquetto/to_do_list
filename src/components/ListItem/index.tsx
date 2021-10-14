import { ReactElement } from 'react';
import { Item } from '../../types/Item';

import * as C from './styles';

type Props = {
    item: Item;
}

export function ListItem({ item }: Props): ReactElement {
    return(
        <C.Container>
            {item.name}    

            {/* 38min aula1 */}
        </C.Container>
    );
}