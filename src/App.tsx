import { useState } from "react";
import { PostsArea } from "./components/containers/postsArea"
import { WritePost } from "./components/containers/WriteArea";
import { SideBar } from "./components/sidebar";
import './styles/pattern.css';
import { Login } from "./components/containers/LoginArea";


function App() {
  const [Route,SetRoute] = useState("Home")

  return (
    <div className="flex flex-row">
        <div className="w-1/5 fixed">
            <SideBar/>
        </div>
          {
            Route=="Home"?(
              <div className="w-full flex justify-center items-center flex-col">
                <WritePost></WritePost><PostsArea></PostsArea>
              </div>):
              (
                <div className="w-full flex justify-center items-center flex-col">
                  <Login></Login>
                </div>
              )
          }

    </div>
  )
}

export default App
