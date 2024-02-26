import React from 'react';
import HeroSectionGraphic from './assets/HeroSectionGraphic.png';
import './Home.css';
import SearchBar from './SearchBar';
import TrendingPost from './TrendingPost';
import Graphic1 from './assets/Graphic1.png';
import Graphic2 from './assets/Graphic2.png';
import {Button} from "@nextui-org/react";

const Home = () => {
  return (
    <>
{/* hero section */}
<section className="m-10 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 md:pr-8">
          <h1 className="title">
            <span style={{ fontFamily: 'Lemon' }}>Connect</span> , <span style={{ fontFamily: 'Satisfy', color: '#FF0000' }}>Collaborate</span> and make STUDDYing more fun!</h1>
          {/* <p className="paragraph">Connect, Collaborate and Chronicle your study <br /> 
          adventures with the ultimate platform where <br /> finding study buddies meets sharing insightful <br /> study blogs!</p> */}
            <div className='pt-5'>
            <button
                type="button"
                className="rounded-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Start Reading
              </button>
            </div>  
        </div>
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <img src={HeroSectionGraphic} alt="Hero Section Graphic" />
        </div>
</section>
{/* end of hero section */}

<SearchBar />
<h2 className="pt-10 mb-5 ml-10 secondtitle">Trending Post</h2>
<TrendingPost />

<section className='pt-40'>
        <div>
          <h1 className='text-center space-x-5 thirdtitle'>
            <span style={{ fontFamily: 'Lemon' }}>Connect</span> 
            <span>and</span> 
            <span style={{ fontFamily: 'Satisfy', color: '#FF0000' }}>Collaborate</span>
          </h1>
        </div>

        <div className="flex justify-between">
            <div className="w-1/2">
              <img src={Graphic1} alt="Graphic1" className="w-full" />
            </div>
            <div className="w-1/2">
              <img src={Graphic2} alt="Graphic2" className="w-full" />
            </div>
        </div>
    <p className='paragraph text-center'>
        Together, we make studying smarter, more enjoyable <br />
    and undoubtedly more successful. Join forces <br />
    with a study buddy because knowledge is better < br />
    when it’s shared
    </p>
    <div className="pt-5 flex justify-center">
  <Button className='button text-white rounded-full' color="success">
    Get Started
  </Button>
</div>



</section>
    </>
  );
};

export default Home;
