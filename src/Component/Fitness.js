
import  { useContext } from 'react'
import { Store } from '../Store/StoreContextApi'
import { NavLink } from 'react-router-dom'
function Fitness()
{
    const [contextdata] = useContext(Store)
    console.log("Fitness")
    return(
        <>
            <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Technology </div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item)=>item.Category==="Fitness").map((element,index)=>{
                            return(
                                <div className='divHollywood' key={index}>
                                    <NavLink to={`/details/${element.id}`}></NavLink>
                                    <img  src={element.poster} alt="Not Found" className='imgHollywoodTop'></img>
                                    <NavLink/>
                                    <div className='divcoloumnHollywood'>
                                        <div className='topHollywoodTitle'>{element.Movie.slice(0,34)}</div>
                                        <div className='topPostHollywood'>{element.Heading.slice(0,100)}.
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
                        {contextdata.filter((item)=>item.Category==="Fitness" && item.id>=51 && item.id<=64).map((element,index)=>{
                                return(
                                    <div className='divHollywoodright' key={index}>
                                        <NavLink to={`/details/${element.id}`}></NavLink>
                                        <img  src={element.poster} alt="Not Found" className='imgHollyTop'></img>
                                        <NavLink/>
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

            {/* {contextdata.filter((item)=>item.Category==="Fitness").map((element,index)=>{
                return(
                    <div key={index} style={{width:"200px",height:"200px", border:"2px solid black"}}>
                        <h2>Fitness</h2>
                        <h4>{element.id}</h4>
                        <h3>{element.Movie}</h3>
                        <img src={element.poster} alt="Not Found" style={{width:"100px",height:"100px", border:"2px solid black"}}></img>
                    </div>
                )
              })}  */}
        </>
    )
}
export default Fitness