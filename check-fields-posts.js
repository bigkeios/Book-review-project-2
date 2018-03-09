window.onload = function()
{
    var postForm = document.getElementById('postForm');
    postForm.onsubmit = function()
    {
        var title = document.getElementById('postTitle');
        var content = document.getElementById('postContent');
        // insert something to get the choice for the categ
        var tags = document.getElementById('postTag');
        if(!title.nodeValue)
        {
            var titleAlert = document.getElementById('titleAlert');
            titleAlert.nodeValue = 'Please fill in the title of your post';
        }
        if(!content.nodeValue)
        {
            var contentAlert = document.getElementById('contentAlert');
            contentAlert.nodeValue = 'Please fill in the title of your post';
        }
        
    }
}
