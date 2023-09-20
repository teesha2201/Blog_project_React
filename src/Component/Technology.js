import  { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { Store } from '../Store/StoreContextApi'
function Technology()
{
    const [contextdata] = useContext(Store)
    console.log("Technology")
    return(
        <>
             <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Technology </div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item)=>item.Category==="Technology").map((element,index)=>{
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
                        {contextdata.filter((item)=>item.Category==="Technology" && item.id>=35 && item.id<=54).map((element,index)=>{
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


            {/* {contextdata.filter((item)=>item.Category==="Technology").map((element,index)=>{
                return(
                    <div key={index} style={{width:"200px",height:"200px", border:"2px solid black"}}>
                        <h2>Technology</h2>
                        <h4>{element.id}</h4>
                        <h3>{element.Movie}</h3>
                        <img src={element.poster} alt="Not Found" style={{width:"100px",height:"100px", border:"2px solid black"}}></img>
                    </div>
                )
              })}  */}
        </>
    )
}
export default Technology