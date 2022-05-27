
import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://young-anchorage-42001.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to made an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an Admin');
                }
            })
    }
    const handleUser = id => {
        window.alert('Opps!!!!!You can not delete admin....');

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <small className='font-bold'>Already an Admin</small>}</td>
            <td><button onClick={() => handleUser(user._id)} className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default AllUsers;