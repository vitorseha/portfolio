import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Hero from './pages/Hero';
import Menu from './components/Menu/Menu';
import NavigationBar from './layout/NavigationBar';
import Share from './components/Share/Share';

//const apiUrl = import.meta.env.VITE_API_URL;
function App() {
  return (
    <HashRouter>
      <div className="app-layout">
        <NavigationBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/project/share-component" element={<Share/>} />
            <Route path="/project/menu-overlay" element={<Menu />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}

export default App;
