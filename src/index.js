import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import ReactDOM from "react-dom";
import App from "./App"
import { BrowserRouter } from "react-router-dom"

  ReactDOM.render(
    <BrowserRouter>
      <App />
    
    </BrowserRouter>,
  document.getElementById('root'),
)