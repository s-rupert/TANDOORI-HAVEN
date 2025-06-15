import React, {useContext, useState} from 'react';
import {X} from 'lucide-react';
import { PageContext } from "../components/PageContext";

function AddtoCart() {
    const {toCart, setToCart, setIdNum, idNum} = useContext(PageContext)
    const [version, setVersion] = useState("false")
    return (
        <div className={`fixed inset-0 flex items-center justify-center w-full h-full z-20 bg-gray-100/50 overflow-hidden ${toCart?'':'hidden'}`}>
            <div className="flex flex-col items-center justify-center gap-1 py-2 px-5 bg-sky-200 rounded-xl shadow-2xl w-75 relative">
                <X
                    className="absolute top-2 right-2 text-black cursor-pointer" 
                    onClick={()=>{
                        setIdNum("")
                        setToCart(false)
                    }}
                    />
                <p>#M12 - Tandoori Chicken Tikka</p>
                <img className="h-30 w-full rounded-lg" src="/mealimg/tandoori_chicken.jpg" alt="" />
                <p className="font-bold">Price: $15.99</p>
                <div className='w-full'>
                    <p>Choose the Quantity</p>
                    <input type="number"
                        className="w-full p-1 mt-1 rounded-lg border-1 focus:outline-none focus:ring-1  text-center"
                        placeholder="1" />
                    <div>
                        <p className="mt-1">Choose spicy level</p>
                        <div className="flex gap-2 mt-1">
                            <p className="px-2 bg-green-500 rounded-lg border-2">Normal</p>
                            <p className=" opacity-50 px-2 bg-yellow-600 rounded-lg">Mild</p>
                            <p className=" opacity-50 px-2 bg-red-700 rounded-lg">Spicy</p>
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