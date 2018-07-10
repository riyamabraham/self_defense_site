$("button").on("click", function() {
    var onOff = $(this).attr("data-state");
    var channelName = $(this).attr("data-name");
    var APIKEY = "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y";
    var queryUrl = "https://www.googleapis.com/youtube/v3/channels?key=" + APIKEY + "&forUsername=" + channelName + "&part=id";
    console.log("Channel: ", channelName);
    console.log("URL: ", queryUrl);
    
    if (onOff == "on")
    {
        $(".vidContent").empty();
        $(this).attr("data-state", "off");
    }
    else
    {       
        $(".vidContent").empty();
        $(this).attr("data-state", "on");

        //Krav Maga / Muay Thai Video Button Set to Channel ID. 
        if (channelName === "UCZjBWltdlGD6SLn3OJqjzqw" //Krav Maga Channel ID
        || channelName === "UCT4rADCrNoOL22-jOWQjSRQ" // Muay Thai Channel ID
        || channelName === "UCUgIqptHreGZj-QYv4GYamw"
        )
        {
            getVideo(channelName);
        }
        else 
        {
            ajaxCall(queryUrl);
        }
    }
});

function ajaxCall(queryUrl)
{
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function(response) {
        console.log(response);

        var channelId = response.items[0].id;
        console.log("channel id: ", channelId);
        getVideo(channelId);
        });
};

function getVideo(channelId)
{
    // Test for Taekwondo
    if (channelId === "UCfP5KiBqbpFaKnddFa-KHaw")
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[2].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#tkVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#tkVids").append(html);
        return output;
        }
    }
    //JUDO VIDEOS
    else if (channelId === "UCUgIqptHreGZj-QYv4GYamw")
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[7].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#judoVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#judoVids").append(html);
        return output;
        }
    }
    //KARATE
    else if (channelId === "UCRIeMHsEdzA9RroG19kXdYg") 
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[2].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#karateVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#karateVids").append(html);
        return output;
        }
    }
    //KRAV MAGA
    else if (channelId === "UCZjBWltdlGD6SLn3OJqjzqw")
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[1].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#kravVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#kravVids").append(html);
        return output;
        }
    }
    //Muay Thai
    else if (channelId === "UCT4rADCrNoOL22-jOWQjSRQ")
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '10',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[5].id;
                    console.log(playList);
                    var output = add(playList);
                    $("#mtVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#mtVids").append(html);
        return output;
        }
    }
    //BJJ
    else if (channelId === "UCXpu025o8edxR9b4NMbH11A")
    {
        $.get ( //Jquery command to get data from youtube api
            "https://www.googleapis.com/youtube/v3/playlists", { 
                part: "snippet,contentDetails",
                channelId: channelId,
                maxResults: '32',   
                key: "AIzaSyC41e6Q78DQ8yxl9vno_OK8tRpE0Fh992Y"},
                function(data) {
                    console.log("Data: ", data);
                    var items = data.items
                    var playList = items[31].id;
                    console.log("video id: ", playList);
                    var output = add(playList);
                    $("#bjjVids").append(output)
                });

        function add(playList)
        {
        var html = '<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=' + playList + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        //'<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLzOTg_h8RdbdVJt519iyWsw22uQL5B9km" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
        var output = $("#bjjVids").append(html);
        return output;
        }
    }
}

