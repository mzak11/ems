import React from "react";

const AcceptTask = ({ data }) => {
  // console.log(data.taskTitle)
  // const [showFullText, setShowFullText] = useState(false);

  // const toggleText = () => {
  //   setShowFullText(!showFullText);
  // };
  return (
    <div className="flex-shrink-0  h-[90%]  p-5 w-[300px] bg-white shadow-2xl rounded-xl flex flex-col">
      {/* Task Priority & Date */}
      <div className="flex text-sm justify-between items-center">
        <h3 className="bg-gray-700 px-3 py-1 rounded text-gray-100">{data.category}</h3>
        <h1 className="font-semibold text-sm">{data.date}</h1>
      </div>

      <div className="flex-grow ">
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-2">{data.description}</p>
      </div>

      {/* Sticky Buttons */}
      <div className="mt-2 flex justify-between gap-2 ">
        <button className=" border-[1.5px] text-green-600 border-green-600 py-2  text-sm w-full rounded hover:bg-green-200 transition">
          Mark Completed
        </button>
        <button className="border-[1.5px] text-red-600 border-red-600 py-2 px-3 text-sm w-full rounded hover:bg-red-200 transition">
          Mark Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
