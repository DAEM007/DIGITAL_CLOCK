const clock = document.querySelector('.clock');

const tick = () => {
    // This is the date for today
    const now = new Date();

    // These are the number of hours, mins and secs...
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    // We then store the function to format hour in a variable
    let formatHour = convertStringHour(h);

    // We update the hour variable by storing in it the function that converts the hour-format
    h = convertHourFormat(h);

    // We update the hour, mins and secs variable by storing a function to add leading zeros when digits are less than 10.
    h = addZeros(h);
    m = addZeros(m);
    s = addZeros(s);
    

    // for the inner html...we would want to have the following details
    const html = `
       <span>${h}</span> : 
       <span>${m}</span> :
       <span>${s}</span>
       <span>${formatHour}</span>
    `;

    // Now we properly input the inner html...
    clock.innerHTML = html;

};

// This is a function to format the hours---"AM" to "PM" and vise-versa
const convertStringHour = (time) => {
    let format = 'AM';
    if(time >= 12){
        format = 'PM';
    }
    return format;
}

// This is a function that would convert it from a 24-hour format to a 12-hour format
const convertHourFormat = (timeHour) => {
    if(timeHour > 12){
        timeHour = timeHour - 12;
    }
    if(timeHour === 0){
        timeHour = 12;
    }
    return timeHour;
}

// This function adds leading zeros to the digits less than 10 in the hour portion of the clock;
const addZeros = (time) => {
    if(time < 10){
        time = '0' + time;
    }
    return time;
}

// We then set an interval for the tick function---time duration for the second
setInterval(tick, 1000);