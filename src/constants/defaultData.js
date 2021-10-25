import { TASK_STATUS } from './taskStatus';

export const USERS = [
    {
        id: 1,
        name: 'Xeon',
        avatar: 'https://randomuser.me/api/portraits/med/men/1.jpg'
    },
];

export const DEFAULT_DATA = [
    {
        id: 1,
        taskName: '0',
        isDone: false,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        userName: 'Xeon',
        state: TASK_STATUS.toDo
    },
    {
        id: 2,
        taskName: '1',
        isDone: false,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        userName: 'Xeon',
        state: TASK_STATUS.inProgress
    },
    {
        id: 3,
        taskName: '2',
        isDone: false,
        taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
        userName: 'Xeon',
        state: TASK_STATUS.inProgress
    },
    {
        id: 4,
        taskName: '3',
        isDone: false,
        taskDescription: 'task 3',
        userName: 'Xeon',
        state: TASK_STATUS.inProgress,
        user: {
            name: 'Anton',
            avatar: 'https://randomuser.me/api/portraits/med/men/.jpg',
            id: 1
        }
    },
];
