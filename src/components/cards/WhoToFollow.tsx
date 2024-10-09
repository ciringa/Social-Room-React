import "../../styles/WhoToFollow.css"

export default function WhoToFollow(){
    return(
        /* From Uiverse.io by Javierrocadev */ 
        <div className="card bg-slate-950 text-white font-bold">
        <p className="title">Who to follow</p>
        <div className="user__container">
            <div className="user hover:bg-slate-900">
                <div className="image"></div>
                <div className="user__content">
                    <div className="text">
                    <span className="name">Name</span>
                    <p className="username">@namedlorem</p>
                    </div>
                    <button className="follow">Follow</button>
            </div>
            </div> 
            <div className="user hover:bg-slate-900">
                <div className="image"></div>
                <div className="user__content">
                    <div className="text">
                    <span className="name">Name</span>
                    <p className="username">@namedlorem</p>
                    </div>
                    <button className="follow">Follow</button>
            </div>
            
            </div> 
            <div className="user hover:bg-slate-900">
                <div className="image"></div>
                <div className="user__content">
                    <div className="text">
                    <span className="name">Name</span>
                    <p className="username">@namedlorem</p>
                    </div>
                    <button className="follow hover:bg-slate-950">Follow</button>
            </div>
            
            </div> 

        </div>
            <a className="more" href="#">See more</a>
            </div>
    )
}