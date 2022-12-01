import styles from './styles.css'
import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className = "header">
      <img src = {require('./img/lego.png')} className = "lego-logo"/>
      </div>
      <div className = "shop-now-container">
        <Link className = "shop-now-text" to = "/AllSets">
          Shop Now
        </Link>
      </div>
    </>
  );
};

export default App;
