import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useSingleTool from '../../Hooks/useSingleTool';

const Order = () => {
    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [tool, setTool] = useSingleTool(id);


    const orderProduct = e => {
        e.preventDefault();
        const availableOld = parseInt(tool.available);
        const minimum = parseInt(tool.order);
        const newOrder = parseInt(e.target.neworder.value);


        if (availableOld > minimum && minimum <= newOrder) {
            const available = availableOld - newOrder;
            const updateAvailable = { available }
            const url = `http://localhost:5000/update/${id}`;
            console.log(url);
            fetch(url, {
                method: 'PUT',

                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    updateAvailable
                ),
            })
                .then(response => response.json())
                .then(data => {
                    e.target.reset();
                    // toast(' success')
                    console.log(data);

                });
        } else {
            alert('minumum order not correct');
        }

    }

    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={tool.img} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">{tool.name}</h2>
                        <p>{tool.des}</p>
                        <form>
                            <label class="input-group mb-2">
                                <span>Available</span>
                                <input type="text" name='available' value={tool.available} class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Minimum Order</span>
                                <input type="text" name='order' value={tool.order} class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Price per product</span>
                                <input type="text" name='price' value={tool.price} class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Total Price</span>
                                <input type="text" name='TotalPrice' class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Name</span>
                                <input type="text" name='name' value={user.displayName} class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Email</span>
                                <input type="email" name='email' value={user.email} class="input input-bordered" disabled />
                            </label>
                            <label class="input-group mb-2">
                                <span>Phone Number</span>
                                <input type="text" name='phone' class="input input-bordered" />
                            </label>
                            <button className='btn max-w-full' type="submit">
                                Order
                            </button>
                        </form>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={orderProduct}>
                            <input className='input w-full max-w-full mb-2' type='number' name='neworder' placeholder="Enter quantity number" />
                            <button className='btn' type="submit">
                                Order
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;