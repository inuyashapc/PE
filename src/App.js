import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Production from "./Pages/Production";
import Create from "./Pages/Create";
import Tables from "./Pages/Table";
import { Nav } from "react-bootstrap";
import Tabs from "./Pages/Tab";
import Dropdowns from "./Pages/Dropdown";
import CloneForms from "./Pages/Forms";
import Buttons from "./Pages/Button";
import Navbars from "./Pages/Navbar";
import Cards from "./Pages/Card";

function App() {
  return (
    <Router>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="product/add" eventKey="link-1">
            Create
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/table" eventKey="disabled">
            Table
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tab" eventKey="disabled">
            Tab
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dropdown" eventKey="disabled">
            Dropdown
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/form" eventKey="disabled">
            Form
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/button" eventKey="disabled">
            Button
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/navbar" eventKey="disabled">
            Navbar
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/card" eventKey="disabled">
            Card
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <Routes>
        <Route path="/" element={<Production />}></Route>
        <Route path="/product/add" element={<Create />}></Route>
        <Route path="/table" element={<Tables />}></Route>
        <Route path="/tab" element={<Tabs />}></Route>
        <Route path="/dropdown" element={<Dropdowns />}></Route>
        <Route path="/form" element={<CloneForms />}></Route>
        <Route path="/button" element={<Buttons />}></Route>
        <Route path="/navbar" element={<Navbars />}></Route>
        <Route path="/card" element={<Cards />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
