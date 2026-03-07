import React from 'react';

const NoQuestions = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#020617] p-6 text-center font-['Outfit']">
            <div className="bg-slate-900/60 backdrop-blur-2xl p-8 rounded-3xl border border-red-500/20 max-w-sm">
                <h2 className="text-xl font-bold text-white mb-2">No Questions Found</h2>
                <p className="text-slate-400 mb-6 font-light">Backend check karein ya seed script chalaein.</p>
            </div>
        </div>
    );
};

export default NoQuestions;
