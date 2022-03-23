import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Serach from "./components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Serach />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
