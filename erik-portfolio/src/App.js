
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Calculator from './pages/Calculator';
import Photos from './pages/Photos';
// COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Components/NotFound';
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
          path='/'
          element={<Home />}
        />

        <Route
          path='/resume'
          element={<Resume />}
        />

        <Route
          path='/about'
          element={<About />}
        />

        <Route
          path='/contact'
          element={<Contact />}
        />

        <Route
          path='/projects'
          element={<Projects />}
        />

        <Route
          path='/calculator'
          element={<Calculator />}
        />

        <Route
          path='/photos'
          element={<Photos />}
        />

        <Route
          path='/*'
          element={<NotFound />}
        />


      </Routes>

      <Footer />

    </div>

  );
}
