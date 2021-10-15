import { Item } from '../types/Item';

export const StorageService = {

    setTasksAtStorage: function (tasks: Item[]): void {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    },

    getTasksFromStorage: function (): Item[] {
        const tasksFromStorage = localStorage.getItem('tasks');
    
        if (tasksFromStorage)
            return JSON.parse(tasksFromStorage);
        else
            return [];
    }
}
