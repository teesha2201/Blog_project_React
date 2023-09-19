import React from 'react'
import {Routes ,Route, BrowserRouter ,NavLink} from 'react-router-dom';
import Home from '../Component/Home'
import Bollywood from '../Component/Bollywood'
import Technology from '../Component/Technology'
import Hollywood from '../Component/Hollywood'
import Fitness from '../Component/Fitness'
import Food from '../Component/Food'
import Details from '../Component/Details';
import StoreContextApi from './StoreContextApi';

import "./Style.css"
function   RouteCompo()
{   
    
    return(
        <>
                <section>
                    <span className='The_title' >The</span>
                    <h1 className='siren'>Siren</h1>
                </section>
                <br></br>
            <BrowserRouter>
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
            

                <div className='displaynav'><i class="fa-solid fa-bars"></i>
                <header className='HeaderNavlink'>    
                    <NavLink className="navlink" to='/'>Home </NavLink>
                    <NavLink className="navlink" to='/Bollywood'>Bollywood</NavLink>
                    <NavLink className="navlink" to='/Technology'>Technology</NavLink> 
                    <NavLink className="navlink" to='/Hollywood'>Hollywood</NavLink>
                    <NavLink className="navlink" to='/Fitness'>Fitness</NavLink>
                    <NavLink className="navlink" to='/Food'>Food</NavLink>
                </header>
                </div>
            </BrowserRouter>

        </>
    )
}
export default  RouteCompo