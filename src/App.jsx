import React from "react";
import categories from "./utility/data";
import ListComponent from "./components/ListComponent";

const App = () => {
  return (
    <div className="bg-gradient-to-t from-slate-800 to-slate-900 h-full p-20 flex flex-wrap">
      <ListComponent  categories={categories}/>
    </div>
  );
};

export default App;
