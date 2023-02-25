import React from 'react';
import { useQuery } from 'react-query';
import { taskService } from '../../services/task.service';
import { CheckIcon, XMarkIcon } from '../Icons';
export default function TaskList() {
  const { data: tasks } = useQuery('task', taskService.getTasks);
  return (
    <div className="flex justify-center">
      <table className="m-2 w-full max-w-3xl table-auto border-collapse text-center">
        <thead className="border-b-2 border-b-slate-400">
          <tr>
            <th className="text-white">Title</th>
            <th className="text-white">Description</th>
            <th className="text-white">Task completed</th>
            <th className="text-white">Task completed at</th>
            <th className="text-white">Task created at</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task) => (
            <tr
              className="border-b-[1px] border-slate-600 text-white"
              key={task._id}
            >
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td className="flex justify-center">
                {task.completed ? (
                  <div className="rounded-full bg-green-500 text-white">
                    <CheckIcon />
                  </div>
                ) : (
                  <div className="rounded-full bg-red-500 text-white">
                    <XMarkIcon />
                  </div>
                )}
              </td>
              <td>{task.completedAt?.toString()}</td>
              <td>
                {task.createdAt?.toString().split('T')[0].replaceAll('-', '.')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
