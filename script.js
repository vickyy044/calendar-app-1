var currentMonth = new Date().getMonth(), currentYear = new Date().getFullYear(), todaysDate = new Date().getDate();
var month = currentMonth, year = currentYear;

var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

var daysInMonth = (month, year) => (32 - new Date(year, month, 32).getDate());


function showCalendar(month, year){
    var firstDay = (new Date(year, month)).getDay();
    var calendarPlaceholder = document.querySelector("tbody");
    var calendarDates = "";
    var days = daysInMonth(month, year), currentDate = 1;
    while(currentDate < days){
        calendarDates += "<tr>";
        for(i=0;i<7;i++){
            if(( currentDate == 1 && i < firstDay ) || ( currentDate > days )){
                calendarDates += "<td></td>";
            }
            else if(currentDate === todaysDate && year === currentYear && month === currentMonth){
                calendarDates += `<td class="active">${currentDate++}</td>`;
            }
            else {
                calendarDates += `<td>${currentDate++}</td>`;
            }
        }
        calendarDates += "</tr>";
    }
    calendarPlaceholder.innerHTML = calendarDates;
    var current = document.querySelector(".current");
    current.textContent = `${months[month]}, ${year}`;
}

var nextButton = document.querySelector("#next"), previousButton = document.querySelector("#previous");

nextButton.addEventListener("click", () => {
    month++;
    if(month === 12){
        month = 0;
        year++;
    }
    showCalendar(month, year);
});

previousButton.addEventListener("click", () => {
    month--;
    if(month === -1){
        month = 11;
        year--;
    }
    showCalendar(month, year);
});

showCalendar(month, year);