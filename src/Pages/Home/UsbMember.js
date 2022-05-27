import React from 'react';
import member from "../../assets/member.mp4"

const UsbMember = () => {
    return (
        <div className='px-12 my-12'>
            <h2 className='text-3xl text-orange-300 font-sans font-bold fuppercase text-center my-12'>Company USB veryfication</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div>
                    <video className='rounded-lg' controls muted autoPlay src={member}></video>
                </div>
                <div className='flex flex-col items-center justify-center shadow-lg rounded-lg px-5'>
                    <h2 className='text-2xl font-bold'>Member of USB-IF</h2>
                    <p className='text-xl my-6 text-center'>An ISO certified company | 300 well-trained employees | 10000sqm factory Avg Response time: <span className='text-success font-bold'>24/7</span></p>
                    <p>These lists and search functionalities are sponsored by USB Implementers Forum, Inc., (USB-IF). Lists are maintained by USB-IF members themselves and USB-IF does not take responsibility for contents. This product search is limited to only those products that are certified to bear the USB-IF logo. Although the listing is maintained by each member company individually, it is limited to those products that have passed the USB-IF Compliance Program. If you are interested in a specific product you do not find in the listing, you should contact the manufacturer directly to determine when the product will be certified to bear the USB-IF logo.</p>
                    <button className='btn btn-primary font-bold my-6'>Inquire Now</button>
                </div>
            </div>
        </div>
    );
};

export default UsbMember;