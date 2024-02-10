import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="__container p-3">
        <h1 className="text-4xl text-center">Recoil Deep Dive</h1>
        <p className="text-center text-gray-200">LinkedIn Header is cloned using Tailwind CSS</p>
        <p className="text-center text-gray-500">The notifications count are shown via recoil atoms</p>
      </div>
    </div>
  );
}

export default App;
