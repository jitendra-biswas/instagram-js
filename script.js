var side = document.querySelector(".side-nav")
var btn  = document.querySelector("#bar")
var check = 0
btn.addEventListener("click", function(){
    if(check == 0){
        side.style.display = "block"
        check = 1
    }

    else{
        side.style.display = "none"
        check = 0
    }
});

var arr = [{dp:
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stry: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fHww"
   }, {dp:
    "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsfGVufDB8fDB8fHww",
    stry: "https://images.unsplash.com/photo-1621086893822-ca4d5a70bf36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fG1vZGVsfGVufDB8fDB8fHww"
   },{dp:
    "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsfGVufDB8fDB8fHww",
    stry: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1vZGVsfGVufDB8fDB8fHww"
   },{dp:
    "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsfGVufDB8fDB8fHww",
    stry: "https://plus.unsplash.com/premium_photo-1669704098750-7cd22c35422b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww"
   },{dp:
    "https://images.unsplash.com/photo-1590926938512-c0d7e5c39abd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww",
    stry: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fG1vZGVsfGVufDB8fDB8fHww"
   },{dp:
    "https://images.unsplash.com/photo-1524638431109-93d95c968f03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww",
    stry: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fG1vZGVsfGVufDB8fDB8fHww"
   }
];

var stry = document.querySelector(".story")
var clutter = ""
arr.forEach(function(elem , idx){
    clutter += `<div class="stories">
    <img id="${idx}"src="${elem.dp}" alt=""> 
 </div>`
});

stry.innerHTML = clutter
stry.addEventListener("click",function(dets){
    document.querySelector(".full-screen").style.display = "block"
    document.querySelector(".full-screen").style.backgroundImage = `url(${arr[dets.target.id].stry})`

    setTimeout(function(){
        document.querySelector(".full-screen").style.display = "none"
    },3000)
});
