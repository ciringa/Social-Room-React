import { useState } from "react";
import { PostsArea } from "./components/containers/postsArea"
import { WritePost } from "./components/containers/WriteArea";
import { SideBar } from "./components/sidebar";
import './styles/pattern.css';
import { Login } from "./components/containers/LoginArea";
import WhoToFollow from "./components/cards/WhoToFollow";
import Notifications from "./components/cards/Notifications";


function App() {
  const [Route,SetRoute] = useState("Home")

  return (
    <div className="flex flex-row">
        <div className="w-1/5 fixed">
            <SideBar/>
        </div>
          {
            Route=="Home"?(
              <div className="w-full flex justify-center items-center flex-row">
                <div className="w-3/4 h-screen flex flex-col items-start">
                  <WritePost></WritePost><PostsArea></PostsArea>
                </div>
                <div className="w-1/4 h-screen flex-col gap-y-10 flex justify-start items-center p-8">
                  <WhoToFollow></WhoToFollow>
                  <Notifications></Notifications>
                  <Notifications></Notifications>
                  <Notifications></Notifications>
                </div>
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
