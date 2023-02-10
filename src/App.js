import "./App.css";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import RoutersTree from "./components/RoutersTree";

function App() {
  return (
    <div className="flex bg-slate-900 text-neutral-50">
      <Navbar />
      <main className="w-10/12 py-4">
        <h1 className="text-center font-bold text-4xl p-1 underline italic mt-6">THE PREDIKSI</h1>
        <div className="py-6 px-10">
          <Navbar2 />
          <div className="mt-6 space-y-4">
            <RoutersTree />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
