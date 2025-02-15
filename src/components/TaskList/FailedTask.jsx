import React,{useState} from 'react'

const FailedTask = () => {
     const [showFullText, setShowFullText] = useState(false);
    
        const toggleText = () => {
          setShowFullText(!showFullText);
        };
  return (
    <div className="flex-shrink-0  p-5 w-[300px] bg-gray-700 rounded-xl flex flex-col">
    {/* Task Priority & Date */}
    <div className="flex text-sm justify-between items-center">
      <h3 className="bg-red-600 px-3 py-1 rounded">High</h3>
      <h1 className="font-semibold text-sm">20 Feb 2025</h1>
    </div>

    <div className="flex-grow">
        <h2 className="mt-5 text-2xl font-semibold">Make a YouTube Video</h2>
        <p className="text-sm mt-2">
          {showFullText
            ? "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam inventore repellat est quidem distinctio."
            : "Lorem ipsum dolor sit amet, consectetur..."}
        </p>
        <button
          className="!text-blue-400 text-sm mt-1 underline cursor-pointer"
          onClick={toggleText}
        >
          {showFullText ? "Show Less" : "Know More"}
        </button>
      </div>

    {/* Sticky Buttons */}
    <div className="mt-2 flex justify-center gap-3 ">
      <button className="bg-red-600 py-2 px-3 text-sm w-full rounded">
        Failed 
      </button>
      
    </div>
  </div>
  )
}

export default FailedTask
