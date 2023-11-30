import { Routes, Route} from "react-router-dom";

import Counter from "./components/Counter";
import Page2 from "./components/Page2";

function App() {

  return (
    <div className=" container">
      <Routes>
        <Route path="/" element={<Counter />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
