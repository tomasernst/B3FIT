import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
        backgroundImage: 'url(https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/31a0f10f30316b11561148ac6cf5e198/photo-1520596880803-6ea0113a42d1.jpg)',
        }}
      ></div>
      <Footer />
    </div>
  );
}

export default App;
