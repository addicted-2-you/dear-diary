<template>
  <div class="h-screen overflow-hidden flex">
    <div class="w-9/12 flex justify-center items-center">
      <app-monthly-calendar class="w-4/6" />
    </div>

    <div class="w-3/12 bg-gray-200 border-l-2 border-gray-300"></div>
  </div>
</template>

<script>
import AppMonthlyCalendar from '../components/AppMonthlyCalendar.vue';

export default {
  name: 'AppCalendarView',

  components: { AppMonthlyCalendar },
};
</script>
