import { MovieDetails } from "./Components/MovieDetails";
import { Landing } from "./Pages/Landing";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={< Landing/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
