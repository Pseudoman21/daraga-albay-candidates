import './App.css';
import { Col, Form, Button, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Governor from './components/governor';
import ViceGov from './components/viceGovernor';
import BoardMemFirstDist from './components/boardMemFirstDist';
import BoardMemSecDist from './components/boardMemSecDist';
import BoardMemThirdDist from './components/boardMemThirdDist';
import CongFirstDist from './components/congFirstDist';
import CongSecDist from './components/congSecDist';
import CongThirdDist from './components/congThirdDist';
import MunCouncilor from './components/munDaragaCandidates';
import Footer from './components/footer';
import Result from './components/Results'
function App() {
  return (
    <div className="App">
      {/* <Result /> */}
      <Header />
      <Governor />
      <ViceGov />
      <BoardMemFirstDist />
      <BoardMemSecDist />
      <BoardMemThirdDist />
      <CongFirstDist />
      <CongSecDist />
      <CongThirdDist />
      <MunCouncilor />
      <Footer />
    </div>
  );
}

export default App;
