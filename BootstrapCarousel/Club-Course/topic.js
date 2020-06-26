let topicArray=[
    "尚未開學",
    "國定假日",
    "環境準備",
    "不上課",
    "隨機性",
    "不上課"
];

let startDate= new Date();
function setMonthAndDay(startMonth, startDay)
{
    // set month and day
    startDate.setMonth(startMonth-1, startDay);

    // ignore time, set it to zero
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}
// set first day
setMonthAndDay(2,21);