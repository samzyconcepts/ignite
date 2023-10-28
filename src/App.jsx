import Home from "./pages/Home";
import GlobalStyles from "./component/GlobalStyles";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Routes>
                <Route path="/game/:id" element={<Home />} />
                <Route path="/*" element={<Home />}></Route>
            </Routes>
        </div>
    );
}

export default App;
