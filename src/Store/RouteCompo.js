
import React ,{useState}  from 'react'
import {Routes ,Route, BrowserRouter ,NavLink} from 'react-router-dom';
import Home from '../Component/Home'
import Bollywood from '../Component/Bollywood'
import Technology from '../Component/Technology'
import Hollywood from '../Component/Hollywood'
import Fitness from '../Component/Fitness'
import Food from '../Component/Food'
import Details from '../Component/Details';
import StoreContextApi from './StoreContextApi';
// import {CgMenu ,CgClose} from "react-icons/cg"
// import styled from "styled-components"



function   RouteCompo()
{  
    const [count,setCount]=useState(false);
  
    return(
        <>  {/* second menu part */}
            <BrowserRouter>
                 <StoreContextApi>                     
                    <Routes>
                         <Route exact path='/' element={<Home/>}/>
                         <Route exact path='/Bollywood' element={<Bollywood/>}/>                         
                         <Route exact path='/Technology' element={<Technology/>}/>
                         <Route exact path='/Hollywood' element={<Hollywood/>}/>
                         <Route exact path='/Fitness' element={<Fitness/>}/>
                         <Route exact path='/Food' element={<Food/>}/>
                         <Route exact path='/details/:id' element={<Details/>}/>
                     </Routes>
                 </StoreContextApi> 
            <div className='menu-link'>
            <nav className='main-nav'>
            <section>
                    <div className='titleparent'>
                        <span className='The_title' >The</span>
                        <h1 className='siren'>Siren</h1>
                    </div>    
                    <div onClick={()=>setCount(!count)} className='display'>
                        
                        <i className="fa-solid fa-bars"> </i>
                    </div>
                  
                  
                         
            
            <ul className='navbar-list '>
                    <li className='list'>
                        <NavLink className="navlink" to='/'>Home </NavLink>
                    </li>
                    <li className='list'>
                        <NavLink className="navlink" to='/Bollywood'>Bollywood</NavLink>
                    </li>
                    <li className='list'>
                        <NavLink className="navlink" to='/Technology'>Technology</NavLink> 
                    </li>
                    <li className='list'>
                        <NavLink className="navlink" to='/Hollywood'>Hollywood</NavLink> 
                    </li>
                    <li className='list'>
                        <NavLink className="navlink" to='/Fitness'>Fitness</NavLink>
                    </li>
                    <li className='list'>
                        <NavLink className="navlink" to='/Food'>Food</NavLink>
                    </li>
            </ul>
                {/* ketan code */}
                {/* <div onClick={()=>setCount(!count)} className='display'>
                    <i className="fa-solid fa-bars"> </i>
                </div> */}
               
                
                <div className={(count)?"hambergerlinksShows":"hambergerlinksHide"}>
                
                    <ul className='navbar-listResponsive'>
                        <li className='listres  '>
                            <NavLink onClick={()=>setCount(!count)} to="/" className="navlinkRes  hambergerlinksShows hambergerlinksHide " >Home</NavLink>
                        </li>
                        <li className='listres'>
                            <NavLink onClick={()=>setCount(!count)} to='/Bollywood' className="navlinkRes hambergerlinksShows hambergerlinksHide " >Bollywood</NavLink>
                        </li>
                        <li className='listres '>
                            <NavLink onClick={()=>setCount(!count)} to='/Hollywood' className="navlinkRes hambergerlinksShows hambergerlinksHide" >Hollywood</NavLink>
                        </li>
                        <li className='listres '>
                            <NavLink onClick={()=>setCount(!count)} to='/Technology' className="navlinkRes hambergerlinksShows hambergerlinksHide" >Technology</NavLink>
                        </li>
                        <li className='listres '>
                            <NavLink onClick={()=>setCount(!count)} to='/Fitness' className="navlinkRes hambergerlinksShows hambergerlinksHide" >Fitness</NavLink>
                        </li>
                        <li className='listres '>
                            <NavLink onClick={()=>setCount(!count)} to='/Food' className="navlinkRes hambergerlinksShows hambergerlinksHide" >Food</NavLink>
                        </li>
                    </ul>
                  
                    </div>
                {/* </div> */}

                </section>
                </nav>     
            </div>
            
         </BrowserRouter> 
         
        </> 
        )
          
                 
    
}
export default  RouteCompo

















































// import React from 'react'
// import {Routes ,Route, BrowserRouter ,NavLink} from 'react-router-dom';
// import Home from '../Component/Home'
// import Bollywood from '../Component/Bollywood'
// import Technology from '../Component/Technology'
// import Hollywood from '../Component/Hollywood'
// import Fitness from '../Component/Fitness'
// import Food from '../Component/Food'
// import Details from '../Component/Details';
// import StoreContextApi from './StoreContextApi';


// function   RouteCompo()
// {   
    
//     return(
//         <>
//                 <section>
//                     <span className='The_title' >The</span>
//                     <h1 className='siren'>Siren</h1>
//                 </section>
//                 <br></br>
//             <BrowserRouter>
//                 <StoreContextApi>
//                     <Routes>
//                         <Route exact path='/' element={<Home/>}/>
//                         <Route exact path='/Bollywood' element={<Bollywood/>}/>
//                         <Route exact path='/Technology' element={<Technology/>}/>
//                         <Route exact path='/Hollywood' element={<Hollywood/>}/>
//                         <Route exact path='/Fitness' element={<Fitness/>}/>
//                         <Route exact path='/Food' element={<Food/>}/>
//                         <Route exact path='/details/:id' element={<Details/>}></Route>
//                     </Routes>
//                 </StoreContextApi>    
            

//                 <div className='displaynav'><i class="fa-solid fa-bars"></i>
//                 <header className='HeaderNavlink'>    
//                     <NavLink className="navlink" to='/'>Home </NavLink>
//                     <NavLink className="navlink" to='/Bollywood'>Bollywood</NavLink>
//                     <NavLink className="navlink" to='/Technology'>Technology</NavLink> 
//                     <NavLink className="navlink" to='/Hollywood'>Hollywood</NavLink>
//                     <NavLink className="navlink" to='/Fitness'>Fitness</NavLink>
//                     <NavLink className="navlink" to='/Food'>Food</NavLink>
//                 </header>
//                 </div>

                


//             </BrowserRouter>

//         </>
//     )
// }
// export default  RouteCompo