// React
import { Switch, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home/Home";

// CSS
import "./App.css";

export function App() {
    return (
        <div className="App">
            <header className="App-header"> Product List </header>

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                </Switch>
            </div>
        </div>
    );
}
