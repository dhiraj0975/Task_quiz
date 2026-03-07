import React from 'react';
import { BookOpen, Award } from 'lucide-react';
import Option from './Option';

const MCQCard = ({ question, currentIndex, total, score, isAnswered, selectedOption, onOptionClick }) => {
    const options = [question.option1, question.option2, question.option3, question.option4];
    const progress = ((currentIndex + 1) / total) * 100;

    return (
        <div className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
            <div className="h-1 bg-slate-100 w-full">
                <div
                    className="h-full bg-blue-600 transition-all duration-500 ease-in-out"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>

            <div className="p-8 lg:p-12">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-2">
                        <span className="bg-slate-100 text-slate-600 px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border border-slate-200">
                            Step {currentIndex + 1}
                        </span>
                        <span className="text-slate-400 text-sm font-medium">
                            /{total} Questions
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Award className="text-blue-600" size={16} />
                        <span className="text-sm font-bold text-slate-900">Score: {score}</span>
                    </div>
                </div>

                <h2 className="text-2xl lg:text-3xl font-semibold mb-10 text-slate-900 leading-tight">
                    {question.text}
                </h2>

                <div className="space-y-3">
                    {options.map((option, idx) => {
                        const optNum = idx + 1;
                        return (
                            <Option
                                key={idx}
                                option={option}
                                idx={idx}
                                isAnswered={isAnswered}
                                isSelected={selectedOption === optNum}
                                isCorrect={optNum === question.correctOption}
                                onClick={() => onOptionClick(optNum)}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MCQCard;
