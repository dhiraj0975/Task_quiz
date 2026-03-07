import React from 'react';
import { Check, X } from 'lucide-react';

const Option = ({ option, idx, isAnswered, isSelected, isCorrect, onClick }) => {
    let btnClasses = "border-slate-200 hover:border-blue-600 hover:bg-slate-50 text-slate-700";

    if (isAnswered) {
        if (isCorrect) btnClasses = "bg-green-50 border-green-500 text-green-700 shadow-sm shadow-green-100";
        else if (isSelected) btnClasses = "bg-red-50 border-red-500 text-red-700 shadow-sm shadow-red-100";
        else btnClasses = "bg-white border-slate-100 text-slate-300 opacity-60";
    }

    return (
        <button
            onClick={onClick}
            disabled={isAnswered}
            className={`group relative w-full p-5 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between ${btnClasses} ${!isAnswered && 'active:translate-y-[1px]'}`}
        >
            <div className="flex items-center gap-5">
                <span className={`flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs border-2 transition-colors ${isSelected ? 'bg-blue-600 border-transparent text-white' : 'border-slate-200 group-hover:border-blue-200 group-hover:text-blue-600'}`}>
                    {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-lg font-medium">{option}</span>
            </div>

            {isAnswered && isCorrect && <Check className="text-green-600" size={20} />}
            {isAnswered && isSelected && !isCorrect && <X className="text-red-600" size={20} />}
        </button>
    );
};

export default Option;
