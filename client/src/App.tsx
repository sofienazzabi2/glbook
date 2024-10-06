import AppRoutes from "./AppRoutes";
import useWindowWidth from "./common/hooks/useWindowWidth";
import Notification from "./components/Notification";

function App() {
  useWindowWidth();
  return (
    <>
      <AppRoutes />
      <Notification />
    </>
  );
}

export default App;
