import meme_face from './logo.png';
import "./Navbar.css";
function Navbar() {
  return (
    <div className="header">
      <img className="header-image" src={meme_face} />
      <h1 className="header-title">Meme Generator</h1>
      <h4 className="header-author">ignorecrowd.co.in</h4>
    </div>
  );
}

export default Navbar;
