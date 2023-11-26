(function () 
{
    "use strict";

    var content = JSON.parse(data);
    console.log(
        content,
        content.website.title
    );

    // Set website's title
    setTitle(content.website.title);

    setHomePageCover(content.homepage.cover);


})();