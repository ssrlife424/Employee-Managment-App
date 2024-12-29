import React from "react";

const AcceptTask = ({data}) => {
    console.log();

  return (
    <div className=" flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl">
      <div className="flex items-center justify-between">
        <h3 className="px-3 py-1 text-sm bg-red-600 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="mt-2 text-sm">
      {data.taskDescription}
      </p>
      <div className="flex justify-between mt-4">
        <button className="px-2 py-1 text-sm bg-green-500">Mark as completed</button>
        <button className="px-2 py-1 text-sm bg-red-500">Mark as field</button>
      </div>
    </div>
  );
};

export default AcceptTask;
