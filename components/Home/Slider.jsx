import Slidebtn from "../Buttons/Slidebtn";

export default async function Slider() {
  const url = 'https://myanime-dun.vercel.app/aniwatch/';
  const data = await fetch(url);
  let res = await data.json();
  const slider = await res.spotLightAnimes;

  return (
    <>
                  <div id="carouselExampleCaptions" className="carousel slide bg-black">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={slider[0].img} className="d-block w-100" alt={slider[0].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[0].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[0].quality}</div>
                  <div id="slide-format" >{slider[0].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[0].rank}</div>               
                  <div id="slide-title" ><h4>{slider[0].name}</h4></div>
                    <div id="slide-des" ><p>{slider[0].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                   <img src={slider[1].img} className="d-block w-100" alt={slider[1].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[1].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[1].quality}</div>
                  <div id="slide-format" >{slider[1].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[1].rank}</div>               
                  <div id="slide-title" ><h4>{slider[1].name}</h4></div>
                    <div id="slide-des" ><p>{slider[1].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[2].img} className="d-block w-100" alt={slider[2].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[2].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[2].quality}</div>
                  <div id="slide-format" >{slider[2].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[2].rank}</div>               
                  <div id="slide-title" ><h4>{slider[2].name}</h4></div>
                    <div id="slide-des" ><p>{slider[2].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[3].img} className="d-block w-100" alt={slider[3].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[3].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[3].quality}</div>
                  <div id="slide-format" >{slider[3].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[3].rank}</div>               
                  <div id="slide-title" ><h4>{slider[3].name}</h4></div>
                    <div id="slide-des" ><p>{slider[3].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[4].img} className="d-block w-100" alt={slider[4].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[4].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[4].quality}</div>
                  <div id="slide-format" >{slider[4].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[4].rank}</div>               
                  <div id="slide-title" ><h4>{slider[4].name}</h4></div>
                    <div id="slide-des" ><p>{slider[4].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[5].img} className="d-block w-100" alt={slider[5].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[5].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[5].quality}</div>
                  <div id="slide-format" >{slider[5].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[5].rank}</div>               
                  <div id="slide-title" ><h4>{slider[5].name}</h4></div>
                    <div id="slide-des" ><p>{slider[5].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[6].img} className="d-block w-100" alt={slider[6].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[6].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[6].quality}</div>
                  <div id="slide-format" >{slider[6].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[6].rank}</div>               
                  <div id="slide-title" ><h4>{slider[6].name}</h4></div>
                    <div id="slide-des" ><p>{slider[6].description}</p></div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                <img src={slider[7].img} className="d-block w-100" alt={slider[7].id} />
                  <div className="container" id="slide-data" > 
                  <div id="slide-release" >{slider[7].releasedDay}</div>  
                    <div id="spot-quality"> 
                    <div id="quality-container">
                  <div id='slide-quality'>{slider[7].quality}</div>
                  <div id="slide-format" >{slider[7].category}</div>
                  </div>
                  </div>   
                  <div id="spot-details"> 
                  <div id="slide-spotlight" >Spootlight {slider[7].rank}</div>               
                  <div id="slide-title" ><h4>{slider[7].name}</h4></div>
                    <div id="slide-des" ><p>{slider[7].description}</p></div>
                    </div>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
    </>
  )
}
