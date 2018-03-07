var request = new XMLHttpRequest();
request.open('GET','posts.json', true);
request.onload = function()
{
    var data = JSON.parse(this.response);
    console.log(data[0].title);
}