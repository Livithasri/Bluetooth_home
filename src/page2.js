import React from "react";
import './page2.css';
import img from './images.jpg';
function Page2() {
  return (
    <React.Fragment>
    <div className="header">
      <h1>Home Page</h1>
    </div>
    <div class="sidebar">
  <a href="#buy"><i class="fa fa-fw fa-home"></i> Buy</a>
  <a href="#review"><i class="fa fa-fw fa-envelope"></i> Review</a>
  <a href="#services"><i class="fa fa-fw fa-wrench"></i> Services</a>
  <a href="#clients"><i class="fa fa-fw fa-user"></i> Clients</a>
  <a href="#return"><i class="fa fa-fw fa-envelope"></i> Return</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a>
  
</div>

<div class="main">
  <h2>Sidebar with Icons</h2>
  <p>Looking to buy speakers online? Get grooving with BOAT Stone wireless speakers wherever you choose to sail. The best speakers to get your hands on! </p>
  <p>Bring music to life and take your favourite music along fearlessly with portable speakers that are rugged and IPX rated to match your stride. Our speakers are ergonomic yet durable to suit every environment and every vibe..</p>
  <p>Portable speakers: Carry your music, wherever you go! Powered by IPX for sweat & water resistance. BOAT portable speakers match your stride, whether on a trek, a beach, or your home! Get the best speakers in every budget and size..</p>
  <p>BOAT bluetooth speakers come with the adaptability of switching to indoor and outdoor modes to suit every party or gathering.</p>
<p>The long-lasting battery life of our portable speakers makes them the best Bluetooth speakers when you’re out enjoying nature. Easy access controls let you choose your music seamlessly at all times.</p>
<p>The latest bluetooth technology in our speakers offers optimum wireless connectivity along with beautiful sound to die for. Hands-free communication and integrated smart controls make Stone the best speakers one can get.</p>
</div>
</React.Fragment>
  
  );
}
function Page1(props)
{
    return(
        <React.Fragment>
<div className="left">
    <h1>TYPE:{props.type}</h1>
    <h1>NAME:{props.name}</h1>
    <h1>ABOUT tHIS ITEM</h1>
    <ul>
        <li>About this item
Frequency Response 20Hz-20KHz, Travel and party booster
Its full range drivers offer 14W signature sound for blissful auditory time. </li><li>Experience optimum wireless connectivity with latest Bluetooth v5.0</li>
<li>Stone 1000 comes equipped with powerful 3000mAh battery capacity that supports a play time of up to 8 hours</li>
<li>It is IPX5 rated to ensure resistance against dust and water scares. Playback Time - 10 hours, Charging Time - 4 hours, Standby Time - 12 month
Stone 1000 comes with integrated controls for you to easily change volume, tracks, play/pause music.
1 year warranty from the date of purchase</li>
    </ul>
    </div>
    </React.Fragment>
    );
}
function Right(props){
    return(
        <React.Fragment>
            <div className="right">
    {/* <h1>right</h1>
    <p>Name:{props.name}</p>
    <p>Type:{props.type}</p> */}
    <div>
    <img className="img1" src={img}/>
    </div>
    
    </div>
  </React.Fragment>
    );
}
  
const product_info={
    name:"BOATSTONE",
    type:"BLUETOOTH",
    moreInfo:{
        avatarUrl:"images.jpg",
        alt:"prdt image"
    },
    
    
};

function Page()
{
    return(
        <div>
            <Page2/>
            <Page1 name={product_info.name} type={product_info.type} />
            <Right />
        </div>
    )
}
export default Page;