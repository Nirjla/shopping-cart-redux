import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import Products from "../components/Products";
import Banner from "../components/Banner";

export const router = createBrowserRouter([
      {
            path:'/',
            element:<Root/>,
            children:[
                  {
                        path:'/',
                        element:<Banner/>,
                        
                  },{
                        path:'/',
                        element:<Products/>
                  }
            ]

      }
])