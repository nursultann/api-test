import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './other-screens/login.jsx';
import Main from "./other-screens/main.jsx";
import Currency from "./other-screens/currency.jsx";
import HelpCenter from "./other-screens/help.jsx";
import BalancePage from "./other-screens/wallet.jsx";
import Calculator from "./other-screens/calculator.jsx";
import Counter from "./other-screens/counter.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registr from "./other-screens/registr.jsx";
import SignIn from "./other-screens/sign-in.jsx";
import ChangePassword from "./other-screens/change-password.jsx";
import ApiTest from "./other-screens/api-test.jsx";
import Todo from "./other-screens/todo.jsx";
import { LoginLocal } from "./other-screens/login-local.jsx";
import ProductList from "./pages/products.jsx";
import ProductDetails from "./pages/product-details";
import ProductsItems from "./pages/products-list.jsx";
import ProductDetail from "./pages/product-detail.jsx";
import { AddProduct } from "./pages/addproduct.jsx";
import Profile from "./pages/profile.jsx";
import LoginSign from "./pages/login.jsx";
import Products from "./screens/products.jsx";
import Users from "./screens/users.jsx";
import LoginPage from "./screens/login.jsx";
import FakeApi from "./other-screens/fakeapi.jsx";
import Api from "./api/api.jsx";
import EditProduct from "./pages/editproduct.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/main" element={<Main />}> </Route>
          <Route path="/currency" element={<Currency />}> </Route>
          <Route path="/help" element={<HelpCenter />}> </Route>
          <Route path="/wallet" element={<BalancePage />}> </Route>
          <Route path="/calc" element={<Calculator />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/register" element={<Registr/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/change-password" element={<ChangePassword/>}/>
          <Route path="/api-test" element={<ApiTest/>}/>
          <Route path="/todo" element={<Todo/>} />
          <Route path="/login" element={<LoginLocal />} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/products-list" element={<ProductsItems />} />
          <Route path="/product-detail/:adid" element={<ProductDetail />} />
          <Route path="/products-add" element={<AddProduct/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login-local" element={<LoginSign />} />
          <Route path="/products-lists" element={<Products />} />
          <Route path="/users" element={<Users/>} />
          <Route path="/loginPage" element={<LoginPage/>} />
          <Route path="/fakeapi" element={<FakeApi />} />
          <Route path="/api" element={<Api/>} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
