"use client"

import "./global.css";

export default function GlobalError(){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <button onClick={()=>{
                window.location.reload();
            }}
                className="bg-blue-500 hover:bg-blue-700 text-white rounded p-1 leading-none font-semibold"
            >
                Refresh
            </button>
        </div>
    )
}