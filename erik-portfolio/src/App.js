
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Calculator from './pages/Calculator';
// COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';
// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// STYLES
import './App.scss';

export default function App() {

  return (

    <div className="App">

      <Header />

      <Routes>

        <Route
          path='/portfolio'
          element={<Home />}
        />

        <Route
          path='/portfolio/Resume'
          element={<Resume />}
        />

        <Route
          path='/portfolio/About'
          element={<About />}
        />

        <Route
          path='/portfolio/Contact'
          element={<Contact />}
        />

        <Route
          path='/portfolio/Projects'
          element={<Projects />}
        />

        <Route
          path='/portfolio/calculator'
          element={<Calculator />}
        />

      </Routes>

      <Footer />

    </div>

  );
}
