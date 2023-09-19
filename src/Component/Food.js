
import  { useContext } from 'react'
import { Store } from '../Store/StoreContextApi'
import { NavLink } from 'react-router-dom'
function Food()
{
    const [contextdata] = useContext(Store)
    console.log("Food")
    return(
        <>
             <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Food </div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item)=>item.Category==="Food").map((element,index)=>{
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
                        {contextdata.filter((item)=>item.Category==="Food" && item.id>=68 && item.id<=80).map((element,index)=>{
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
            {/* {contextdata.filter((item)=>item.Category==="Food").map((element,index)=>{
                return(
                    <div key={index} style={{width:"200px",height:"200px", border:"2px solid black"}}>
                        <h2>Bollywood</h2>
                        <h4>{element.id}</h4>
                        <h3>{element.Movie}</h3>
                        <img src={element.poster} alt="Not Found" style={{width:"100px",height:"100px", border:"2px solid black"}}></img>
                    </div>
                )
              })}  */}
        </>
    )
}

export default Food