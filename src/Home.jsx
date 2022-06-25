import { Link } from "react-router-dom";

const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/barcode">Barcode</Link>
        </li>
        <li>
          <Link to="/barcode-scanner">Barcode Scanner</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Home;
