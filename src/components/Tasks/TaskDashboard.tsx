import React from 'react';
import { taskService } from '../../services/task.service';
import { useQuery } from 'react-query';
export function TaskDashboard() {
  const { data: tasks } = useQuery('task', taskService.getTasks);
  const completedTasks = tasks?.filter((task) => task.completed === true);
  const uncompletedTasks = tasks?.filter((task) => task.completed === false);
  return (
    <div className="flex w-full justify-center">
      <div className="m-2">
        <p className="text-bold text-center text-2xl">{tasks?.length}</p>
        <p>Tasks</p>
      </div>
      <div className="m-2">
        <p className="text-bold text-center text-2xl">
          {completedTasks?.length}
        </p>
        <p>Tasks completed</p>
      </div>
      <div className="m-2">
        <p className="text-bold text-center text-2xl">
          {uncompletedTasks?.length}
        </p>
        <p>Task remaining</p>
      </div>
    </div>
  );
}
