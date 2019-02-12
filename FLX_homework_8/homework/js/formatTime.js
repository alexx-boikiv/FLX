function formatTime(totalMinutes){
  let hoursRemainder = totalMinutes % 1440;
  let fullDays = (totalMinutes - hoursRemainder) / 1440;
  let minutesRemainder = hoursRemainder % 60;
  let fullHours = (hoursRemainder - minutesRemainder) / 60;
  return `${fullDays} day(s) ${fullHours} hour(s) ${minutesRemainder} minute(s)`;
}

formatTime(59);
