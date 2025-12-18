// import image from './assets/doItSvg.png'
import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/sidebar.jsx";
import DoIt from "./components/doit.jsx";
import Cards from "./components/cards.jsx";
import About from "./pages/About.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Here import
function App() {
  const timeNow = new Date().toISOString().slice(0, 16);

  const [todos, setTodos] = useState([
    // { id: UUID4(), list: "Buy groceries", time: "9:00 AM" },
    // { id: UUID4(), list: "Finish homework", time: "11:00 AM" },
    // { id: UUID4(), list: "Clean the house", time: "2:00 PM" },
    // { id: UUID4(), list: "Pay bills", time: "4:30 PM" },
    // { id: UUID4(), list: "Call a friend", time: "7:00 PM" },
  ]);

  const [text, setText] = useState("");
  const [time, setTime] = useState(timeNow);

  const [textEdit, setTextEdit] = useState("");
  const [timeEdit, setTimeEdit] = useState(timeNow);
  const [isEditable, setIsEditable] = useState(false);

  return (
    <BrowserRouter>
      <div className="body-container">
        <Navbar />
        <Sidebar />

        <Routes>
          <Route path="/" element={
            <>
              <DoIt
                todos={todos}
                setTodos={setTodos}
                text={text}
                time={time}
                setText={setText}
                setTime={setTime}
                timeNow={timeNow}
              />
              <Cards
                todos={todos}
                setTodos={setTodos}
                isEditable={isEditable}
                setIsEditable={setIsEditable}
                textEdit={textEdit}
                setTextEdit={setTextEdit}
                timeEdit={timeEdit}
                setTimeEdit={setTimeEdit}
                timeNow={timeNow}
              />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
