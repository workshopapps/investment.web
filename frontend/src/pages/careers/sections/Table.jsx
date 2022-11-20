import React from 'react';
import elems from '../data.json';

export default function Table() {
    return (
        <table className="border-collapse table-auto w-11/12 text-sm overflow-hidden mt-6">
            <thead>
                <tr>
                    <th className="border-b-3 dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3  text-primary104 text-left">
                        Positions
                    </th>
                    <th className="border-b-3 dark:border-slate-600 font-medium p-4 pt-0 pb-3  text-primary104 text-left">
                        Category
                    </th>
                    <th className="border-b-3 dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3  text-primary104 text-left">
                        Commute Type
                    </th>
                    <th className="border-b-3 dark:border-slate-600 font-medium p-4 pr-8 pt-0 pb-3  text-primary104 text-left">
                        Employment Type
                    </th>
                </tr>
            </thead>
            <tbody className="bg-shade-400 dark:bg-slate-800">
                {elems.elems.map((value, i) => {
                    return (
                        <tr key={i}>
                            <td className="border-b-2 border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">
                                {value.position}
                            </td>
                            <td className="border-b-2 border-slate-100 dark:border-slate-700 p-4 text-slate-500 dark:text-slate-400">
                                {value.category}
                            </td>
                            <td className="border-b-2 border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                {value.commute}
                            </td>
                            <td className="border-b-2 border-slate-100 dark:border-slate-700 p-4 pr-8 text-slate-500 dark:text-slate-400">
                                {value.employment}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
