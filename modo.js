let chbox = document.querySelector('.checkbox');
let body = document.body;

chbox.addEventListener('change', function(){
    if(this.checked){
        body.setAttribute('style','background-color: black; color:green;')
    }else{
        body.setAttribute('style','background-color: white; color:black;')
    }
});