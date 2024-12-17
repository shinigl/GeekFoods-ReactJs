import './Hero.css' ;

const Hero = () =>{
return(
    <>
    <div className="hero-container" style={{width:"100vw"}}>
        <div className="hero-content" style={{width:"40%"}}>
            <div>
            <h1 style={{fontSize:"3.2rem"}}>Let us find your</h1>
            <h1 style={{color:"#be123c",fontSize:"3.2rem",lineHeight:"15px"}}>Forever Food</h1>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laboriosam veniam voluptas dolorem nam ratione eveniet asperiores minima alias laudantium?</p>
           <div className="hero-buttons">
            <button>Search now</button>
            <button>Know more</button>
           </div>
        </div>
    </div>
    </>
)

}

export default Hero ;