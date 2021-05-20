import React from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/user/123">Amin</Link>
                </li>
                <li>
                    <Link to="/user/456">King</Link>
                </li>
                <li>
                    <Link to="/user/789">Felix</Link>
                </li>
            </ul>
        </div>
    );
}

export default Users;
