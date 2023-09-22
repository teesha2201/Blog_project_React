
import React  , {usestate} from 'react'
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
                   
                         
            
            <ul className='navbar-list'>
                    <li>
                        <NavLink className="navlink" to='/'>Home </NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to='/Bollywood'>Bollywood</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to='/Technology'>Technology</NavLink> 
                    </li>
                    <li>
                        <NavLink className="navlink" to='/Hollywood'>Hollywood</NavLink> 
                    </li>
                    <li>
                        <NavLink className="navlink" to='/Fitness'>Fitness</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to='/Food'>Food</NavLink>
                    </li>
                </ul>
                </section>
                </nav>     
            </div>
            
         </BrowserRouter> 
         
        </> 
        )
          
            {/* <button className="navbar-toggle" onClick={toggleNavbar}>
                <span className="navbar-toggle-icon">&#9776;</span>
            </button>
            <div className={`MenuIcon ${isOpen ?'open' :''}`}>
                
            </div> */}
       
        
       
                 
             {/* <BrowserRouter>
                 <StoreContextApi>                     
                    <Routes>
                         <Route exact path='/' element={<Home/>}/>
                         <Route exact path='/Bollywood' element={<Bollywood/>}/>                         
                         <Route exact path='/Technology' element={<Technology/>}/>
                         <Route exact path='/Hollywood' element={<Hollywood/>}/>
                         <Route exact path='/Fitness' element={<Fitness/>}/>
                         <Route exact path='/Food' element={<Food/>}/>
                         <Route exact path='/details/:id' element={<Details/>}></Route>
                     </Routes>
                 </StoreContextApi>    
             */}

                 {/* <div className='displaynav'><i class="fa-solid fa-bars"></i>
                 <header className='HeaderNavlink'>  
                    <section>
                     <span className='The_title' >The</span>
                     <h1 className='siren'>Siren</h1>
                 </section>
                     <NavLink className="navlink" to='/'>Home </NavLink>
                     <NavLink className="navlink" to='/Bollywood'>Bollywood</NavLink>
                     <NavLink className="navlink" to='/Technology'>Technology</NavLink>                      
                     <NavLink className="navlink" to='/Hollywood'>Hollywood</NavLink>
                     <NavLink className="navlink" to='/Fitness'>Fitness</NavLink>
                     <NavLink className="navlink" to='/Food'>Food</NavLink>
                 </header>
                 </div> */}        
    
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