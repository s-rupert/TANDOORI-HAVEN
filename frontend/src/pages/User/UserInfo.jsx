import React, { useContext, useState, useEffect } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { PageContext } from '../../components/PageContext';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Userlogout from './Userlogout';

const UserInfo = () => {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const { user, setUser } = useContext(PageContext);
    const [profile, setProfile] = useState(false);
    const [userDetails, setUserDetails] = useState(false)
    const [manageAC, setManageAC] = useState(false);
    const [changePassword, setChangePassword] = useState(false)
    const [shouldLogout, setShouldLogout] = useState(false);
    const [fullname, setFullname] = useState(user.fullname)
    const [address, setAddress] = useState(user.address)
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [passwordOld, setPasswordOld] = useState("")
    const [badResponse, setBadResponse] = useState("")

    const handleLogout = () => {
        setShouldLogout(true);
        const timer = setTimeout(() => {
            window.location.reload();
        }, 1000);
    };

    const profileUpdateHandler = async (e) => {
        e.preventDefault();
        if (!token) {
            return;
        }
        const newVal = {
            fullname: fullname,
            address: address,
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/profile/update`, newVal, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 200) {
                const data = response.data;
                setUser(data.user);
            }
        } catch (error) {
            console.error("Profile Update Failed:", error);
            setBadResponse(error.response.data);
        }
        setFullname(user.fullname)
        setAddress(user.address)
    };

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
                }
            })
            .catch((err) => {
                console.log(err);
                localStorage.removeItem("token");
            });
    }, [token]);

    return (
        <div>
            <p className="text-xl px-[10px] rounded-full text-white bg-black inline-flex" onClick={() => {
                setProfile(true)
                setUserDetails(true)
            }
            } >{user.fullname.slice(0, 3)}<span><ChevronDown className="mt-1" /></span></p>
            <div
                className={`fixed inset-0 flex items-start justify-end pt-20 pr-5 w-full h-full z-20 bg-gray-100/50 overflow-hidden ${profile ? "" : "hidden"}`}
            >
                <div className={`flex flex-col items-center justify-center bg-orange-200 p-5 rounded-xl text-center text-black shadow-2xl w-60 relative ${userDetails ? "" : 'hidden'}`}>
                    <X
                        className="absolute top-2 right-2 text-black cursor-pointer"
                        onClick={() => {
                            setProfile(false)
                            setUserDetails(false)

                        }}
                    />
                    <p className="text-7xl w-25 h-25 bg-white rounded-full pt-3">{user.fullname.slice(0, 1)}</p>
                    <button className=" absolute right-25 top-25 text-sm px-2 bg-yellow-700 rounded-lg text-white">Edit</button>
                    <p className="text-lg font-bold mt-5">{user.fullname}</p>
                    <p className="text-md">{user.email}</p>
                    <p className="text-md">{user.address}</p>
                    <button className="text-lg px-2 bg-yellow-700 rounded-lg text-white mt-2"
                        onClick={() => {
                            setManageAC(true)
                            setUserDetails(false)
                        }}
                    >Manage your Account</button>
                    <button className="text-lg px-2 bg-yellow-700 rounded-lg text-white mt-2" onClick={() => handleLogout()}>Logout</button>
                    {shouldLogout && <Userlogout />}
                </div>
                <div className={`flex flex-col items-center justify-center bg-orange-200 p-5 rounded-xl text-center text-black shadow-2xl w-60 relative ${manageAC ? "" : 'hidden'}`}>
                    <button className="absolute top-2 left-2 text-black cursor-pointer"
                        onClick={() => {
                            setManageAC(false)
                            setUserDetails(true)
                            setBadResponse("")
                        }}>← Back</button>
                    <p className="text-lg font-bold mt-1">Manage your Account</p>
                    <div className="mt-2">
                        <label className="block mb-1 font-medium">Change your Fullname</label>
                        <input
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            type="text"
                            placeholder={user.fullname}
                            className="w-full px-4 py-1 rounded-md text-black focus:outline-none focus:ring-1 border-1 rounded-md"
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block mb-1 font-medium">Change your address</label>
                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            placeholder={user.address}
                            className="w-full px-4 py-1 rounded-md text-black focus:outline-none focus:ring-1 border-1 rounded-md"
                        />
                    </div>
                    <p>{badResponse}</p>
                    <button className="text-lg px-2 bg-yellow-700 rounded-lg text-white mt-4"
                        onClick={() => {
                            setManageAC(false)
                            setChangePassword(true)
                            setBadResponse("")
                        }}
                    >Change your password</button>
                    <button className="text-lg px-2 bg-yellow-700 rounded-lg text-white mt-2" onClick={() => {
                        setManageAC(false)
                        setUserDetails(true)
                        setBadResponse("")
                        profileUpdateHandler(event)
                    }}>Save</button>
                </div>
                <div className={`flex flex-col items-center justify-center bg-orange-200 p-5 rounded-xl text-center text-black shadow-2xl w-60 relative ${changePassword ? "" : 'hidden'}`}>
                    <button className="absolute top-2 left-2 text-black cursor-pointer"
                        onClick={() => {
                            setChangePassword(false)
                            setManageAC(true)
                            setBadResponse("")
                        }}>← Back</button>
                    <p className="text-lg font-bold mt-1">Change your Password</p>
                    <div className="mt-2">
                        <label className="block mb-1 font-medium">New Password</label>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="text"
                            placeholder='Enter new Password'
                            className="w-full px-4 py-1 rounded-md text-black focus:outline-none focus:ring-1 border-1 rounded-md"
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            value={passwordConfirm}
                            onChange={(e) => setPasswordConfirm(e.target.value)}
                            type="text"
                            placeholder="Confirm new Password"
                            className="w-full px-4 py-1 rounded-md text-black focus:outline-none focus:ring-1 border-1 rounded-md"
                        />
                    </div>
                    <div className="mt-2">
                        <label className="block mb-1 font-medium">Old Password</label>
                        <input
                            value={passwordOld}
                            onChange={(e) => setPasswordOld(e.target.value)}
                            type="text"
                            placeholder="Enter old Password"
                            className="w-full px-4 py-1 rounded-md text-black focus:outline-none focus:ring-1 border-1 rounded-md"
                        />
                    </div>

                    <button className="text-lg px-2 bg-yellow-700 rounded-lg text-white mt-4" onClick={() => {
                        setChangePassword(false)
                        setManageAC(true)
                        setBadResponse("")
                    }} >Save</button>
                </div>
            </div>
        </div >
    );
};

export default UserInfo;