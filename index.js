function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("hike")); // Output: "This Saturday, I want to hike!"
  console.log(saturdayFun("dance")); // Output: "This Saturday, I want to dance!"

  function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  }

console.log(mondayWork()); // Output: "This Monday, I will to go to the office."
console.log(mondayWork("attend a meeting")); // Output: "This Monday, I will attend a meeting."
console.log(mondayWork("work from home")); // Output: "This Monday, I will work from home."

const wrapAdjective = function(highlight = '*') {
    return function(adjective) {
      return `You are ${highlight}${adjective}${highlight}!`;
    };
  };
  
  const adjectiveWrapper = wrapAdjective('*');
  console.log(adjectiveWrapper('a hard worker')); // Output: "You are *a hard worker*!"