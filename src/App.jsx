import { useSetRecoilState } from "recoil";
import Header from "./components/Header";
import { notificationsAtom } from "./atoms";

function App() {
  const setNotificationCount = useSetRecoilState(notificationsAtom);
  return (
    <div className="">
      <Header />
      <div className="__container p-3">
        <h1 className="text-4xl text-center">Recoil Deep Dive</h1>
        <p className="text-center text-gray-200">
          LinkedIn Header is cloned using Tailwind CSS
        </p>
        <p className="text-center text-gray-500">
          The notifications count are shown via recoil atoms
        </p>
        <div className="__btn_container w-full flex justify-center items-center my-3">
          <button
            onClick={() => setNotificationCount((val) => val + 1)}
            className="m-auto px-4 py-2 rounded bg-blue-500 text-white"
          >
            Update Notification Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
