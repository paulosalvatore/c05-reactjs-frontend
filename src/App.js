// React
import { Switch, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home/Home";

// CSS
import "./App.css";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";

export function App() {
    return (
        <div className="App">
            <header className="App-header">Product App</header>

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
