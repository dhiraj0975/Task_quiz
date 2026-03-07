import React from 'react';

const ProgressSidebar = ({ questions, currentIndex }) => {
    return (
        <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hidden lg:block">
            <h3 className="text-slate-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border-b border-slate-100 pb-4">
                Assessment Status
            </h3>
            <div className="grid grid-cols-4 gap-3">
                {questions.map((_, i) => (
                    <div
                        key={i}
                        className={`w-full aspect-square rounded-lg flex items-center justify-center font-bold text-xs border transition-all duration-300 ${currentIndex === i ? 'bg-blue-600 border-transparent text-white ring-4 ring-blue-50' :
                                i < currentIndex ? 'bg-slate-50 border-slate-200 text-slate-400' : 'bg-white border-slate-100 text-slate-300'
                            }`}
                    >
                        {i + 1}
                    </div>
                ))}
            </div>
            <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium">System ready for evaluation.</p>
            </div>
        </div>
    );
};

export default ProgressSidebar;
