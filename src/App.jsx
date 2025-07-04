import "./App.css";

import Topbar from "./components/Topbar/Topbar";
import MainCanvas from "./components/MainCanvas/MainCanvas";
import Advantage from "./components/Advantage/Advantage";
import Prizes from "./components/Prizes/Prizes";

function App() {
  return (
    <>
      <Topbar />
      <MainCanvas />
      <Advantage />
      <Prizes />
    </>
  );
}

export default App;
