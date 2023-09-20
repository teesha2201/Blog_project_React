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
                <h1 className='topLineDetails'>This site is Best to Read Blog's</h1>
                <div className='headingDetails'>
                    <div className='EmojiRow'>
                        <img className='circle' src="https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:b8a8258d-7b0b-4042-9818-a758226f5b5c;revision=0?component_id=29d2c332-d12d-44e7-8f76-09de45b77c89&api_key=CometServer1&access_token=1695150445_urn%3Aaaid%3Asc%3AUS%3Ab8a8258d-7b0b-4042-9818-a758226f5b5c%3Bpublic_d65f75fd0983d579a59b3456e413fd5cf44dca90"></img>
                        <div className='Detailsname'>Ridh Gupta <br></br>sep 12,2023  10min read</div>
                    </div>
                  
                    <div className="SocialLink">
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztMLZ5RO6EhrIJrzmBK2Kh2tLmsroesf87g&usqp=CAU"></img>
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr6lMHdoGBTbg5rYGlo_5_fSyqEJpuFnIvoMR0eqy-mwxfErJUHdj_dPVs03x3U2r--w0&usqp=CAU" alt='Not Found' ></img>
                        <img className='circleFollow' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGs1LETqnEyuX9xvRmPjHK7ulEtLeXSpYLHQ&usqp=CAU" alt='Not Found'></img>
                        <img  className="circleFollow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zTyVz8gyeFBXNFNC_TJ2mdKZXMUiY6LoFg&usqp=CAU" alt="Not Found"></img>
                    </div>
                    <div>
                   
    
                    </div>
                </div>
                <img src={selectedItem.poster} alt='Not Found' className='imgDetails'></img>
                <h3 className='DetailsTitle'>{selectedItem.Movie}</h3>
                <p className='DetailsInfo'>{selectedItem.Heading}</p> 
            </div>
        </div>

        <div className='TextMore'>More From The Siren </div>        

        <div className='bottomparentLatest'>
            
                                {contextdata.filter((item )=>(item.Category === dynamicImg) && (item.id%5===1 || item.id%3 === 2 || item.id%3===0)).slice(0,3).map((element,index)=>{
                                return(

                                    <div className='bottomparentLatest' key={index}>
                                        
                                            <div className=' bottomparentLatest'>
                                                <NavLink to={`/details/${element.id}`}>
                                                    <img src={element.poster} alt="Not Found" className='bottomimgDivlatest'></img>
                                                </NavLink>    
                                                    <h3 className='bottomimglatestheading'>{element.Movie}</h3>
                                                    <p className='bottomimglatestdescription'>{element.Heading.slice(0,150)}</p>
                                            </div>
                                            
                                    </div>
                                )
                            })} 
                </div>


                
        
        </> 
    )
}
export  default Details

