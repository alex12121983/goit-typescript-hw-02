/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum DaysOfTheWeek {
  Monday = 'MONDAY',
  Tuesday = 'TUESDAY',
  Wednesday = 'WEDNESDAY',
  Thursday = 'TRURSDAY',
  Friday = 'FRIDAY',
  Saturday = 'SATURDAY',
  Sunday = 'SUNDAY'
}

function isWeekend(day: string): boolean {
  if(
    day.toUpperCase() === DaysOfTheWeek.Saturday || 
    day.toUpperCase() === DaysOfTheWeek.Sunday
  ) {return true;}
  else {
    return false;  
  }
  
}

let isIShouldGoToWork = isWeekend('monday');
let isIShouldTakeARest = isWeekend('saturday');