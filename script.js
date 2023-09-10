const checkbox = document.querySelector('#checkbox')
checkbox.addEventListener('click',function(){
    if(checkbox.checked){
        lightMode();
        console.log('checked')
    }
    else{
        darkMode();
        console.log("unchecked")
    }
})

function lightMode(){
    document.querySelector(".topdash").style.backgroundColor ="hsl(225, 100%, 98%)"
    document.querySelector(".topdash h3").style.color ="hsl(228, 28%, 20%)"
    document.querySelector(".topdash h3").style.fontWeight ="700"
    document.querySelector(".abc-bx p").style.color ="hsl(228, 12%, 44%) "
    document.querySelector(".toggle-label").style.background="hsl(230, 22%, 74%)"
    document.querySelector(".container").style.backgroundColor ="#fff"
    document.querySelector(".abc-box p").innerHTML ="Light Mode"
    document.querySelector(".abc-box p").style.color ="hsl(228, 12%, 44%)"
    document.querySelector(".bottom h3").style.color ="hsl(228, 28%, 20%)"
    document.querySelector(".bottom h3").style.fontWeight ="750"
    
    let box = document.querySelectorAll(".box")
    let bhead = document.querySelectorAll(".mbox h1")
    let para = document.querySelectorAll(".mbox h2")
    let name = document.querySelectorAll(".user span")
    let today = document.querySelectorAll(".box-con p")
    
    
    for( let i=0; i<box.length; i++){
        box[i].style.backgroundColor = "hsl(225, 100%, 98%)"
        bhead[i].style.color = "hsl(228, 28%, 20%)"
        para[i].style.color = "hsl(228, 12%, 44%)"
        name[i].style.color = "hsl(228, 12%, 44%)"
        today[i].style.color = "hsl(163, 84%, 41%)"
    }
    // This is for 4th small box in which 12 today in red color
    document.querySelector(".a p").style.color ="#b2071d"


    //Bottom small boxes
    let sbox = document.querySelectorAll(".sbox")
    let sbhead = document.querySelectorAll(".container1 span")
    let spara = document.querySelectorAll(".container2 h2")
    for( let i=0; i<sbox.length; i++){
        sbox[i].style.backgroundColor = "hsl(225, 100%, 98%)"
        sbhead[i].style.color = "hsl(228, 12%, 44%)"
        spara[i].style.color = "hsl(228, 28%, 20%)"
    }
}
   
function darkMode(){
    document.querySelector(".topdash").style.backgroundColor ="hsl(232, 19%, 15%)"
    document.querySelector(".topdash h3").style.color ="#fff"
    document.querySelector(".topdash h3").style.fontWeight ="700"
    document.querySelector(".abc-bx p").style.color ="rgb(139, 151, 198) "
    document.querySelector(".toggle-label").style.background="linear-gradient(90deg, #388FE7 0%, #40DB86 100%) "
    document.querySelector(".container").style.backgroundColor ="#1a1e23"
    document.querySelector(".abc-box p").innerHTML ="Dark Mode"
    document.querySelector(".abc-box p").style.color ="rgb(139, 151, 198)"
    document.querySelector(".bottom h3").style.color ="#fff"
    // Top boxes
    let box = document.querySelectorAll(".box")
    let bhead = document.querySelectorAll(".mbox h1")
    let para = document.querySelectorAll(".mbox h2")
    let name = document.querySelectorAll(".user span")
    let today = document.querySelectorAll(".box-con p")
    
    
    for( let i=0; i<box.length; i++){
        box[i].style.backgroundColor = "hsl(228, 28%, 20%)"
        bhead[i].style.color = "#fff"
        para[i].style.color = "rgb(139, 151, 198)"
        name[i].style.color = "rgb(139, 151, 198)"
        today[i].style.color = "hsl(163, 78%, 41%)"
    }
    // This is for
    document.querySelector(".a p").style.color ="#b2071d"


    //Bottom small boxes 4th small box in which 12 today in red color
    let sbox = document.querySelectorAll(".sbox")
    let sbhead = document.querySelectorAll(".container1 span")
    let spara = document.querySelectorAll(".container2 h2")
    for( let i=0; i<sbox.length; i++){
        sbox[i].style.backgroundColor = "hsl(228, 28%, 20%)"
        sbhead[i].style.color = "rgb(139, 151, 198)"
        spara[i].style.color = "#fff"

    }


    
        
    


}