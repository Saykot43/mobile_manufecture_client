import { faDisplay, faHeart, faUsersBetweenLines } from '@fortawesome/free-solid-svg-icons';
import { BiWorld } from 'react-icons/bi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummery = () => {
    return (
        <div className='px-12 my-12'>
            <div className='text-center'>
                <h2 className='text-error font-bold text-4xl uppercase mt-8'>Business Summery</h2>
                <p className='text-xl my-6'>To our clients, our company is name of expectation</p>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg w-full">
                <div className="stat text-center">
                    <div className="stat-figure">
                        <BiWorld className=' text-5xl text-slate-900' />
                    </div>
                    <div className="stat-value text-secondary">72</div>
                    <div className="text-xl">Countries</div>
                </div>
                <div className="stat text-center">
                    <div className="stat-figure text-primary">
                        <FontAwesomeIcon className='text-black' icon={faDisplay} size="3x" />
                    </div>
                    <div className="stat-value text-black">1000+</div>
                    <div className="text-xl">Complete Projects</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-black">
                        <FontAwesomeIcon icon={faUsersBetweenLines} size="3x" />
                    </div>
                    <div className="stat-value text-black">500+</div>
                    <div className="text-xl">Happy Clients</div>
                </div>

                <div className="stat text-center">
                    <div className="stat-figure text-secondary">
                        <FontAwesomeIcon className=' text-red-700' icon={faHeart} size="3x" />
                    </div>
                    <div className="stat-value text-secondary">432+</div>
                    <div className="text-xl">Feedbacks</div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;