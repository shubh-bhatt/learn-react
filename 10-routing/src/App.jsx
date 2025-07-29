import Nav from "./components/Nav";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 text-white px-[10%]">
      <Nav />
      <Mainroutes />
    </div>
  );
};

export default App;
