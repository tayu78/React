import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TestComponent from "./TestComponent";
import MultipleStateChange from "./MultipleStateChange";

const Home = () => {
  return (
    <div>
      <div>
        <Link to="/test">test</Link>
      </div>
      <div>
        <Link to="/multiple">multiple</Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestComponent />} />
        <Route path="/multiple" element={<MultipleStateChange />} />
      </Routes>
    </BrowserRouter>
  );
}
