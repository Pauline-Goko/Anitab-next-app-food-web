import { FaFacebook, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa';

const Footer=()=>{

    return(
        <div>
            <div  className="bg-orange-200 pr-20 pl-20 pt-10 pb-16 mb-0"> 
                <div className="flex flex-row gap-60 mb-1 text-red-500 ml-32 text-4xl text-bold">
                    <h1>Fooodish</h1>
                    <h1>Menu</h1>
                    <h1>Information</h1>
                    <h1>Contact</h1>
                    <FaPinterest/> 
                    <FaFacebook/> 
                    <FaInstagram/> 
                    <FaTwitter/>
                </div>
                <div className="flex flex-row gap-60">
                    <div>
                        <h5>Continue Foodish 2023 all rights reserved</h5>
                        <h1>Follow Us On</h1>
                    
                    </div>
                    <div>
                        <ul>
                            <li>Home</li>
                            <li>Offer</li>
                            <li>Service</li>
                            <li>About Us</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Menu</li>
                            <li>Quality</li>
                            <li>Make a Choice</li>
                            <li>Salad With Vegetable</li>
                            <li>Fast Delivery</li>
                            <li>Subscribe</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>+2551234567</li>
                            <li>Explore</li>
                            <li>Info@Foodish Com</li>
                            <li>870,Karen Nairobi</li>
                        </ul>
                    </div>
                </div>
            </div>






        </div>




    )};
export default Footer