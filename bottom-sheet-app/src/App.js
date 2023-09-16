import React from "react";
import "./App.css";
import BottomSheet from "./Components/BottomSheet";

function App() {
  const [sheetPosition, setSheetPosition] = React.useState("fully-open"); // Initially set to 'closed'

  const handleToggleSheet = () => {
    setSheetPosition("half-open");
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
