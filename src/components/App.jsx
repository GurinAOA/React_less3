import s from "../style/app.module.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { Home, Error, Authorization, Registration } from "../pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={s.container}>
      <Router>
        {/* <header>
          <Header />
        </header>
        <main> */}
                   {/* <Main />  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
      
        {/* </main>
        <footer>
          <Footer />
        </footer> */}
      </Router>
    </div>
  );
}

export default App;
