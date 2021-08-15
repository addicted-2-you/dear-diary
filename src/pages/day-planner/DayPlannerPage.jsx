import React from 'react';

import { getDaysInMonth } from '~/utils/date.utils';
import { getNumbersSequence } from '~/utils/array.utils';

import Hour from './components/Hour';
import Day from './components/Day';

const HOURS_IN_DAY = 24;

function DayPlannerPage() {
  const today = new Date();
  const daysInMonth = getDaysInMonth(today.getMonth(), today.getFullYear());

  const dayHours = React.useMemo(() => getNumbersSequence(HOURS_IN_DAY), []);
  const monthDays = React.useMemo(() => getNumbersSequence(daysInMonth), []);

  return (
    <div className="h-screen w-screen ">
      <div className="h-full flex">
        <div className="w-3/12 flex-shrink-0 border-r-2 border-gray-500">
          <h2 className="text-2xl font-bold border-b-2 border-gray-500">Today</h2>

          {dayHours.map((hourNumber) => (
            <Hour hourNumber={hourNumber} />
          ))}
        </div>

        <div>
          <div className=" ">
            {monthDays.map((dayNumber) => (
              <Day dayNumber={dayNumber} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DayPlannerPage;
