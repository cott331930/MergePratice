$(document).ready(function(){

    let currentQuiz=null;
    $("#startButton").click(function()
    {
        if(currentQuiz==null)
        {
            // set current question to 0
            currentQuiz=0;
            // print question
            $("#question").text(questions[0].question);
            $("#options").empty();
            for(let x=0;x<questions[0].answers.length;++x)
            {
                $("#options").append(
                    "<input name='options' type='radio' value="+
                    x+">"+
                    "<label>"+questions[0].answers[x][0]+
                    "</label><br><br>"
                );

            }
            $("#startButton").attr("value","Next");
        }
        else
        {
            $.each(
                $(":radio"),function(i,val){
                    if(val.checked){
                        // if has generated final result
                        if(isNaN(questions[currentQuiz].answers[i][1]))
                        {
                            // to go final 
                            let finalResult=questions[currentQuiz].answers[i][1];
                            // print title of final result
                            $("#question").text(finalAnswers[finalResult][0])
                            // clear area
                            $("#options").empty();
                            // print final result
                            $("#options").append(finalAnswers[finalResult][1]+"<br><br>")
                            // set current question to 0
                            currentQuiz=null;
                            
                            // restore button
                            $("#startButton").attr("value","Restart");

                        }
                        else
                        {
                            currentQuiz=questions[currentQuiz].answers[i][1]-1;
                            // print question
                            $("#question").text(questions[currentQuiz].question);
                            $("#options").empty();

                            for(let x=0;x<questions[currentQuiz].answers.length;++x)
                            {
                                $("#options").append(
                                    "<input name='options' type='radio' value="+
                                    x+">"+
                                    "<label>"+questions[currentQuiz].answers[x][0]+
                                    "</label><br><br>"
                                );
                
                            }
                        }
                        return false;
                    }
                }
            );
        }

    });

});