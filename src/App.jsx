import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {createBrowserRouter, Outlet} from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Cart from "./components/Cart";
import { Provider } from 'react-redux'
import store from "./Store/store";
import HomePageDrawer from "./components/HomePageDrawer";


function App() {

  return (
    <div className="App">
      <Provider store={store}>
          <Navbar/>
          <Outlet/>
          <HomePageDrawer></HomePageDrawer>
      </Provider>
      
    </div>
  )
}

export const route=createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
       
      },
      {
        path: "/restaurant/:resid/:id",
        element: <RestaurantMenu/>
       
      },
      {
        path: "/cart/:id",
        element:<Cart/>
       
      },
    ],
  }
])

export default App
