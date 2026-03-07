import React from 'react';

const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9fafb]">
            <div className="flex gap-2">
                <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.3s]"></div>
                <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce [animation-delay:-0.15s]"></div>
                <div className="h-4 w-4 rounded-full bg-blue-600 animate-bounce"></div>
            </div>
            <p className="mt-6 text-slate-400 font-semibold tracking-widest text-[11px] uppercase">Fetching Data...</p>
        </div>
    );
};

export default Loading;
