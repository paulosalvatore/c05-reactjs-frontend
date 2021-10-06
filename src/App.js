// React
import { Switch, Route, Link } from "react-router-dom";

// Pages
import { Home } from "./pages/Home/Home";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";

// CSS
import "./App.css";
import "./styles/form.css";
import "./styles/card.css";

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                Product App
                <br />
                <Link to="/">Home</Link>
                <br />
                <Link to="/product/create">Create</Link>
                <br />
                <br />
            </header>

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />

                    <Route path="/product/create" component={CreateProduct} />

                    <Route path="/product/view/:id" component={ViewProduct} />
                </Switch>
            </div>
        </div>
    );
}
