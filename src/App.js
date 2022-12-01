import styles from './styles.css'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className = "header">
        <div className = "logo"/>
      </div>
      <div className = "shop-now-container">
        <Link className = "shop-now-text" to = "/profile">
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default App;
