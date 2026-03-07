import React from 'react';
import { ArrowRight } from 'lucide-react';

const ExplanationBox = ({ isCorrect, explanation, onNext, isLastQuestion }) => {
    return (
        <div className={`p-8 rounded-2xl border-2 transition-all duration-300 animate-in fade-in slide-in-from-top-4 ${isCorrect ? 'bg-green-50/50 border-green-100' : 'bg-red-50/50 border-red-100'}`}>
            <div className="flex flex-col gap-4">
                <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded-md ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        Rationale
                    </span>
                    <h4 className="mt-3 font-bold text-xl text-slate-900">
                        {isCorrect ? "Correct Identification" : "Learning Moment"}
                    </h4>
                </div>

                <p className="text-slate-600 leading-relaxed text-[15px] italic mb-4">
                    {explanation}
                </p>

                <button
                    onClick={onNext}
                    className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98]"
                >
                    <span>{isLastQuestion ? "Complete Quiz" : "Continue to Next"}</span>
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>
    );
};

export default ExplanationBox;
