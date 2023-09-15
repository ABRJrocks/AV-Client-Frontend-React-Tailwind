import "./App.css";
import Login from "./components/FormSignin";
import Chat from "./components/mainPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}
export default App;
