// React
import { Switch, Route } from "react-router-dom";

// Pages
import { Home } from "./pages/Home/Home";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ViewProduct from "./pages/ViewProduct/ViewProduct";
import Header from "./components/Header/Header";

// CSS
import "./App.css";
import "./styles/form.css";
import "./styles/card.css";

export function App() {
    return (
        <div className="App">
            <Header />

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
