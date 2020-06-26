$(document).ready(function(){
    setTable();
 
    //如果有人來設定日期
    $("#inputDate").change(function(){
        let inputDate = $(this).val();
        console.log(inputDate);//yyyy-mm-dd
        let splitText = inputDate.split("-");
        console.log(splitText);
        setMonthAndDay(splitText[1],splitText[2]);
        setTable();
    });
 
});
 
function setTable(){
    $("#courseTable").empty();
    $("#courseTable").append(
        "<tr><th>場次</th><th>時間</th><th>主題</th></tr>"
    );

    // output data repeatedly
    let topicCount = topicArray.length;

    // how much ms in one day
    let oneDayMilliseconds=24*60*60*1000

    for(let x=0;x<topicCount;x++)
    {
        let thisDate=new Date(startDate.getTime()+7*x*oneDayMilliseconds);

        let trSpecial = "<tr>";
        let tdSpecial = "<td>";
        
        if(topicArray[x]=="不上課"){
            trSpecial = "<tr style='background-color:lightgray'>";
            tdSpecial = "<td style='color:red'>";
        }
      
        $("#courseTable").append(
            trSpecial+
            "<td>"+(x+1)+"</td>"+
            "<td>"+thisDate.toLocaleDateString().slice(5)+"</td>"+// quit date
            tdSpecial+topicArray[x]+"</td>"+
            "</tr>"
        );
    }
    
}
