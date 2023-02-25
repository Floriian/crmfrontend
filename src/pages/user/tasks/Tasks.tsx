import React from 'react';
import TaskList from '../../../components/Tasks/TaskList';
import { PlusIcon } from '../../../components/Icons';
import { Button } from '../../../components/Form';

function Tasks() {
  return (
    <div className="">
      <TaskList />
      <Button variant="confirm" className="m-2 flex">
        <PlusIcon />
        <span>Create new task</span>
      </Button>
    </div>
  );
}

export default Tasks;
