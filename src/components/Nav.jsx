import './Nav.css'

const Nav = () =>{

    return(
        <>
        <header style={{display:"flex" , height:"10vh" , backgroundColor:"#111827",justifyContent:"space-around", alignItems:"center"}}>
        <div className="logo" style={{display:"flex",gap:"10px" ,height:"50%" , alignItems:"center"}}>
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
            <h2 style={{color:"#fff"}}>GeekFoods</h2>
        </div>

        <ul className="nav-list" style={{listStyle:"none",display:"flex" ,gap:"35px"}}>
            <li><a style={{color:"#3b82f6"}} className="nav-link" id='first-link' href="">Home</a></li>
            <li><a className="nav-link" href="">Quote</a></li>
            <li><a className="nav-link" href="">Resturants</a></li>
            <li><a className="nav-link" href="">Foods</a></li>
            <li><a className="nav-link" href="">Contact</a></li>
            
        </ul>

        <button style={{ cursor:"pointer",color:"#fff", border:"none" ,height:"40px",width:"120px",borderRadius:"10px" }} id="start-btn">Get Started</button>
        </header>
        </>
    )
}

export default Nav ;