import s from "../style/app.module.scss";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className={s.container}>
      <Header />
      <Main />
      <Footer /> 
   
    </div>
  );
}

export default App;
