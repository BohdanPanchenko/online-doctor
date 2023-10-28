import "./App.css";
import { Main } from "./components/Main";
import { SideBar } from "../src/components/SideBar";
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <SideBar />
        <Main />
      </div>
    </div>
  );
}

export default App;
