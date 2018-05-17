function editMenu(){

  //Removing elements from menu
  this.removeElement=function(){
    $('.removeMenuElement').on('click',function(){
      var parent_=$(this).parent('li');

      //hidden input
      parent_.next().val('false');
      //List element
      parent_.remove();
    })
  }

  //Adding elements to menu
  this.addElement=function(){
    $('.addElemenMenu').on('click',function(){
      var link=$(this).prev();
      var anchor=$(link).prev();

      var num=0;
      var menuBuilder=$('.menuActiveElementsAdmin>ul');
      var lastID=menuBuilder.find('input').each(function(){
          if($(this).attr('name')>num){
            num=$(this).attr('name');
          }
      });
      lastID=parseInt(num)+1;


      //add list element into menu and also input so it will be passed via form to the controler
      menuBuilder.append('<li>'+anchor.html()+'-'+link.attr('href')+'</li>');
      menuBuilder.append('<input type="hidden" value="'+anchor.html()+'" name="'+lastID+'[]" />'); //this one passes link
      menuBuilder.append('<input type="hidden" value="'+link.attr('href')+'" name="'+lastID+'[]"/>');
    })
  }
}



//----------------------------
var menu = new editMenu();
menu.removeElement();
menu.addElement();