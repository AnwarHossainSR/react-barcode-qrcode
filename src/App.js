import {Route, Switch} from "react-router-dom";

import BarCodeScanner from "./components/BarCodeScanner";
import Barcode from "./components/Brcode";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/barcode">
          <Barcode />
        </Route>
        <Route path="/barcode-scanner">
          <BarCodeScanner />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
