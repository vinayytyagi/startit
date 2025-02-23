import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Routes

import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";


function App() {

  return (
    <Router>
    <Routes>
      {/* Defining routes for different pages */}
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
    {/* <Footer /> Footer remains visible across all pages */}
  </Router>
  );
}

export default App;
