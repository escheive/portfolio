
// DEPENDENCIES
import { Routes, Route } from 'react-router-dom';
// PAGES
import Home from './pages/Home';
import Resume from './pages/Resume';
import About from './pages/About'
// COMPONENTS
import Header from './Components/Header';
import Footer from './Components/Footer';
// FONTS
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// STYLES
import './App.css';

export default function App() {

  return (

    <div className="App">

      <Header />

      <Routes>

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

      </Routes>

      <Footer />

    </div>

  );
}
