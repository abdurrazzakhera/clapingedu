import "./App.css";
import CopyHeader from "./Components/Header/CopyHeader";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="bg-indigo-600 w-full h-screen">
      <Header />
      <CopyHeader></CopyHeader>
    </div>
  );
}

export default App;
