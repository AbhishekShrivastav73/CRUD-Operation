import React from "react";

function Cards({data,func,index}) {
  return (
    <div className="w-52 h-64 rounded-md p-2 bg-zinc-50">
      <div className="w-full h-2/3 rounded-md overflow-hidden bg-sky-200">
        <img className="w-full h-full object-cover" src={data.img} alt="" />
      </div>
      <h1 className="font-bold">{data.name}</h1>
      <h4 className="font-semibold text-sm ">{data.profession}</h4>
      <button onClick={()=>func(index)} className={`px-4 py-1 rounded-md mt-1 ${data.isConnected ? 'bg-red-500' : 'bg-green-500'} font-semibold text-white`}>{data.isConnected ? "Remove" : 'Add Friend'}</button>
    </div>
  );
}

export default Cards;
