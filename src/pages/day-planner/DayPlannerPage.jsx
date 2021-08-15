import React from 'react';

import Hour from './components/Hour';

const DAY_HOURS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
];

function DayPlannerPage() {
  return (
    <div className="h-screen w-screen ">
      <div className="h-full">
        <div className="h-full w-3/12 border-r-2 border-gray-500">
          <h2 className="text-2xl font-bold border-b-2 border-gray-500">Today</h2>

          {DAY_HOURS.map((hourNumber) => (
            <Hour hourNumber={hourNumber} />
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default DayPlannerPage;
