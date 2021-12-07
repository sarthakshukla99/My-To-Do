var item = document.getElementById('item');
var ul = document.getElementById('ul');

document.getElementById('btn').onclick = function(){
    var val = item.value;
    console.log(val);
    
    var li = document.createElement('li');
    ul.appendChild(li);
    li.append(val);
    if(val == ""){
        alert("Please enter item to the list")
        li.remove(val)
    }

    document.getElementById('item').value = '';
    li.onclick = function(){
        li.remove(val);
    }
}



