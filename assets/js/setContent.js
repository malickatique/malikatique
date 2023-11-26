
// Homepage
function setTitle(title)
{
    document.title = title;
}

function setHomePageCover(cover)
{
    document.getElementById("homeCoverName").innerHTML = cover.name;
    console.log( document.getElementById("homeCoverTyped").dataset );
    document.getElementById("homeCoverTyped").setAttribute("typed-items", cover.typedItems);
    
}