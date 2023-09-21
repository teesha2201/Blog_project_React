import React, { useContext } from 'react';
import { useParams ,NavLink} from 'react-router-dom';  
import './Bollywood.css';
import { Store } from '../Store/StoreContextApi';
import './Details.css'
 
function Details() {
    const [contextdata] = useContext(Store);
   
    const { id } = useParams();
    const dynamicImg = contextdata[id].Category;
    console.log(dynamicImg)

    const selectedItem = contextdata.find((item) => item.id === id);
    console.log(selectedItem.Movie)
    
   
    return (
        <>
        <div className='detailsDiv'>
            <div className='detailscoloumn'>
                <div> 
                    <h2><i class="fa-solid fa-thumbs-up"></i></h2>
                    <h2><i class="fa-solid fa-share-nodes"></i></h2>                    
                </div>
                <h1 className='topLineDetails'>This site is Best to Read Blog's</h1>
                <div className='headingDetails'>
                    <div className='EmojiRow'>
                        <img className='circle' src={contextdata[88].logogirl} alt="Not Found"/>
                        <div className='Detailsname'>Teesha Gupta <br></br>sep 12,2023  10min read</div>
                    </div>
                  
                    <div className="SocialLink">
                        <a href={contextdata[88].teeshalinkdln} rel='No reference' target='_blank'><img  className="circleFollow" src={contextdata[88].facebook} alt="Not Found"/></a>
                        <a href={contextdata[88].teeshalinkdln} rel='No reference' target='_blank'><img  className="circleFollow" src={contextdata[88].twitter} alt='Not Found'/></a>
                        <a href={contextdata[88].teeshalinkdln} rel='No reference' target='_blank'><img className='circleFollow'  src={contextdata[88].instagram} alt='Not Found'/></a>
                        <a href={contextdata[88].teeshalinkdln} rel='No reference' target='_blank'>
                            <img  className="circleFollow" src={contextdata[88].linkdln} alt="Not Found"/>
                        </a>
                    </div>
                
                </div>
                <img src={selectedItem.poster} alt='Not Found' className='imgDetails'/>
                <h3 className='DetailsTitle'>{selectedItem.Movie}</h3>
                <p className='DetailsInfo'>{selectedItem.Heading}</p> 
            </div>
        </div>

        <div className='TextMore'>More From The Siren </div>        

        <div className='parentLatestDesk bottomparentLatest'>
            {contextdata.filter((item )=>(item.Category === dynamicImg) && (item.id%5===1 || item.id%3 === 2 || item.id%3===0)).slice(0,3).map((element,index)=>{
                                return(

                                    <div className='divLatestDesk bottomdivLatest' key={index}>
                                      <div className=' ColoumnwiseDesk bottomColoumnwise'>
                                                <NavLink to={`/details/${element.id}`}>
                                                    <img src={element.poster} alt="Not Found" className='imgDivlatestDesk bottomimgDivlatest'></img>
                                                </NavLink>    
                                                    <h3 className='imglatestheadingDesk bottomimglatestheading'>{element.Movie}</h3>
                                                    <p className='imglatestdescriptionDesk bottomimglatestdescription'>{element.Heading.slice(0,150)}</p>
                                        </div>              
                                    </div>
                                )
            })} 
                                
        </div>


                
        
        </> 
    )
}
export  default Details

