import Nav from './Nav'
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home'
import About from '../pages/About'
import Store from '../pages/Store'
import Contact from '../pages/Contact'
import Footer from './Footer'

function App() {
  return (
    <div className="">
      <Nav />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/store' Component={Store} />
          <Route exact path='/contact' Component={Contact} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;