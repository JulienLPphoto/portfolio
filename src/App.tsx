import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import GalleryStreetPhotography from "./pages/GalleryStreetPhotography";
import GalleryStructure from "./pages/GalleryStructure";
import GalleryLandscape from "./pages/GalleryLandscape";
import GalleryPortrait from "./pages/GalleryPortrait";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery">
          <Route index element={<Gallery />} />
          <Route path="street-photography" element={<GalleryStreetPhotography />} />
          <Route path="structure" element={<GalleryStructure />} />
          <Route path="landscape" element={<GalleryLandscape />} />
          <Route path="portrait" element={<GalleryPortrait />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
