import './App.css';
import MainPage from './MainPage';
import Kerjasama from './route/Kerjasama';
import KerjasamaPelatihan from './route/KerjasamaPelatihan';
import Dokumentasi from './route/Dokumentasi';
import Silabus from './route/Silabus';
import Kurikulum from './route/Kurikulum';
import Pelatihan from './route/Pelatihan';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/kerjasama-akreditasi-lpk") {
            document.title = "Kerjasama | Pokdappsdmlh";
        } else {
            document.title = "Pokdappsdmlh";
        }
    }, [location.pathname]);

  return (
    <>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/kerjasama-akreditasi-lpk' element={<Kerjasama/>} />
          <Route path='/pelatihan' element={<Pelatihan />} />
          <Route path='/kerjasama-pelatihan' element={<KerjasamaPelatihan />} />
          <Route path='/dokumentasi-kegiatan' element={<Dokumentasi />} />
          <Route path='/kurikulum' element={<Kurikulum />} />
          <Route path='/silabus' element={<Silabus />} />
        </Routes>
    </Router>
    </>
  )
}

export default App;
