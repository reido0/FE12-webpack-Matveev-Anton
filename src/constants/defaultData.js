import { TASK_STATUS } from './taskStatus';

export const DEFAULT_DATA = [
  {
      taskName: '0',
      isDone: false,
      taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
      userName: 'Xeon',
      state: TASK_STATUS.toDo
  },
  {
      taskName: '1',
      isDone: false,
      taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
      userName: 'Xeon',
      state: TASK_STATUS.inProgress
  },
  {
      taskName: '2',
      isDone: true,
      taskDescription: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium animi officia natus, voluptatibus aliquid perspiciatis.',
      userName: 'Xeon',
      state: TASK_STATUS.inProgress
  },
  {
      taskName: '3',
      isDone: true,
      taskDescription: 'task 3',
      userName: 'Xeon',
      state: TASK_STATUS.inProgress
  },
];
