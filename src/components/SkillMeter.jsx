// const SkillMeter = ({ skill, level }) => {
//     return (
//         <div className="mb-4 w-full sm:w-98">

//             <div className="flex justify-between mb-1">
//                 <span className="text-sm font-medium text-gray-700">
//                     {skill}
//                 </span>
//                 <span className="text-sm font-medium text-gray-500">
//                     {level}%
//                 </span>
//             </div>

//             <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
//                 <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${level}%` }}></div>
//             </div>

//         </div>
//     )
// }

// export default SkillMeter


const SkillMeter = ({ skill, level, icon }) => (
    <div className="flex items-center gap-3 w-48">
        <span className="text-2xl">{icon}</span>
        <div className="w-full">
            <div className="flex justify-between mb-1">
                <span className="font-semibold text-amber-700">{skill}</span>
                <span className="text-xs text-amber-400">{level}%</span>
            </div>
            <div className="w-full bg-amber-100 rounded-full h-2.5">
                <div
                    className="bg-gradient-to-r from-amber-400 to-amber-600 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    </div>
);

export default SkillMeter;