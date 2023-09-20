import React, { useContext } from 'react';
import { Store } from '../Store/StoreContextApi';
import './Home.css'; // Make sure these CSS files exist
import './Homemedia.css';

function Home() {
    const [contextdata] = useContext(Store);

    return (
        <>
            <div className='mainParent'>
                {contextdata.filter((item) => item.id > 34 && item.id <= 35).map((element, index) => {
                    return (
                        <div className='leftDiv' key={index}>
                            <img src={element.poster} alt="Not Found" className='imgLeftdiv' />
                        </div>
                    );
                })}

                <div>
                    {contextdata.filter((item) => item.id > 23 && item.id < 25).map((element, index) => {
                        return (
                            <div className='rightDiv1' key={index}>
                                <img src={element.poster} alt="Not Found" className='imgRightdiv1' />
                            </div>
                        );
                    })}

                    {contextdata.filter((item) => item.id > 74 && item.id < 76).map((element, index) => {
                        return (
                            <div className='rightDiv2' key={index}>
                                <img src={element.poster} alt="Not Found" className='imgRightdiv2' />
                            </div>
                        );
                    })}
                </div>
            </div>

            <span className='textLatest'>The Latest</span>
            <div className='parentLatest mediaParentLatest'>
                {contextdata.filter((item) => item.id % 7 === 0 && item.id >= 56 && item.id <= 70).map((element, index) => {
                    return (
                        <div className='divLatest mediadivLatest' key={index}>
                            <div className='Coloumnwise mediaColoumnwise'>
                                <img src={element.poster} alt="Not Found" className='imgDivlatest mediaimgDivlatest' />
                                <h3 className='imglatestheading mediaimglatestheading'>{element.Movie.slice(0, 100)}</h3>
                                <p className='imglatestdescription medialatestdescripition'>{element.Heading.slice(0, 100)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className='parentHollywood'>
                <div className='leftParentHollywood'>
                    <div className='textHollywood'>Top Stories</div>
                    <div className='leftHollywood'>
                        {contextdata.filter((item) => item.id % 9 === 0).map((element, index) => {
                            return (
                                <div className='divHollywood' key={index}>
                                    <img src={element.poster} alt="Not Found" className='imgHollywoodTop' />
                                    <div className='divcoloumnHollywood'>
                                        <div className='topHollywoodTitle'>{element.Movie}</div>
                                        <div className='topPostHollywood'>
                                            {element.Heading.slice(0, 100)}.
                                            <div style={{ color: "lightgray", lineHeight: "5vh" }}>
                                                Visited: 11 August 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='rightParentHollywood'>
                    <div className='textToppostHollywood'>Top Posts</div>
                    <div className='rightHollywood'>
                        {contextdata.filter((item) => item.id % 11 === 0).map((element, index) => {
                            return (
                                <div className='divHollywoodright' key={index}>
                                    <img src={element.poster} alt="Not Found" className='imgHollyTop' />
                                    <div className='divcoloumnHolly'>
                                        <div className='topHollyTitle'>{element.Movie}
                                            <h1 className='TopPostindexing'>{index + 1}</h1>
                                            <div style={{ color: "lightgray", lineHeight: "5vh" }}>
                                                Visited: 11 August 2023
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='AdvertismentHome'><img src="https://media4.giphy.com/media/tfeBZQCErlj7FantMq/giphy.gif?cid=ecf05e47v29ij31o7ab275ojvc0mlqnj79wrw2hb8otgfxql&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt='Not Found' /></div>
                </div>
            </div>
            <span className='textLatest'>Latest Stories</span>
            <div className='parentLatest HomeparentLatest'>
                {contextdata.filter((item) => item.id % 8 === 0 && item.id >= 12 && item.id <= 49).slice(0, 3).map((element, index) => {
                    return (
                        <div className='divLatest HomedivLatest' key={index}>
                            <div className='Coloumnwise HomeColoumnwise'>
                                <img src={element.poster} alt="Not Found" className='imgDivlatest HomeimgDivlatest' />
                                <h3 className='imglatestheading Homeimglatestheading'>{element.Movie}</h3>
                                <p className='imglatestdescription Homeimglatestdescription'>{element.Heading.slice(0, 120)}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Home;
