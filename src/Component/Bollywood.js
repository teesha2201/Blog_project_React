import  { useContext } from 'react'
import { Store } from '../Store/StoreContextApi'
import "./Bollywood.css"
import "./Bollywoodmedia.css"
import { NavLink } from 'react-router-dom'
const Bollywood=()=>
{ 
    
    const [contextdata] = useContext(Store)
    console.log("xyz")
    return(
        <>
            {/* <div className='textBollywood'>Bollywood</div> */}
            <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Bollywood </div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item)=>item.Category==="Bollywood").map((element,index)=>{
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
                    <div className='textToppostHollywood'>Top Post 
                        {/* {contextdata.filter((item)=>item.Category==="Bollywood" && item.id===18).map((element,index)=>{
                            return(
                                <div className='divcoloumnHolly'  key={index}>
                                    <div className='topHollyTitle'>{element.Movie}
                                        <h1 className='TopPostindexing'>{index+1}</h1>
                                        <div style={{color:"lightgray",lineHeight:"5vh"}}>Visited:11 August 2023</div>
                                    </div>
                                </div>
                            )
                            
                        })}
                         */}
                    </div>
                    <div className='rightHollywood'>
                        {contextdata.filter((item)=>item.Category==="Bollywood" && item.id>=4 && item.id<=18).map((element,index)=>{
                                return(
                                    <div className='divHollywoodright' key={index}>
                                        
                                    <NavLink to={`/details/${element.id}`}>
                                       <img  src={element.poster} alt="Not Found" className='imgHollyTop'></img>
                                    </NavLink>   
                                        <div className='divcoloumnHolly'>
                                            <div className='topHollyTitle'>{element.Movie}
                                                <h1 className='TopPostindexing'>{index+1}</h1>
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
export default Bollywood

