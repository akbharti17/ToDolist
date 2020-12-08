var $task=$("#task");
var $addButton=$("#addButton");
var $incompTask=$("#incomp");
var $compTask=$("#comp");

$addButton.on('click',function(){
	var listItemToAdd = newList($task.val());
	if($task.val()==''){
        $incompTask.append('');
	}else{
		$incompTask.append(listItemToAdd);
		$task.val("");
	}	
})
var newList = function(taskVal) {

  var $newListItem = $("<li></li>");
  var $newCheckbox = $("<input type='checkbox' class='checkbox'>");
  var $newLabel = $("<label></label>");
  var $newEditInput = $("<input type='text' class='editIn'>");
  var $newEditButton = $("<button class='edit-button'>Edit</button>");
  var $newDeleteButton = $("<button class='del'>Delete</button>");
  $newListItem.append($newCheckbox).append($newLabel.html(taskVal)).append($newEditInput).append($newEditButton).append($newDeleteButton);
  return $newListItem;
}

$incompTask.on( "click", ".del", function(){
  $(this).parent().remove();  
})

$compTask.on( "click", ".del", function(){
  $(this).parent().remove();
})

var editTask = function (list, input, label){
  if (list.hasClass("editMode")) { 
    list.removeClass("editMode");
    label.text(input.val());
    $('.editIn').val('');
  } else {
    list.addClass("editMode"); 
    input.val(label.text());
  }
}

$incompTask.on( "click", ".edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $input.prev();
  editTask($list, $input, $label);
})

$compTask.on( "click", ".edit-button", function(){
  var $list = $(this).parent();  
  var $input = $(this).prev();
  var $label = $input.prev();
  editTask($list, $input, $label);
})

$incompTask.on( "click", "input.checkbox", function(){
 var listItem = $(this).parent();
 $compTask.append(listItem);
})

$compTask.on( "click", "input.checkbox", function(){
 var listItem = $(this).parent();
 $incompTask.append(listItem);
})
