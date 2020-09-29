window.addEventListener('scroll',function(){
    //fixed-nav animation create
    const navbar =document.querySelector('.navbar');
    const scrollNavbarHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if( scrollNavbarHeight > navbarHeight){
        navbar.classList.add('fixed-nav');
    }
    else{
        navbar.classList.remove('fixed-nav'); 
    }
//person Images Animation Create
    const fluidImg = document.querySelector('.img-fluid');
    const imagePossion = fluidImg.getBoundingClientRect().top;
    const screenPossion = window.innerHeight/1.2;
    if(imagePossion < screenPossion){
        fluidImg.classList.add('img-fluid-active') ;
    }
    else{
        fluidImg.classList.remove('img-fluid-active') ;
    };  


//services info animation create
    const servicesInfoText = document.querySelectorAll('.services-info-text');
    servicesInfoText.forEach(function(item){
        const servicesInfoPossion = item.getBoundingClientRect().top;
        const servicesscreenPossition = window.innerHeight / 1.2;
      
        if (servicesInfoPossion < servicesscreenPossition){
            item.classList.add('services-info-active');
        }
        else{
            item.classList.remove('services-info-active'); 
        }
       
    });

    
//services item animation create
    const servicesItem = document.querySelectorAll('.services-item');
    servicesItem.forEach(function(item){
    const servicesPossion = item.getBoundingClientRect().top;
    const screenPossition = window.innerHeight / 1.2;
  
    if (servicesPossion < screenPossition){
        item.classList.add('services-item-active');
    }
    else{
        item.classList.remove('services-item-active'); 
    };
   
});
//About Info Animation create
const aboutItem = document.querySelectorAll('.about-animation');
aboutItem.forEach(function(item){

    const aboutPossion = item.getBoundingClientRect().top;
    const aboutscreenPossition = window.innerHeight / 1.2;

    if (aboutPossion < aboutscreenPossition){
        item.classList.add('about-animation-active');
    }
    else{
        item.classList.remove('about-animation-active'); 
    };
});
//-----blog page animation create---------
const blogItem = document.querySelectorAll('.blog');
blogItem.forEach(function(item){

    const blogPossion = item.getBoundingClientRect().top;
    const blogscreenPossition = window.innerHeight / 1.2;

    if (blogPossion < blogscreenPossition){
        item.classList.add('blog-active');
    }
    else{
        item.classList.remove('blog-active'); 
    };
});
//-------our recent project-------------------
const projectBox = document.querySelectorAll(".project-box");
projectBox.forEach(function(box){
    const projectBoxPossion = box.getBoundingClientRect().top;
    const projectscreenPossition = window.innerHeight / 1.2;
    if(projectBoxPossion < projectscreenPossition){
        box.classList.add("project-box-active");
    }
    else{
        box.classList.remove("project-box-active");
    }
})

});
//----------smoth scroll section --------------
const navbar = document.querySelector(".navbar");
const mainNav = document.querySelector("#mainNav");
const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(function(link){
    link.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        const navbarHeight = navbar.getBoundingClientRect().height;
        const collapseHeight = mainNav.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let possion = element.offsetTop - navbarHeight;
        if(!fixedNav){
            possion = possion - navbarHeight;
        };
        if(navbarHeight > 80){
            possion = possion + collapseHeight;
        };
        window.scrollTo({
            left:0,
            top:possion,

        });
        
       
        
    })
}) ;



var scrolltotop={setting:{startline:100,scrollto:0,scrollduration:1e3,fadeduration:[500,100]},controlHTML:'<img src ="images/images1.jpg" class="top" />',controlattrs:{offsetx:5,offsety:5},anchorkeyword:"#top",state:{isvisible:!1,shouldvisible:!1},scrollup:function(){this.cssfixedsupport||this.$control.css({opacity:0});var t=isNaN(this.setting.scrollto)?this.setting.scrollto:parseInt(this.setting.scrollto);t="string"==typeof t&&1==jQuery("#"+t).length?jQuery("#"+t).offset().top:0,this.$body.animate({scrollTop:t},this.setting.scrollduration)},keepfixed:function(){var t=jQuery(window),o=t.scrollLeft()+t.width()-this.$control.width()-this.controlattrs.offsetx,s=t.scrollTop()+t.height()-this.$control.height()-this.controlattrs.offsety;this.$control.css({left:o+"px",top:s+"px"})},togglecontrol:function(){var t=jQuery(window).scrollTop();this.cssfixedsupport||this.keepfixed(),this.state.shouldvisible=t>=this.setting.startline?!0:!1,this.state.shouldvisible&&!this.state.isvisible?(this.$control.stop().animate({opacity:1},this.setting.fadeduration[0]),this.state.isvisible=!0):0==this.state.shouldvisible&&this.state.isvisible&&(this.$control.stop().animate({opacity:0},this.setting.fadeduration[1]),this.state.isvisible=!1)},init:function(){jQuery(document).ready(function(t){var o=scrolltotop,s=document.all;o.cssfixedsupport=!s||s&&"CSS1Compat"==document.compatMode&&window.XMLHttpRequest,o.$body=t(window.opera?"CSS1Compat"==document.compatMode?"html":"body":"html,body"),o.$control=t('<div id="topcontrol">'+o.controlHTML+"</div>").css({position:o.cssfixedsupport?"fixed":"absolute",bottom:o.controlattrs.offsety,right:o.controlattrs.offsetx,opacity:0,cursor:"pointer"}).attr({title:"Scroll to Top"}).click(function(){return o.scrollup(),!1}).appendTo("body"),document.all&&!window.XMLHttpRequest&&""!=o.$control.text()&&o.$control.css({width:o.$control.width()}),o.togglecontrol(),t('a[href="'+o.anchorkeyword+'"]').click(function(){return o.scrollup(),!1}),t(window).bind("scroll resize",function(t){o.togglecontrol()})})}};scrolltotop.init();

