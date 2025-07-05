import "./App.css";

import Topbar from "./components/Topbar/Topbar";
import MainCanvas from "./components/MainCanvas/MainCanvas";
import Advantage from "./components/Advantage/Advantage";
import Prizes from "./components/Prizes/Prizes";
import Ranking from "./components/Ranking/Ranking";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Topbar />
      <MainCanvas />
      <Advantage />
      <Prizes />
      <Ranking />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
