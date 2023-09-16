import React from "react";
import "./App.css";
import BottomSheet from "./Components/BottomSheet";

function App() {
  const [sheetPosition, setSheetPosition] = React.useState("closed"); // Initially set to 'closed'

  const handleToggleSheet = () => {
    setSheetPosition("fully-open");
  };
  const handleCloseSheet = () => {
    setSheetPosition("closed");
  };
  const handleHalfOpen = () => {
    setSheetPosition("half-open");
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Bottom Sheet</h1>
        <button className="btn" onClick={handleToggleSheet}>
          Open
        </button>
        <button className="btn" onClick={handleHalfOpen}>
          Half Open
        </button>
      </header>
      <main>
        <BottomSheet
          sheetPosition={sheetPosition}
          handleToggleSheet={handleToggleSheet}
          handleCloseSheet={handleCloseSheet}
          handleHalfOpen={handleHalfOpen}
        />
      </main>
    </div>
  );
}

export default App;
