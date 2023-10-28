import Home from "./pages/Home";
import Nav from "./component/Nav";
// styles
import GlobalStyles from "./component/GlobalStyles";
// Router
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <GlobalStyles />
            <Nav />
            <Routes>
                <Route path="/game/:id" element={<Home />} />
                <Route path="/*" element={<Home />}></Route>
            </Routes>
        </div>
    );
}

export default App;
