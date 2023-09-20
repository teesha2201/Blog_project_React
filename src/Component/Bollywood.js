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
                                        <div className='topHollywoodTitle'>{element.Movie.slice(0,60)}</div>
                                        <div className='topPostHollywood'>{element.Heading.slice(0,80)}.
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
                        {contextdata.filter((item)=>item.Category==="Bollywood" && item.id>=1 && item.id<=18).map((element,index)=>{
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
                    <div className='AdvertismentBollywood'><img src="https://media4.giphy.com/media/tfeBZQCErlj7FantMq/giphy.gif?cid=ecf05e47v29ij31o7ab275ojvc0mlqnj79wrw2hb8otgfxql&ep=v1_gifs_search&rid=giphy.gif&ct=g"></img></div>
                </div>
   
            </div>
        </>
    )
}
export default Bollywood

