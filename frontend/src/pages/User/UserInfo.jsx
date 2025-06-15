import React, { useContext, useState, useEffect } from 'react';
import { PageContext } from '../../components/PageContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { user, setUser } = useContext(PageContext);
    const [isLoading, setIsloading] = useState(true);

    useEffect(() => {
        if (!token) {
            return;
        }
        axios
            .get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.status === 200) {
                    setUser(response.data);
                    setIsloading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                // localStorage.removeItem("token");
            });
    }, [token]);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <p>{user.fullname.charAt(0)}</p>
        </div>
    );
};

export default UserInfo;