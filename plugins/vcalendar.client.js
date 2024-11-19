import { setupCalendar } from "v-calendar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("v-calendar", setupCalendar);
});
