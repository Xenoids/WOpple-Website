// Testing
console.log("hi")

// Animation Muncul Scroll bagian Home currently
window.addEventListener("scroll",appear)

function appear(){
    let container = document.querySelectorAll("#card")

    for(let i=0;i < container.length; i++)
    {
        let tinggiLayar = window.innerHeight
        let jarakcontainer = container[i].getBoundingClientRect().top

        // adjust besar jarak scroll
        let scroll = 150 

        if(jarakcontainer < tinggiLayar - scroll){
            container[i].classList.add('active')
        }
        else{
            container[i].classList.remove('active')
        }
    }
}

var width = window.innerWidth
var height = window.innerHeight

// Debug purpose for Dimensional width*height px
console.log(width)
console.log(height)

//Belanja Button
$('.BelanjaButtonR').click(() =>{
    // console.log('clicked')
    alert('Produk Berhasil ditambahkan ke Keranjang')
});

$('.BelanjaButtonL').click(() =>{
    // console.log('clicked')
    alert('Produk Berhasil ditambahkan ke Keranjang')
});

$('.BelanjaButton').click(() =>{
    // console.log('clicked')
    alert('Produk Berhasil ditambahkan ke Keranjang')
});

// Jquery Auto Slider
$(function(){

    let width = 720;
    let speed = 800;
    let cooldown = 3000;
    let currslide = 1;

    // variable
    var $container = $('.imgcontainer')
    var $containerslide = $container.find('.group-slide')
    var $slide = $containerslide.find('.slide')

    var interval;

    function playSlide(){
    opacityup();
       interval=setInterval(function(){
            $containerslide.animate({'margin-left':'-='+width,'opacity':'-=0.5'},speed, function(){
                $containerslide.animate({'opacity':'+=0.9'},(speed-50)/2)
                currslide++
                if(currslide == $slide.length){
                    currslide = 1
                    $containerslide.css('margin-left', 0)
                }
            });
            
        }, cooldown);
    }

    function stopSlide(){
        clearInterval(interval)
        opacitydown();
    }

    
    function opacitydown(){
        $container.animate({'opacity':'-=0.2'},250)
    }

    function opacityup(){
        $container.animate({'opacity':'+=0.2'},250)
    }

    $container.on('mouseenter',stopSlide)
    $container.on('mouseleave',playSlide)

    playSlide();
    // setInterval truss animate margin-left
    // setelah diakhir slide, ke pos 1 (0px)
});

//  if(width > 1500 )
//  {
//     $('.imgcontainer .group-slide').animate({'margin-left': -859},1000)
//  }
//  else
//  {
//     $('.imgcontainer .group-slide').animate({'margin-left': -720},1000)
//  }


// Slider Manual
var marginleftval = parseInt($('.Slide-list').offset().left)

$('.next-btn').click(function(){
    marginleftval = parseInt($('.Slide-list').offset().left)
    var nextbtn = $(this)
    nextbtn.prop('disabled',true)
    if(marginleftval <= -3000)
    {
        setTimeout(function(){
            nextbtn.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        nextbtn.prop('disabled',false)
    }, 500)
     $('.Slide-list').animate({
           'margin-left': '-=500px'},500);
    
    } 

    console.log(marginleftval)
})

$('.back-btn').click(function(){
    marginleftval = parseInt($('.Slide-list').offset().left)
    var backbtn = $(this)
    backbtn.prop('disabled',true)
    if(marginleftval == 0)
    {
        setTimeout(function(){
            backbtn.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        backbtn.prop('disabled',false)
    }, 500)
     $('.Slide-list').animate({
           'margin-left': '+=500px'},500);
    
    } 
    console.log(marginleftval)
    
})

// 2

var marginleftval2 = parseInt($('.Slide-list2').offset().left)

$('.next-btn2').click(function(){
    marginleftval2 = parseInt($('.Slide-list2').offset().left)
    var nextbtn2 = $(this)
    nextbtn2.prop('disabled',true)
    if(marginleftval2 <= -3000)
    {
        setTimeout(function(){
            nextbtn2.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        nextbtn2.prop('disabled',false)
    }, 500)
     $('.Slide-list2').animate({
           'margin-left': '-=500px'},500);
    
    } 

    console.log(marginleftval2)
})

$('.back-btn2').click(function(){
    marginleftval2 = parseInt($('.Slide-list2').offset().left)
    var backbtn2 = $(this)
    backbtn2.prop('disabled',true)
    if(marginleftval2 == 0)
    {
        setTimeout(function(){
            backbtn2.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        backbtn2.prop('disabled',false)
    }, 500)
     $('.Slide-list2').animate({
           'margin-left': '+=500px'},500);
    
    } 
    console.log(marginleftval2)
    
})

//3

var marginleftval3 = parseInt($('.Slide-list3').offset().left)

$('.next-btn3').click(function(){
    marginleftval3 = parseInt($('.Slide-list3').offset().left)
    var nextbtn3 = $(this)
    nextbtn3.prop('disabled',true)
    if(marginleftval3 <= -3000)
    {
        setTimeout(function(){
            nextbtn3.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        nextbtn3.prop('disabled',false)
    }, 500)
     $('.Slide-list3').animate({
           'margin-left': '-=500px'},500);
    
    } 

    console.log(marginleftval3)
})

$('.back-btn3').click(function(){
    marginleftval3 = parseInt($('.Slide-list3').offset().left)
    var backbtn3 = $(this)
    backbtn3.prop('disabled',true)
    if(marginleftval3 == 0)
    {
        setTimeout(function(){
            backbtn3.prop('disabled',false)
        }, 500)
        return;
    }
    else{
    setTimeout(function(){
        backbtn3.prop('disabled',false)
    }, 500)
     $('.Slide-list3').animate({
           'margin-left': '+=500px'},500);
    
    } 
    console.log(marginleftval3)
    
})



