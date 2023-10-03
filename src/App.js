import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutPage from './AboutPage';
import MainPage from './mainPage';
import ProjectPage from './projectPage';
import Footer from './footer';
import ContactPage from './contactPage';
//BrowserRouter 컴포넌트를 Router라는 이름으로 사용
import { Route, Routes, Link, useNavigate, Outlet, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Navbar className='appnavbar' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='appnavbar_header' href="/">Suhyun Lee</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about" className='appnavbar_header_txt'>About</Nav.Link>
            <Nav.Link href="/project" className='appnavbar_header_txt'>Projects</Nav.Link>
            <Nav.Link href='/contact' className='appnavbar_header_txt'>Contacts</Nav.Link>
          </Nav> 
        </Container>
      </Navbar>

      
      <Router>
        <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
            <Route path='/about' element={<AboutPage></AboutPage>}></Route>
            <Route path='/project' element={<ProjectPage></ProjectPage>}></Route>
            <Route path='/contact' element={<ContactPage></ContactPage>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
