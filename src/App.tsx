import Header from './components/Header';
import HomePage from '~/pages/homePage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
