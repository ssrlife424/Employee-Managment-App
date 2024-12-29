import React from "react";

const TaskListNumber = ({data}) => {
  return (
    <div className="flex justify-between gap-5 mt-10 screen ">
      <div className=" rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.newTask}</h2>
        <h2 className="text-xl font-medium ">New Task</h2>
      </div>
      <div className=" rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.completed}</h2>
        <h2 className="text-xl font-medium ">Completed Task</h2>
      </div>
      <div className=" rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.active}</h2>
        <h2 className="text-xl font-medium ">Accepted Task</h2>
      </div>
      <div className=" rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
        <h2 className="text-3xl font-semibold">{data.taskCounts.failed}</h2>
        <h2 className="text-xl font-medium ">Failed Task</h2>
      </div>
    </div>
  );
};

export default TaskListNumber;
