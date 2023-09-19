
import  { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { Store } from '../Store/StoreContextApi'
import "./Bollywood.css"
function Hollywood()
{
    const [contextdata] = useContext(Store)
    console.log("Hollywood")
    return(
        <>
            <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Hollywood </div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item)=>item.Category==="Hollywood").map((element,index)=>{
                            return(
                                <div className='divHollywood' key={index}>
                                    <NavLink to={`/details/${element.id}`}>
                                    <img  src={element.poster} alt="Not Found" className='imgHollywoodTop'></img>
                                    </NavLink>
                                    <div className='divcoloumnHollywood'>
                                        <div className='topHollywoodTitle'>{element.Movie}</div>
                                        <div className='topPostHollywood'>{element.Heading.slice(0,150)}.
                                            <div style={{color:"lightgray",lineHeight:"5vh"}}>Visited:11 August 2023</div>
                                        </div>
                                        
                                    </div>
                                </div>
                            )
                        })}
                    
                    </div>
                </div>

                <div className='rightParentHollywood'> 
                    <div className='textToppostHollywood'>Top Post</div>
                    <div className='rightHollywood'>
                        {contextdata.filter((item)=>item.Category==="Hollywood" && item.id>=18 && item.id<=24).map((element,index)=>{
                                return(
                                    <div className='divHollywoodright' key={index}>
                                        <NavLink to={`/details/${element.id}`}>
                                        <img  src={element.poster} alt="Not Found" className='imgHollyTop'></img>
                                        </NavLink>
                                        <div className='divcoloumnHolly'>
                                            <div className='topHollyTitle'>{element.Movie}
                                                <h1 className='TopPostIndexing'>{index+1}</h1>
                                                <div style={{color:"lightgray",lineHeight:"5vh"}}>Visited:11 August 2023</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 

                        
                    </div>
                    <div className='Advertisment'>Advertisement</div>
                </div>   
            </div>

          
        </>
    )
}
export default Hollywood