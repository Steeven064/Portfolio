import ReactDOM from "react-dom/client";
import 'semantic-ui-css/semantic.min.css';
import {
  Nav,
  Footer
} from './Sections'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <header>
      <Nav/>
    </header>

      <footer>
        <Footer/>
      </footer>
  </>
);
