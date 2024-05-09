import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Home from "../components/Home";
import NotFoundPage from "../components/Error";
import Cart from "../components/Cart";

export const router = createBrowserRouter([
      {
            path:'/',
            element:<Root/>,
            errorElement:<NotFoundPage/>,
            children:[
                  {
                        path:'/',
                        element:<Home/>,
                        index:true,

                  }

            ]
           
      },{
         


      }
])