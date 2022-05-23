import React, { useState } from 'react';
import useTools from '../../Hooks/useTools';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useNavigate } from 'react-router-dom';
import { AiOutlineDeliveredProcedure } from 'react-icons/ai';
import { FaEdit } from 'react-icons/fa';

const AllTool = () => {
    const [tools, setTools] = useTools();
    // const [item, setItem] = useState(null);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleOrder = id => {
        navigate(`/order/${id}`);
    }

    return (

        <>
            <div class="overflow-x-auto">
                <table class="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map((tool, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{tool.name}</td>
                                <td>{tool.des.slice(0, 100)}...</td>
                                <td>{tool.available}</td>
                                <td>{tool.order}</td>
                                <td>{tool.price}</td>
                                <td>
                                    <div class="avatar">
                                        <div class="w-24 mask mask-squircle">
                                            <img src={tool.img} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user ? <button onClick={() => handleOrder(tool._id)} class="btn"><AiOutlineDeliveredProcedure className=' text-4xl' /></button> : <FaEdit className=' text-4xl' />}
                                </td>
                            </tr>)
                        }


                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Available Quantity</th>
                            <th>Minimum Order</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default AllTool;