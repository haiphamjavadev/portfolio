export const getColorClasses = (color) => {
    const colors = {
        blue: { gradient: 'from-blue-600 to-cyan-500', bg: 'bg-blue-100', text: 'text-blue-800', hover: 'hover:from-blue-700 hover:to-cyan-600' },
        purple: { gradient: 'from-purple-600 to-pink-500', bg: 'bg-purple-100', text: 'text-purple-800', hover: 'hover:from-purple-700 hover:to-pink-600' },
        green: { gradient: 'from-green-600 to-emerald-500', bg: 'bg-green-100', text: 'text-green-800', hover: 'hover:from-green-700 hover:to-emerald-600' },
        orange: { gradient: 'from-orange-600 to-amber-500', bg: 'bg-orange-100', text: 'text-orange-800', hover: 'hover:from-orange-700 hover:to-amber-600' },
        red: { gradient: 'from-red-600 to-rose-500', bg: 'bg-red-100', text: 'text-red-800', hover: 'hover:from-red-700 hover:to-rose-600' },
        indigo: { gradient: 'from-indigo-600 to-blue-500', bg: 'bg-indigo-100', text: 'text-indigo-800', hover: 'hover:from-indigo-700 hover:to-blue-600' },
        pink: { gradient: 'from-pink-600 to-fuchsia-500', bg: 'bg-pink-100', text: 'text-pink-800', hover: 'hover:from-pink-700 hover:to-fuchsia-600' },
        yellow: { gradient: 'from-yellow-400 to-amber-500', bg: 'bg-yellow-100', text: 'text-yellow-800', hover: 'hover:from-yellow-500 hover:to-amber-600' },
        teal: { gradient: 'from-teal-500 to-cyan-400', bg: 'bg-teal-100', text: 'text-teal-800', hover: 'hover:from-teal-600 hover:to-cyan-500' },
        cyan: { gradient: 'from-cyan-500 to-blue-400', bg: 'bg-cyan-100', text: 'text-cyan-800', hover: 'hover:from-cyan-600 hover:to-blue-500' },
        lime: { gradient: 'from-lime-500 to-green-400', bg: 'bg-lime-100', text: 'text-lime-800', hover: 'hover:from-lime-600 hover:to-green-500' },
        amber: { gradient: 'from-amber-500 to-yellow-400', bg: 'bg-amber-100', text: 'text-amber-800', hover: 'hover:from-amber-600 hover:to-yellow-500' },
        emerald: { gradient: 'from-emerald-500 to-green-400', bg: 'bg-emerald-100', text: 'text-emerald-800', hover: 'hover:from-emerald-600 hover:to-green-500' },
        fuchsia: { gradient: 'from-fuchsia-500 to-pink-400', bg: 'bg-fuchsia-100', text: 'text-fuchsia-800', hover: 'hover:from-fuchsia-600 hover:to-pink-500' },
        rose: { gradient: 'from-rose-500 to-red-400', bg: 'bg-rose-100', text: 'text-rose-800', hover: 'hover:from-rose-600 hover:to-red-500' },
        violet: { gradient: 'from-violet-500 to-purple-400', bg: 'bg-violet-100', text: 'text-violet-800', hover: 'hover:from-violet-600 hover:to-purple-500' },
        sky: { gradient: 'from-sky-500 to-blue-400', bg: 'bg-sky-100', text: 'text-sky-800', hover: 'hover:from-sky-600 hover:to-blue-500' },
        slate: { gradient: 'from-slate-500 to-gray-400', bg: 'bg-slate-100', text: 'text-slate-800', hover: 'hover:from-slate-600 hover:to-gray-500' }
    };
    return colors[color] || colors.blue;
};