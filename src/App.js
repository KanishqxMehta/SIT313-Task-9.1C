import PostTypeSelector from './sections/PostTypeSelector';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuestionPage from './sections/QuestionPage';
import Navbar from './sections/Navbar';
import Login from './sections/logSignUp/Login';
import Signup from './sections/logSignUp/Signup';
import ArticlePage from './sections/ArticlePage';
import HomePage from './sections/HomePage';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/postTypeSelector" element={<PostTypeSelector />} />
            <Route path="/question" element={<QuestionPage />} />
            <Route path="/article" element={<ArticlePage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
