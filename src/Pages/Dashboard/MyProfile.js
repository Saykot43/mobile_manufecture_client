import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    return (
        <div>
            <h2 className='text-center text-3xl font-bold'>My Profile</h2>
            <div class="card w-96 bg-base-100 shadow-xl mx-auto mt-8">
                {
                    user.photoURL ? <figure><img src={user.photoURL} alt="Shoes" /></figure> : ""
                }
                <div class="card-body text-center">
                    <h2 className=' font-semibold text-2xl'>{user.displayName}</h2>
                    <p>{user.email}</p>

                </div>
            </div>
        </div>
    );
};

export default MyProfile;