import "./App.css";
import { BrowserRouter as r, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
 import Read from "./Components/Read";
 import Update from "./Components/Update";

//import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="container">
      <r><center>
        <Routes>
          <Route path="/" element={<Create />}></Route>
          <Route path="/read" element={<Read />}></Route>
          <Route path="/update" element={<Update />}></Route>
        </Routes>
        </center>
      </r>
    </div>
  );
}
export default App;
