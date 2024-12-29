import React from "react";

const NewTask = ({data}) => {
  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="px-3 py-1 text-sm bg-red-600 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">
        {data.taskDescription}
      </p>
      <div className="mt-4">
        <button>Accept Task</button>
      </div>
    </div>
  );
};

export default NewTask;
