import React from "react";
import "./index.css";
import ReactDOM from "react-dom";
import Language from "./Components/Language";
import LanguageData from "./Components/LanguageData";

const App = () => {
  return (
    <>
      <h1>About Programing language</h1>
      <div className="container">
        {LanguageData.map((values) => {
          return (
            <>
              <Language
                title={values.title}
                imgsrc={values.imgsrc}
                desc={values.desc}
                btn={values.btn}
              />
            </>
          );
        })}
      </div>
    </>
  );
};
export default App;
