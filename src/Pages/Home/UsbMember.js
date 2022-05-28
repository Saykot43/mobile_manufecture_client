import React from 'react';
import member from "../../assets/member.mp4"


const UsbMember = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <video className='rounded-lg' controls muted autoPlay src={member}></video>
                <div>
                    <h1 class="text-5xl font-bold">Mobile Phone Parts</h1>
                    <p class="py-6">Learn about all Mobile Phone Parts and Components in a Mobile  Cell Phone PCB and their Function. Parts and Components in any Mobile Phone (Feature Phone or Android Smartphone) consist of several small, medium and large parts. They are more or less the same in most Mobile Phone Brands including – Samsung, Nokia, Acer, Alcatel, Apple, Geonee, Asus, BenQ, Siemens, Bird, Blackberry, Blu, Celkon, Dell, Gigabyte, Haier, HT, Huawei, Micromax, LG, Motorola, iMobile, i-Mate, Panasonic, Philips, Spice, Sony, Sony Ericsson, Toshiba, ZTE, Xiaomi, Oppo, Vivo Etc.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default UsbMember;