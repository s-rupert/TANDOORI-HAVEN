import React, { useContext, useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { PageContext } from "../components/PageContext";
import axios from "axios";

function AddtoCart(props) {
    const [version, setVersion] = useState("false")
    const [itemsDet, setItemsDet] = useState({
        name: "Tandoori Tikka",
        price: "15.99",
        image: "",
        id: ""
    })

    const levelHandler = (key) => {
        const buttons = [
            { id: "N", key: 1 },
            { id: "M", key: 2 },
            { id: "S", key: 3 },
        ];

        buttons.forEach(({ id, key: btnKey }) => {
            const el = document.getElementById(id);
            const isActive = key === btnKey;

            el.style.opacity = isActive ? "1" : "0.5";
            el.style.border = isActive ? "2px solid black" : "none";
        });
    };

    useEffect(()=>{
        if(!props.itemIndex){
            props.setToCart(false)
            return;
        }
        axios.get(`${import.meta.env.VITE_BASE_URL}/orders`, props.itemIndex)
        
    })

    return (
        <div className={`fixed inset-0 flex items-center justify-center w-full h-full z-20 bg-gray-100/50 overflow-hidden ${props.toCart ? '' : 'hidden'}`}>
            <div className="flex flex-col items-center justify-center gap-1 py-2 px-5 bg-sky-200 rounded-xl shadow-2xl w-75 relative">
                <X
                    className="absolute top-2 right-2 text-black cursor-pointer"
                    onClick={() => {
                        props.setItemIndex("")
                        props.setToCart(false)
                    }}
                />
                <p>{props.itemIndex} - {itemsDet.name}</p>
                <img className="h-30 w-full rounded-lg" src={itemsDet.image} alt="" />
                <p className="font-bold">Price: ${itemsDet.price}</p>
                <div className='w-full'>
                    <p>Choose the Quantity</p>
                    <input
                        type="number"
                        min="1"
                        step="1"
                        defaultValue="1"
                        className="w-full p-1 mt-1 rounded-lg border-1 focus:outline-none focus:ring-1 text-center"
                        placeholder="1"
                    />
                    <div>
                        <p className="mt-1">Choose spicy level</p>
                        <div className="flex gap-2 mt-1">
                            <p id='N' className="bg-green-500 px-2 rounded-lg border-[2px]" onClick={() => { levelHandler(1) }}>Normal</p>
                            <p id='M' className=" opacity-50 px-2 bg-yellow-600 rounded-lg" onClick={() => { levelHandler(2) }}>Mild</p>
                            <p id='S' className=" opacity-50 px-2 bg-red-700 rounded-lg" onClick={() => { levelHandler(3) }}>Spicy</p>
                        </div>
                    </div>
                    <p className="mt-1">Additional Note</p>
                    <textarea name="note"
                        className="w-full p-2 rounded-lg border-1 focus:outline-none focus:ring-1 resize-none"
                        placeholder="Any special instructions?"
                        rows="3"></textarea>
                </div>
                <button className="bg-yellow-700 px-2 py-1 rounded-lg text-white">Add to Cart</button>
            </div>
        </div>
    )
}

export default AddtoCart;