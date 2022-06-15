
import './App.css';
import MainContent from './components/main-content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, useParams, useNavigate} from 'react-router-dom';
import Detail from './components/detail';
import Header from './components/header';
import Footer from './components/footer';
function App() {  
  return (<div className="App">
    <Router>
          <Header></Header>
          <Routes>
            <Route path="/" element={<MainContent/>} exact />
            <Route path="/coinslist" element={<MainContent/>} exact />
            <Route path="/detail/:id" element={<Detail/>} exact  />
          </Routes>  
          <Footer></Footer>
    </Router>
    </div>
  );
}

export default App;
