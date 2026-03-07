import React from 'react';
import { RotateCw, CheckCircle2 } from 'lucide-react';

const ScoreBoard = ({ score, total, onReset }) => {
    const percentage = Math.round((score / total) * 100);

    return (
        <div className="min-h-screen flex items-center justify-center p-6 bg-[#f9fafb]">
            <div className="bg-white border border-slate-200 p-12 rounded-3xl shadow-xl max-w-lg w-full text-center animate-in zoom-in-95 duration-500">
                <div className="inline-flex p-5 rounded-full bg-blue-50 mb-8 border border-blue-100">
                    <CheckCircle2 className="text-blue-600" size={48} />
                </div>

                <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                    Quiz Complete
                </h1>
                <p className="text-slate-500 mb-10 text-lg">Thank you for participating. Here are your final metrics.</p>

                <div className="flex gap-4 mb-10">
                    <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Accuracy</p>
                        <p className="text-3xl font-bold text-slate-900">{percentage}%</p>
                    </div>
                    <div className="flex-1 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                        <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Score</p>
                        <p className="text-3xl font-bold text-slate-900">{score}/{total}</p>
                    </div>
                </div>

                <button
                    onClick={onReset}
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all shadow-lg shadow-blue-200 active:scale-[0.98]"
                >
                    <RotateCw size={20} />
                    <span>Restart Assessment</span>
                </button>
            </div>
        </div>
    );
};

export default ScoreBoard;
