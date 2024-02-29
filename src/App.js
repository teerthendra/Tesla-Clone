import Model from "./components/Model";
import Navbar from "./components/Navbar";


function App() {
  return (
    <>

      <div className="bg-[url('./assets/enhanced-image.png')] h-screen w-screen bg-cover bg-centre">
        <Navbar></Navbar>
        <Model></Model>
      </div>



    </>
  );
}

export default App;
