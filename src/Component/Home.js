import React, { useState } from 'react'
import  { useContext } from 'react'
import { Store } from '../Store/StoreContextApi'
import "./Home.css" 



function Home()
{
    const [contextdata] = useContext(Store)
    console.log(contextdata)
    
    return(
        <>
            <div className='mainParent'>
            {contextdata.filter((item)=>item.id>34 && item.id<=35 ).map((element ,index)=>{
              
              return(
                    <div className='leftDiv' key={index}>
                          <img src={element.poster} alt="Not Found" className='imgLeftdiv'></img>
                    </div>
                    )
                })}

            {  /* Right Parent div */}
              <div >
              {/*Right div1 */}
              {/* <div className='rightparent'> */}
              {contextdata.filter((item)=>item.id>23 && item.id<25 ).map((element ,index)=>{

            return(

                // <div key={index} className='rightparent'>
                    <div className='rightDiv1' key={index}>
                        <img src={element.poster} alt= "Not Found" className='imgRightdiv1' ></img>
                    </div> 
                // </div>

                )
                })}
                {/* </div> */}
            {/*Right div2 */}
            {contextdata.filter((item)=>item.id>74 && item.id<76 ).map((element ,index)=>{

            return(
                <div className='rightDiv2' key={index}>
                    <img src={element.poster} alt= "Not Found" className='imgRightdiv2' ></img>
                </div> 
                )
                })} 
                
                </div> 
            </div>

            {/* TExt Latest */}
            <span className='textLatest'>The Latest</span>
            
            {/* <div className='parentLatest'>
              
                {contextdata.filter((item )=>item.id%7===0 && item.id>=56 && item.id<=70).map((element,index)=>{
                return(

                    <div className='divLatest' key={index}>
                            <div className='imgLatest'>
                            <img src={element.poster}alt ="Not Found "  className='imgDivlatest'></img>
                            <h3 className='imglatestheading'>{element.Movie}</h3>
                            <p className='imglatestdescription'>{element.Heading.slice(0,110)}...</p>
                            </div>
                    </div>
                )
            })} 
            </div> */}

            
                <div className='parentLatest'>
                                {contextdata.filter((item )=>item.id%7===0 && item.id>=56 && item.id<=70).map((element,index)=>{
                                return(

                                    <div className='divLatest' key={index}>
                                        
                                            <div className='Coloumnwise'>
                                                    <img src={element.poster} alt="Not Found" className='imgDivlatest'></img>
                                                    <h3 className='imglatestheading'>{element.Movie}</h3>
                                                    <p className='imglatestdescription'>{element.Heading.slice(0,150)}</p>
                                            </div>
                                            
                                    </div>
                                )
                            })} 
                </div>
            


            {/* TopStories of Home page */}

            <span className='textTopstories'>Top Stories </span>

            <div className='topStories'>
            {contextdata.filter((item)=>(item.id)%9===0).map((element,index)=>
            {
               
                return(
                    
                    <div  className='divtopStories' key={index}>
                        <img src={element.poster} alt="Not Found" className='imgHomeTopStories'></img>
                        <div className='divcoloumn'>
                            <h4 className='topStoriesTitle'>{element.Movie}</h4>
                            <span className='topStoriesdetails'>{element.Heading.slice(0,130)}...
                                <div style={{color:"lightgray",lineHeight:"5vh" ,fontSize:"14px"}}>Visited:11 August 2023</div>
                            </span>
                            
                           
                        </div>
                    </div>
                )
            }
            )}    

                        
                     
               
                  
            </div>

            {/* Top Post of Home page */}

            <span className='textTopPost'>Top Posts</span>

            <div className='topPost'>
               
                
            {contextdata.filter((item)=>(item.id)%17===0).map((element,index)=>
                {
                    return(
                        <div className='divtopPost' key={index}>
                          <img src={element.poster} alt="Not Found" className='imgHomeTopPost'></img>
                          <div className='topPostTitle'>{element.Movie}
                            <div style={{color:"lightgray",lineHeight:"5vh"}}>Visited:11 August 2023</div>
                            <h1 className='TopPostIndexing'>{index+1}</h1>
                          </div>
                          
                            
                        </div>
                    )
                }
            )} 
            </div>

            <div className='Advertisement'>Advertisement</div>

            













        </>
    )    
}
export default Home