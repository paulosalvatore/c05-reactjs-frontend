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
import UpdateProduct from "./pages/UpdateProduct/UpdateProduct";
import DeleteProduct from "./pages/DeleteProduct/DeleteProduct";
import GuardedRoute from "./components/GuardedRoute/GuardedRoute";
import Login from "./pages/Login/Login";

export function App() {
    return (
        <div className="App">
            <Header />

            <div className="content">
                <Switch>
                    <Route path="/" exact={true} component={Home} />

                    <Route path="/login" component={Login} />

                    <GuardedRoute path="/guarded" component={Home} />

                    <GuardedRoute
                        path="/product/create"
                        component={CreateProduct}
                    />

                    <GuardedRoute
                        path="/product/view/:id"
                        component={ViewProduct}
                    />

                    <GuardedRoute
                        path="/product/update/:id"
                        component={UpdateProduct}
                    />

                    <GuardedRoute
                        path="/product/delete/:id"
                        component={DeleteProduct}
                    />
                </Switch>
            </div>
        </div>
    );
}
