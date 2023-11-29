import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { faChevronRight, faLeaf, faRocket, faShoppingCart, faTruck } from '@fortawesome/fontawesome-svg-core';
import {FaTruck, FaLeaf, FaRocketn, FaRocket } from 'react-icons/fa'




const foodItems = [
  {
    name: 'Chicken Burger',
    price: '$3.50',
    image: "chickenburger",
  },
  {
    name: 'Chicken Pizza',
    price: '$4.20',
    image: "chickenpizza",
  },
  {
    name: 'Chicken Fry',
    price: '$5.00',
    image: "crispchicken",
  },
  {
    name: 'Grill Sandwich',
    price: '$4.80',
    image: "grillsandwich",
  },
  {
    name: 'Toco Traifi',
    price: '$3.63',
    image: "tacotarifi",
  },
  {
    name: "Noddle's Romen",
    price: '$6.50',
    image: "noodles",
  },
];

const HomePage = () => {
  return (
    <div className='bg-orange-4000'>
      <div className=" flex flex-row justify-between gap-60 mt-9" >
        <div className='ml-35'>
          <h1 className="text-red-500 text-bold text-7xl ml-80 mb-10 ml-20">All Fast Food is <br />Available at Foodle</h1>
          <div className="flex flex-row ">
            <img src="/images/idris.jpeg" className="w-48 h-48 rounded-full h-9 w-9 ml-20" alt="blackman" />
            <p>We Are Just A click Away When You <br /> Crave For Delicious Fast Food</p>
          </div>
          <button className="flex flex-row bg-red-500 mt-20 pr-2 pl-2 pt-2 pb-2 text-white-500 ml-20 rounded-full">
            <FontAwesomeIcon icon={faShoppingCart} className='w-10 h-10' /> &nbsp;&nbsp;&nbsp;&nbsp;
            Buy Now
          </button>
        </div>
        <img src='/images/sandwich2.png' className='w-96 h-auto mr-12'/>
      </div>
      

         <div className="flex flex-row justify-between bg-white mt-4 mb-4 pb-12 pt-10 ml-20 rounded-3xl">

                <div className="flex flex-row pl-15 ml-8">
                    <div>
                    <FontAwesomeIcon icon={ FaRocket} className="w-10 h-10 bg-yellow-500 pt-4 pr-6 mr-9" /> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Fast Delivery</h2>
                    <p>The Food Will Be Delivered to <br/>Your Home Within 1-2 Hours of<br/> Your Ordering</p>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                    <FontAwesomeIcon icon={FaLeaf} className="w-10 h-10 bg-yellow-500 pt-4 pr-6 mr-9"/> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Fresh Food</h2>
                    <p>Your Food Will Be Delivered <br/> 100% Fresh To Your Home We<br/>  Do Not Deliver Stale Food</p>
                    </div>
                </div>
                <div className="flex flex-row"> 
                   <div>
                    <FontAwesomeIcon icon={FaTruck} className="w-10 h-10 bg-yellow-500 pt-4 mr-9 pr-5 mr-9"/> &nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                    <h2>Free Delivery</h2>
                    <p>Your Food Delivery is<br/>  Absolutely Free No Cost <br/> Just Order And Enjoy</p>
                    </div>
                </div>
        </div>

            <div>
                <div className="flex flex-row gap-80 mt-16 ml-32 mb-4">
                <h1 className='text-7xl'>Best <span className='text-red-500'>Delivery</span><br/> Categories</h1>
                <p className='ml-40'>Here Are Some Of Our Best Distributed <br/> Categories.If You Want You Can Order <br/> From Here.</p>
                </div>



                <div className="flex flex-row gap-80 ml-24 mt-16 mb-16">
                    <div>
                        <img src="/images/burger.png" alt="firstburger" className="mb-3"></img>
                        <h2>Chicken Burger</h2>
                        <p className='flex flex-row'>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4 text-red-500' />
                        </p>
                    </div>
                    <div>
                        <img src="/images/pizzanime2.png" alt="firstburger" className="mb-8"></img>
                        <h2>Chicken Pizza</h2>
                        <p className='flex flex-row'>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4 text-red-500' />

                        </p>
                    </div>
                    <div>
                        <img src="/images/friesanime.png" alt="firstburger" className="mb-8"></img>
                        <h2>Chicken Burger</h2>
                        <p className='flex flex-row'>Order Now &nbsp;&nbsp;&nbsp;
                        <FontAwesomeIcon icon={faChevronRight} className='w-4 h-4 text-red-500'/>

                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-row ml-40 mb-16">
                <p>
                    <h1 className='text-7xl'>Our <span className='text-red-500'>Regular</span> Menu</h1>
                    There Are Our Regular Menus.You Can <br/> Order Anything You Like
                </p>
                <button className='bg-red-500 pr-4 pl-4 pt-2 pb-2 text-white-500 ml-80 round-5'>See All</button>
            </div>
            
        <div className="flex flex-row gap-80 flex flex-wrap ml-40 mr-15">


         {foodItems.map((item, index) => (
        <div key={index}>
          <img src={`/images/${item.image}.jpg`} alt={item.name} width={200} height={150}  className='rounded-full border-8 border-red-500'/>
          <h1>{item.name}</h1>
          <h2>{item.price} <button className="buynow">Buy Now</button></h2>
        </div>
      ))}
      </div>
            
             <div className="flex flex-row gap-10 mt-16 ml-80">
                <div>
                <img src="/images/burgerfries.jpeg" className="w-400 h-120"></img>
                <h1 className="">25% <br/> Discount</h1>
                </div>
                <div>
                    <div>
                    <img src="/images/Ice-cream-fruit.jpg" className="offe"/>
                    <h2 className="save3">$3.80</h2>
                    <h1 className="save20">Save <br/> 20%</h1>
                    </div>
                    <div>
                        <img src="/images/tacotarifi.jpg" className="tor"></img>
                        <h1 className="torrr">Tortilla Warp Tocos</h1>
                        <h2>Get Your Order Fresh</h2>
                        <h1 className="fifteen">15% <br/> off</h1>
                    </div>
                </div>
       </div> 



      
    
          
    </div>
  );
};

export default HomePage;