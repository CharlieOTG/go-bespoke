import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import EnquiryModal from './components/EnquiryModal';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Islands from './pages/Islands';
import Yachts from './pages/Yachts';
import Flights from './pages/Flights';
import Cars from './pages/Cars';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  const [enquiryOpen, { open: openEnquiry, close: closeEnquiry }] = useDisclosure(false);

  return (
    <MantineProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header onInquire={openEnquiry} />
        <EnquiryModal opened={enquiryOpen} onClose={closeEnquiry} />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About onInquire={openEnquiry} />} />
            <Route path="/destinations" element={<Islands onInquire={openEnquiry} />} />
            <Route path="/yachts" element={<Yachts onInquire={openEnquiry} />} />
            <Route path="/flights" element={<Flights onInquire={openEnquiry} />} />
            <Route path="/cars" element={<Cars onInquire={openEnquiry} />} />
          </Routes>
        </main>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
