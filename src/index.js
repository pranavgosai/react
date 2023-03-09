import React from 'react';

function DisplayCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  
  let monthName;
  switch(month) {
    case 0:
      monthName = "january";
      break;
    case 1:
      monthName = "february";
      break;
    case 2:
      monthName = "march";
      break;
    case 3:
      monthName = "april";
      break;
    case 4:
      monthName = "may";
      break;
    case 5:
      monthName = "june";
      break;
    case 6:
      monthName = "july";
      break;
    case 7:
      monthName = "august";
      break;
    case 8:
      monthName = "september";
      break;
    case 9:
      monthName = "october";
      break;
    case 10:
      monthName = "november";
      break;
    case 11:
      monthName = "december";
      break;
    default:
      monthName = "";
      break;
  }
  
  const formattedDate = `${day}-${monthName}-${year}`;
  
  return (
    <p>{formattedDate}</p>
  );
}

