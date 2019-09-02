

var news;
var category ="general";
var country ="us";
var sideBtn =document.getElementById("side-button");
var links=document.getElementsByClassName("like");
var sideBar =document.getElementById("left-side");
var countryList=document.getElementsByClassName("list-group-item");



sideBtn.addEventListener("click",function(){
    sideBar.classList.add("sidenav");
    sideBar.classList.remove("dishow");
})

document.addEventListener("click",function(e)
{
    if(e.clientX > sideBar.offsetWidth )
    {
        sideBar.classList.remove("sidenav");
         sideBar.classList.add("dishow");
    }
})


for(var i=0;i<links.length;i++)
{
    links[i].addEventListener("click",function(e)
    {
        category= e.target.innerHTML;
        ajexNew();
    })
}

for(var i=0;i<countryList.length;i++)
{
    countryList[i].addEventListener("click",function(e)
    {
        country= e.target.innerHTML;
        ajexNew();
    })
}


ajexNew();


function ajexNew()
{
    var req=new XMLHttpRequest();
    var url="https://newsapi.org/v2/top-headlines?country="+country+"&category="+category+"&apiKey=ace77e66d610451ea137f8d2eb6b8d47";

    req.open("GET",url);
    
    req.onreadystatechange=function()
    {
        if(req.status ==200 &&req.readyState == 4)
        {
            news=JSON.parse(req.response);
            news =news.articles;
            display();
        }
    }
   req.send(); 
}

function display()
{
    var temp="";

    for(var i=0;i<news.length;i++)
    {
        temp +=`<div class="col-md-4 col-sm-6">
                <div class="new">
                    <img src="`+news[i].urlToImage+`"  class="img-fluid"/>
                    <h5 >`+news[i].title+`</h5>
                    <p>`+ news[i].description+`</p>
                </div>
                </div>`
    }
    document.getElementById("content").innerHTML =temp;

}



