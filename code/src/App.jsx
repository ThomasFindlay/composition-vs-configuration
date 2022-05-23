import "./App.css";
import Configuration from "@/components/alert/Configuration.jsx";
import Composition from "@/components/alert/Composition.jsx";
import Combined from "@/components/alert/Combined";

function App() {
  return (
    <div className="App">
      <main>
        <Configuration />
        <Composition />
        <Combined />
      </main>
    </div>
  );
}

export default App;
