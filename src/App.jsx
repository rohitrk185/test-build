import { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    console.log("App mounted");

    function onBeforeUnload(e) {
      e.preventDefault();

      console.log("App Unloading...");
      // alert("are u sure");

      e.returnValue = "";
    }

    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      // window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <b>Detect browser or tab closing</b>
      <p>
        The beforeunload function is triggered just before the browser or tab is
        to be closed or the page is to be reloaded. Modern browsers require some
        interaction with the page, otherwise the dialog box is not shown.
      </p>

      <textarea
        placeholder="Trigger an
        interaction by writing something here"
      ></textarea>
    </div>
  );
}

export default App;
