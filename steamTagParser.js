$.ajax({
    url:"https://cors.io/?https://store.steampowered.com/tag/browse/#global_492",
    type:'GET',
    success: function(data){
        var htmlContent = data;
        var tagRegex = new RegExp("tagid=\"\\d+\">([a-zA-Z0-9\\s'\\./_&amp;-]+)</div>", "g");
        var matches;
        while((matches = tagRegex.exec(htmlContent)) !== null)
        {
            console.log(matches[1]);
        }
    }
 });