window.onload = function()
{
    var modifyEle = document.getElementsByClassName('modifyOption');
    var menuPost = modifyEle.item(0);
    var menuCmt = modifyEle.item(1);
    menuPost.addEventListener('click', toggleMenu);
    menuCmt.addEventListener('click', toggleMenu);
    function toggleMenu(evt)
    {
        var clickedIcon = document.getElementById(evt.target.getAttribute('id'));
        var menu;
        if(clickedIcon.getAttribute('id') === 'optionIconPost')
        {
            menu = document.getElementById('optionMenuPost');
        }
        else if(clickedIcon.getAttribute('id') === 'optionIconCmt')
        {
            menu = document.getElementById('optionMenuCmt');
        }
        try
        {
            if(menu.style.display == 'none')
            {
                menu.style.display = 'block';
            }
            else if(menu.style.display == 'block')
            {
                menu.style.display = 'none';
            }
        }
        catch(TypeError)
        {
            console.log("TypeError caught");
        }
    }
    var deleteOption = document.getElementsByClassName('deleteOption');
    deleteOption.item(0).addEventListener('click', alertDelete);
    deleteOption.item(1).addEventListener('click', alertDelete);
    function alertDelete(evt)
    {
        var clickedOptionID = evt.target.getAttribute('id');
        var eleType;
        if(clickedOptionID === 'deleteOptionPost')
        {
            eleType = 'post';
        }
        else if(clickedOptionID === 'deleteOptionCmt')
        {
            eleType = 'comment';
        }
        window.alert('Are you sure you want to delete this ' + eleType);
    }
}
