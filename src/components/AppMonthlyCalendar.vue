<template>
  <div>
    <h3
      class="px-2 pt-2 flex justify-start text-xl font-semibold bg-gray-100 rounded-t-lg border-b-2 border-gray-200"
    >
      {{ selectedDateMonthString }}
    </h3>

    <div class="mt-2 grid grid-cols-7">
      <i v-for="weekday in weekdays" :key="weekday" class="pl-2">{{ weekday }}</i>

      <div
        v-for="day in selectedDateDays"
        :key="day.date"
        class="p-2 h-16 border-l-2 border-b-2 border-gray-200"
        :class="{ 'bg-gray-100': !day.isCurrentMonth }"
      >
        {{ getDayLabel(day) }}
      </div>
    </div>
  </div>
</template>

<script>
/**
 *
 * Stolen from here - https://codesandbox.io/s/monthly-calendar-vue-wdv9y
 *
 */

import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import weekOfYear from 'dayjs/plugin/weekOfYear';

import { WEEKDAYS } from '@/constants/time.constants';

dayjs.extend(weekday);
dayjs.extend(weekOfYear);

export default {
  name: 'AppMonthlyCalendar',

  data() {
    return {
      selectedDate: dayjs(),
    };
  },

  computed: {
    selectedDateMonthString() {
      return this.selectedDate.format('MMMM YYYY');
    },

    weekdays() {
      return WEEKDAYS;
    },

    selectedDateDays() {
      return [...this.previousMonthDays, ...this.currentMonthDays, ...this.nextMonthDays];
    },

    today() {
      return dayjs().format('YYYY-MM-DD');
    },

    month() {
      return Number(this.selectedDate.format('M'));
    },

    year() {
      return Number(this.selectedDate.format('YYYY'));
    },

    numberOfDaysInSelectedMonth() {
      return dayjs(this.selectedDate).daysInMonth();
    },

    currentMonthDays() {
      return [...Array(this.numberOfDaysInSelectedMonth)].map((day, index) => ({
        date: dayjs(`${this.year}-${this.month}-${index + 1}`).format('YYYY-MM-DD'),
        isCurrentMonth: true,
      }));
    },

    previousMonthDays() {
      const firstDayOfTheMonthWeekday = this.getWeekday(this.currentMonthDays[0].date);
      const previousMonth = dayjs(`${this.year}-${this.month}-01`).subtract(1, 'month');

      // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
      const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;

      const previousMonthLastMondayDayOfMonth = dayjs(this.currentMonthDays[0].date)
        .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
        .date();

      return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
        return {
          date: dayjs(
            `${previousMonth.year()}-${previousMonth.month() + 1}-${
              previousMonthLastMondayDayOfMonth + index
            }`
          ).format('YYYY-MM-DD'),
          isCurrentMonth: false,
        };
      });
    },

    nextMonthDays() {
      const lastDayOfTheMonthWeekday = this.getWeekday(
        `${this.year}-${this.month}-${this.currentMonthDays.length}`
      );

      const nextMonth = dayjs(`${this.year}-${this.month}-01`).add(1, 'month');

      const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;

      return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
          date: dayjs(`${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`).format(
            'YYYY-MM-DD'
          ),
          isCurrentMonth: false,
        };
      });
    },
  },

  methods: {
    getDayLabel(day) {
      return dayjs(day.date).format('D');
    },

    getWeekday(date) {
      return dayjs(date).weekday();
    },
  },
};
</script>
