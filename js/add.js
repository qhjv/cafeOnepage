$(window).on("load",function(){
    /*----------------Load page --------------*/
    $(".loading").fadeOut("slow");
});


$(document).ready(function(){
    var isNavbar= true;
    $('html,body').animate({
        scrollTop: 0
        }, );
    /*--------------------------Navbar---------------------*/
    $(window).on("scroll",function(){
        
        if($(this).scrollTop() >90 && isNavbar == true){
            $(".navbar").addClass("navbar-scroll")
            $(".navbar").addClass("fixed_top")
            $(".scroll_top").addClass("scroll_on")
            isNavbar = false;
        }else if($(this).scrollTop() < 9 && isNavbar == false) {
            setTimeout(function(){
                $(".navbar").removeClass("navbar-scroll")
            $(".navbar").removeClass("fixed_top")
            $(".scroll_top").removeClass("scroll_on")
            $(".navbar-collapse").removeClass("show")

            isNavbar=true;
            },100)
        }
        // if($(this).scrollTop() > 1800) {
        //     var x = $(this).scrollTop();
        //     $(".background_scroll").css('background-position', '50% ' + parseInt(-x / 5) + 'px');
        
        // }
        if($(window).scrollTop() > $(".page_booking").offset().top - 550){
            TweenMax.staggerTo(".form-group",1,{y:0,opacity:1,ease:Power4.easeOut},0.5);
            TweenMax.to("input#submit",0.5,{y:0,opacity:1,ease:Power4.easeOut,delay:3});  
        }
        if($(window).scrollTop() > $(".pagereview").offset().top - 750){
            TweenMax.to(".right_pageview-name h2",1,{y:0,opacity:1,ease:Power4.easeOut});
            TweenMax.to(".right_pageview-name p",1,{y:0,opacity:1,ease:Power4.easeOut,delay:0.5});
           
        }
        if($(window).scrollTop() > $(".footer").offset().top - 650){
            TweenMax.staggerTo(".footer_name",1,{x:0,opacity:1,ease:Power4.easeOut},0.2);
            TweenMax.staggerTo("li.footer_name-list",1,{x:0,opacity:1,ease:Power4.easeOut},0.2);
            TweenMax.staggerTo("li.footer_name-list a",1,{x:0,opacity:1,ease:Power4.easeOut},0.2);
            TweenMax.to("h2.footer_name-hello",1,{x:0,opacity:1,ease:Power4.easeOut,delay:2.5});
            TweenMax.to("img.footer_name-img",1,{x:0,opacity:1,ease:Power4.easeOut,delay:2});
            TweenMax.to("img.footer_name-img1",1,{x:0,opacity:1,ease:Power4.easeOut,delay:2.3});
            TweenMax.to("img.footer_name-img2",1,{x:0,opacity:1,ease:Power4.easeOut,delay:2.5});
            TweenMax.to("img.footer_name-img3",1,{x:0,opacity:1,ease:Power4.easeOut,delay:2.8});
           
        }
        // var scrolled = $(window).scrollTop()
        //     $('.background_scroll').each(function(index, element) {
        //         var initY = $(this).offset().top
        //         var height = $(this).height()
        //         var endY  = initY + $(this).height()

        //         // Check if the element is in the viewport.
        //         var visible = isInViewport(this)
        //         if(visible) {
        //         var diff = scrolled - initY
        //         var ratio = Math.round((diff / height) * 100)
        //         $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
        //     }       
        //     })
    })
    /*---------Click scroll----------*/
    $(".header_scroll").on('click',function(){
        $('html,body').animate({
            scrollTop:$(".pagetwo").offset().top -210
            },1000 );
    })
    /*---------Click book----------*/
    $("a.text-decoration-none").on('click',function(){
        $('html,body').animate({
            scrollTop:$(".page_booking").offset().top -200
            },2000 );
    })
    /*---------Click language----------*/
    $("i.fas.fa-chevron-down").on('click',function(){
        const languaging = true;
        if( languaging == true){
            $("img.vietnam").toggleClass("hienra")
            languaging = false;
        }
    })
    /*---------Click menu btn-----------*/
    
    $(".menu-btn").on("click",function(){
        
        if($(this).scrollTop() <90 ){
            $(".navbar").addClass("navbar-scroll")
            $(".navbar").addClass("fixed_top")
            
        }

        
    })
    $(".nav-item").on('click',function(){
        $(".navbar-collapse").removeClass('show')
    })




    /*---------menu slide-----------*/

    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2 
            },
            1000:{
                items:4
            }
        }
    })
    
        /*---------animate gsap-----------*/
    if($(window).width()>=700){
        TweenMax.fromTo(".row .header_slogan p",2, {x: -200,opacity:0},{x:0,opacity:1,ease:Elastic.easeOut});
        TweenMax.fromTo(".header_button",2, {x: -300,opacity:0},{x:0,opacity:1,ease:Elastic.easeOut,delay:0.5});
        TweenMax.fromTo(".header_scroll",2, {opacity:0},{opacity:1,delay:1});
        TweenMax.fromTo(".cls-cafe",2, {x: 150,opacity:0},{x:0,opacity:1,ease:Elastic.easeOut,delay:0.5});
        TweenMax.to("#Layer_1 .svg_cls-1-4",0.5,{x:0,y:0,opacity:1,delay:1.5});
        TweenMax.to("#Layer_1 .svg_cls-1-1",0.5,{x:0,y:0,opacity:1,delay:1.5});
        TweenMax.to("#Layer_1 .svg_cls-1-2",0.5,{x:0,y:0,opacity:1,delay:1.5});
        TweenMax.to("#Layer_1 .svg_cls-1-3",0.5,{x:0,y:0,opacity:1,delay:1.5});
        TweenMax.fromTo("#Layer_1 text",0.5,{opacity:0},{opacity:1,ease:Elastic.easeOut,delay:1.5});
        TweenMax.to("#Layer_1 .cls-24-1",0.5,{x:0,y:0,opacity:1,delay:1.5});
        TweenMax.to("#Layer_1 .cls-24-2",0.5,{x:0,y:0,opacity:1,delay:1.5});
        
        $(window).on('scroll',function(){
            if($(window).scrollTop() > $(".pagetwo").offset().top - 550){
                TweenMax.to(".about_us h3",1,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".about_us h2",1,{y:0,opacity:1,ease:Power4.easeOut,delay:0.5});
                TweenMax.to(".about_us p",1,{y:0,opacity:1,ease:Power4.easeOut,delay:1});
                
            }
            if($(window).scrollTop() > $(".img_gioithieu").offset().top - 550){
                TweenMax.to(".container .img_gioithieu .img_gioithieu-1",1,{x:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".container .img_gioithieu .img_gioithieu-2",1,{x:0,opacity:1,ease:Power4.easeOut,delay:0.5});
                TweenMax.to(".container .img_gioithieu .img_gioithieu-diachi",0.5,{y:0,opacity:1,ease:Power4.easeOut,delay:1.5});
                
            }
            if($(window).scrollTop() > $(".slogan").offset().top - 500){
                TweenMax.to(".slogan_text",1.5,{y:0,opacity:1,ease:Power4.easeOut});  
            }
            if($(window).scrollTop() > $(".slogan").offset().top - 470){
                TweenMax.to(".menu_navbar-text",1.5,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.staggerTo(".menu_navbar-list--ul li",1,{y:0,opacity:1,ease:Power4.easeOut},0.5);

            }
            if($(window).scrollTop() > $(".view").offset().top - 700){
                TweenMax.to(".view_text h2",1,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".view_text p",1,{y:0,opacity:1,ease:Power4.easeOut,delay:0.5});
               
            }
            
            
        })

    }else{
        
            TweenMax.fromTo(".cls-cafe",2, {x: 150,opacity:0},{x:0,opacity:1,ease:Elastic.easeOut});
            TweenMax.to("#Layer_1 .svg_cls-1-4",0.5,{x:0,y:0,opacity:1,delay:1});
            TweenMax.to("#Layer_1 .svg_cls-1-1",0.5,{x:0,y:0,opacity:1,delay:1});
            TweenMax.to("#Layer_1 .svg_cls-1-2",0.5,{x:0,y:0,opacity:1,delay:1});
            TweenMax.to("#Layer_1 .svg_cls-1-3",0.5,{x:0,y:0,opacity:1,delay:1});
            TweenMax.fromTo("#Layer_1 text",0.5,{opacity:0},{opacity:1,ease:Elastic.easeOut,delay:1});
            TweenMax.to("#Layer_1 .cls-24-1",0.5,{x:0,y:0,opacity:1,delay:1});
            TweenMax.to("#Layer_1 .cls-24-2",0.5,{x:0,y:0,opacity:1,delay:1});



        $(window).on("scroll",function(){

            if($(window).scrollTop() > $(".content_row").offset().top - 450 ){
                TweenMax.to(".row .header_slogan p",2,{x:0,opacity:1,ease:Elastic.easeOut});
                TweenMax.to(".header_button",2,{x:0,opacity:1,ease:Elastic.easeOut,delay:0.5});
                TweenMax.to(".header_scroll",2,{opacity:1,delay:1});
            }
            if($(window).scrollTop() > $(".pagetwo").offset().top - 650){
                TweenMax.to(".about_us h3",1,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".about_us h2",1,{y:0,opacity:1,ease:Power4.easeOut,delay:0.5});
                TweenMax.to(".about_us p",1,{y:0,opacity:1,ease:Power4.easeOut,delay:1});
            }
            if($(window).scrollTop() > $(".img_gioithieu").offset().top - 650){
                TweenMax.to(".container .img_gioithieu .img_gioithieu-1",1,{x:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".container .img_gioithieu .img_gioithieu-2",1,{x:0,opacity:1,ease:Power4.easeOut,delay:0.5});
                TweenMax.to(".container .img_gioithieu .img_gioithieu-diachi",{y:0,opacity:1,ease:Power4.easeOut,delay:1});
                
            }
            if($(window).scrollTop() > $(".slogan").offset().top - 600){
                TweenMax.to(".slogan_text",1.5,{y:0,opacity:1,ease:Power4.easeOut});  
            }
            if($(window).scrollTop() > $(".slogan").offset().top - 570){
                TweenMax.to(".menu_navbar-text",1.5,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.staggerTo(".menu_navbar-list--ul li",1,{y:0,opacity:1,ease:Power4.easeOut},0.5);
            }
            if($(window).scrollTop() > $(".view").offset().top - 650){
                TweenMax.to(".view_text h2",1,{y:0,opacity:1,ease:Power4.easeOut});
                TweenMax.to(".view_text p",1,{y:0,opacity:1,ease:Power4.easeOut,delay:0.5});
               
            }
            
            
            
            
        })   
            // svdchuyendong = new Timelinemax()
            //     svdchuyendong.to("#Layer_1 .cls-24-1",0.5,{x:-10,y:-10})
            //     svdchuyendong.to("#Layer_1 .cls-24-1",0.5,{x:10,y:10})
            
    }
    if(isNavbar=true){

        /*-------------- click menu-------------*/
        $(".click_scroll-about").on('click',function(){
            $('html,body').animate({
                scrollTop:$(".pagetwo").offset().top -210
                },1500 );
        })
        $(".click_scroll-me").on('click',function(){
            $('html,body').animate({
                scrollTop:$(".menu").offset().top -110
                },1500 );
        })
        $(".click_scroll-spa").on('click',function(){
            $('html,body').animate({
                scrollTop:$(".view").offset().top -110
                },1500 );
        })
        $(".click_scroll-rev").on('click',function(){
            $('html,body').animate({
                scrollTop:$(".pagereview").offset().top +100
                },1500 );
        })
        $(".click_scroll-con").on('click',function(){
            $('html,body').animate({
                scrollTop:$(".footer").offset().top 
                },1500 );
        })



        /*-------------- scrollspy menu-------------*/
        
        $('body').scrollspy({target:'.navbar-collapse',offset:100})


    }
    const tabsMenu = document.querySelectorAll(".menu_navbar-list--li")
    const tabsMenuai = document.querySelectorAll(".menu_navbar-list--li a i")
    const tabsContent = document.querySelectorAll(".menu_img .menu_img-list .container .row")
    tabsMenu.forEach((tab,index) => {
        tab.onclick= function(){
           $(".menu_navbar-list--ul .active").removeClass('active')
           $(".menu_img .menu_img-list .container .active").removeClass('active')
            this.classList.add('active')
            tabsMenuai[index].classList.add('active')
            tabsContent[index].classList.add('active')
        }
    })
        
});



