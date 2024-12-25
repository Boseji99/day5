import React from "react";

const ListComponent = ({categories}) => {
  return (
    <>
      {categories.map((category) => (
        <div className="p-6 relative left-20">
          <div className="bg-white w-80 h-24 flex">
            <h1 className="bg-black w-16 h-14 p-3 left-3 text-xl rounded-full relative top-4 text-center text-white">
             {category.id}
            </h1>
            <div className={`${category.bgcolor} w-full relative left-7`}>
              <p className="relative top-4 left-16 text-xl font-bold text-white">
                {category.name}
              </p>
              <div className="relative top-4 left-3 text-white flex gap-5">
                {category.items.map((x)=>(
                    <div>{x}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListComponent;
