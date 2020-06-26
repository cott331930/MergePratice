var player;
var currentPlay = 0;
var repeat = false;// 0=false

var count=1;
function _Click()
{

    if(count==1)
    {
        document.getElementById("RepeatButton").style.background="red";
        repeat = true;
        count=0;
    }
    else
    {
        document.getElementById("RepeatButton").style.background="white";
        repeat = false;
        count=1;
    }
}
// When API ready
function onYouTubeIframeAPIReady(){
    document.getElementById("RepeatButton").style.background="white";
    player = new YT.Player("player",
        {
            height:"360",
            width:"540",
            videoId:playList[currentPlay],
            playerVars:{
                "autoplay":0, // do not play automatically
                "controls":0, // donot show control panel
                "start":playTime[currentPlay][0], // second of start
                "end":playTime[currentPlay][1], // second of end
                "showinfo":0, // connot turn off after 2018/9/25
                "rel":0, //still display after 2018/9/25
                "iv_load_policy":3 // don't show notify of video
            },
            events:{
                "onReady":onPlayerReady,
                "onStateChange":onPlayerStateChange
            }

        }
    );
}

// when YT-player ready
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h1").text(player.getVideoData().title);
        player.playVideo();
    });
}

// when state of YT-player cahenged
function onPlayerStateChange(event){
    //
    if(Math.floor(player.getCurrentTime())==playTime[currentPlay][1]){
        // play next normally
        if(currentPlay<playList.length-1){
            currentPlay++;
            player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
            });
        }
        else
        { // if is last one, prepare first song and stop play
            currentPlay = 0;
            if (repeat)
            {
                player.loadVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
                });
            }
            else
            {             
                player.cueVideoById({
                "videoId":playList[currentPlay],
                "startSeconds":playTime[currentPlay][0],
                "endSeconds":playTime[currentPlay][1],
                "suggestedQuality":"large"
                });
            }
        }
             
    }
    // catch title of the video
    if(player.getVideoLoadedFraction()>0){
        $("h1").text(player.getVideoData().title);
    }

}

