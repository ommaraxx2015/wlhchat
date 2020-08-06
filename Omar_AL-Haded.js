            $('#l1 br,#l2 br,#l3 br').remove()
			$('ul.nav.nav-tabs li a,#l1 input,#l2 input,#l3 input,#l1 button,#l2 button,#l3 button,div#l1,div#l2,div#l3').addClass('primaryborder')
			$('label.label.label-primary.mini.fl').addClass('fr').removeClass('fl').css('width','auto')
			$('#l2 input,#l3 input').addClass('fr')
			$('.checkbox label').html($('.checkbox label input'))
            $('div#l1').html($('div#l1').children())
			$(`
	<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera" />
<style>

.fr.co,div#tlogins img.fr.co {
    border-radius: 3px!important;
    height: 10px
}

.fa.fa-user-secret {
    color: #b40666;
    margin-top: 4px!important
}

label.label.label-primary.mini.fl {
    padding: 1px;
    margin-top: 0;
    border-radius: 15px!important
}

div#tlogins ::-webkit-scrollbar {
    width: 5px;
    height: 10px
}

div#tlogins ::-webkit-scrollbar-button {
    width: 5px;
    height: 5px
}

div#tlogins ::-webkit-scrollbar-thumb {
    background: 0 0;
    border: 71px #fff;
    border-radius: 31px;
    background: linear-gradient(163deg,#908f8f 0%,#908f8f 100%)
}

.border,div#tlogins {
    box-shadow: inset 1px 1px 1px 0 #9494946b,0 0 2px #9494949e
}

div#tlogins ::-webkit-scrollbar-thumb:active {
    background: 0 0
}

div#tlogins ::-webkit-scrollbar-track {
    background: #fff;
    border: 65px #fff;
    border-radius: 34px
}

div#tlogins ::-webkit-scrollbar-track:hover {
    background: 0 0
}

div#tlogins ::-webkit-scrollbar-track:active {
    background: 0 0
}

div#tlogins ::-webkit-scrollbar-corner {
    background: 0 0
}

div#tlogins .fl.mini.u-msg {
    margin-top: 3px!important;
    border-radius: 3px!important
}

ul.nav.nav-tabs>li>a {
    text-align: center;
    margin: 0;
    padding: 5px!important;
    padding-left: 30px!important
}

ul.nav.nav-tabs>li.active>a {
    border: 1px solid #fff
}

ul.nav.nav-tabs>li {
    width: 32%;
    margin: 0 5px 0 0
}

ul.nav.nav-tabs>li>.fa-user-plus:before,ul.nav.nav-tabs>li>.fa-user:before,ul.nav.nav-tabs>li>.fa-user:before {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 5px;
    color: #fff
}

.nav>li>a:focus,.nav>li>a:hover {
    color: #9abff9
}

.border {
    border: 0
}

.fr.borderg,.fr.borderg a {
	font-size: 10px!important;
    padding: 0 5px!important;
	position: relative;
	color: #ffffff;
}

.fr.borderg{
	border: 0px;
	margin-top:0;
	height:0;
	top:26px;
	}

.ae.label.label-primary.fa.fa-gear {
    color: #fff!important;
    border-radius: 0 0 15px;
    margin-left: 5px!important
}

.ae.fa.label.fa-commenting-o.label-warning,.ae.fa.label.label-primary.fa-commenting-o {
    border-radius: 0 0 0 15px
}

.ae.fa.chats.label.fa-comment.label-warning {
    border-radius: 0 0 0 15px
}

.ae.fa.label.label-primary.fa-users {
    border-radius: 0 0 15px;
    margin-left: 5px!important
}

.ae.fa.chats.label.fa-comment.label-primary {
    border-radius: 0 0 0 15px
}

.ae.fa.label.label-primary.fa-user {
    border-radius: 0 0 15px
}

.ae.fa.label.fa-volume-up.label-primary {
    border-radius: 0 0 0 15px
}

div#tlogins span.corner.u-topic.dots {
    float: left!important;
    margin-top: 8px!important;
    border-radius: 5px!important;
    margin-right: -110px!important;
    max-width: 140%!important;
    left: 0!important;
    margin-left: 0!important
}

div#tlogins .hand.nosel.fl.uzr.border {
    width: 98%!important;
    margin-top: 3px!important;
    margin-left: 4px!important;
    border-radius: 3px!important;
    border: 1px!important
}

div#tlogins img.fl.u-ico {
    margin-top: 8px!important
}

label.fl.nosel.label.pnhead {
    margin-left: 0!important;
    padding: 5px;
    width: 85%;
    display: block;
    background-color: #545454
}

.btn-primary,.label-primary,.btn-primary,.marquee,.users-count-label p,div#l1 button,div#l2 button,div#l3 button,label.label.label-primary.mini.fl,a.label.label-primary.fl,.lonline.light.break,label.fl.nosel.label.pnhead, {
    background-image: -webkit-linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)!important;
    background: linear-gradient(163deg,#1c585f00 0%,#5ccad300 100%)
}

.label-primary,.btn-primary,.bg-primary,.label-primary:hover,.btn-primary:hover,.btn-primary:focus {
    background-image: -webkit-linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)!important;
    background: linear-gradient(163deg,#1c585f00 0%,#5ccad300 100%)
}

.lonline.light.break {
    background-color: #bfbfbf26!important;
    background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,.2) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.2) 50%,rgba(255,255,255,.2) 75%,transparent 75%,transparent)!important
}

div#l1 button {
    padding: 2px 0!important;
    border: 2px solid #e6ff50;
    -webkit-animation: mymove 5s infinite;
    animation: mymove 1s infinite
}

@-webkit-keyframes mymove {
    50% {
        border-color: #add8e6
    }

    from {
        transform: rotate(0deg) scale(1)
    }

    to {
        transform: rotate(360deg) scale(1)
    }
}

@keyframes mymove {
    50% {
        border-color: #add8e6
    }
}

a.label.label-primary.fl {
    border-radius: 3px!important;
    padding: 5px!important;
    margin-bottom: 2px;
}

.ae.label.label-primary.fa.fa-star {
    border-radius: 0 0 0 15px
}

#des0 {
    height: 19px;
    font-size: 14px!important;
    color: #fff;
    padding: 0 0!important;
}

div#tlogins {
    border-radius: 24px;
    border-color: #404040;
    outline: 0;
    box-shadow: inset 0 2px 2px rgba(0,0,0,.075),0 0 8px #353535;
    border: 1px solid#2b2b2b69
}

ul.nav.nav-tabs.fl {
    margin-top: -3px
}
div#users img.fl.ustat {
    border-radius: 10px 0px 0px 0px;
    margin: 0;
	margin-right: -36px;
	width: 39px!important;

}

img.fitimg.fl.u-pic {
    border-radius: 13px 0px 0px 0px!important;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 5px #707071
}


#des0 {
    background-color: #3c3c3c;
	border-radius: 15px 15px 0px 0!important;
}

a.fa.fa-user-plus {
    color: #ff3363;
}


label.fl.nosel.label.pnhead {
background-image: -webkit-linear-gradient(45deg,hsla(0,0%,100%,.2) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.2) 0,hsla(0,0%,100%,.2) 75%,transparent 0,transparent)!important;

}




#des3 {
    margin: 1px!important;
}

ul.nav.nav-tabs.fl {
    margin-top: 1px!important;
}

button.ssss.btn.fr.btn-warning.fa.fa-paint-brush {
    display: none!important;
}

a.label.label-primary.fl button {
    border-radius: 50%;
    background: transparent;
    border: none;
    box-shadow: none;
}
a.label.label-primary.fl img.fl {
    margin: -5px 2px 0 -4px!important;
    border-radius: 5px 0 0 0;
}
a.label.label-primary.fl {
    padding-bottom: 1px!important;
    font-family: 'jazeera-light',FontAwesome;

}
div#l2,div#l1,div#l3 {
    border-bottom: 2px solid;
    border-radius: 15px;
    margin-bottom: 2px;
    padding: 3px 8px 0!important;
    font-family: 'jazeera-light',FontAwesome;
}
label.label.label-primary.mini.fr{
    background-color: #e3007910!important;
}

label.fl.label.loginstat,label.label.label-primary.mini.fr,.fr.borderg{
    border-radius: 5px!important;
    background-color: #e3007910!important;
    border: lavender solid 1px;
    padding: 2px!important;
    font-family: 'jazeera-light',FontAwesome;
    font-size: 12px !important;
    line-height: 20px;
}
.fr.borderg a{
    padding: 0px!important;
    font-family: 'jazeera-light',serif,FontAwesome;
    font-size: 12px !important;

}
label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success {
    background: transparent;
}
span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a {
    padding: 0px!important;
    margin: 0 5px  !important;
}
label.fl.label.loginstat{
    padding: 2px 8px!important;
    line-height: 20px;

}
.checkbox{
    float: right;
    margin: 5px 0 !important;
}
#l1 button.btn.btn-primary,#l2 button.btn.btn-primary,#l3 button.btn.btn-primary {
    width: 90%;
    margin-top: 3px;
    padding: 2px 0;
    border-radius: 25px;
    margin-bottom: 3px;
    font-family: 'jazeera-light',FontAwesome;

}
#l1 input#u1,#l1 input#u1:focus ,#l2 input#u2,#l2 input#u2:focus ,#l3 input#u3,#l3 input#u3:focus {
    border-radius: 15px 0;
    outline: 0;
    text-align: center;
    border-width: 1.2px;
    width: 50%;
    font-family: 'jazeera-light',FontAwesome;

}
#l2 input#pass1,#l2 input#pass1:focus,#l3 input#pass2,#l3 input#pass2:focus {
    border-radius: 0 15px;
    outline: 0;
    text-align: center;
    border-width: 1.2px;
    width: 50%;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li.active a,ul.nav.nav-tabs li.active a:hover,ul.nav.nav-tabs li.active a:focus {
    border-bottom: 2px solid transparent !important;
    border: 1px solid;
    border-top-style: dotted;
    border-top-width: 2px;
    background-color: white!important;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li.active a:hover,ul.nav.nav-tabs li.active a:focus {
    background-color: white!important;

}
ul.nav.nav-tabs li a,ul.nav.nav-tabs li a:hover,ul.nav.nav-tabs li :focus {
    width: 100%;
    text-align: center;
    border-radius: 11px 12px 0 0;
    padding: 5px 0!important;
    border: 2px solid;
    border-left: none;
    border-right: none;
    background-color: #e3007910;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs li {
    width: 33.3%;
}
input#u1,#l1 button.btn.btn-primary,#l3 button.btn.btn-primary{
    width: 100%!important;
    font-family: 'jazeera-light',FontAwesome;

}
ul.nav.nav-tabs {
    background-color: white!important;
}
div#tlogins .uzr{
    border:none!important;
    border-radius:3px!important;
    margin-top:2px!important;
}
    </style>
`).insertBefore('.nav-tabs');
                            
    $('a.fr.primaryborder.btn.btn-default,label.fl.label.loginstat, label.label.label-primary.mini.fr,.fr.borderg,label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a,ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,marquee.label-primary.fl span').css({'color':$('a.label.label-primary.fl').css('background-color')})
$('.lonline.light.break').addClass('label-primary')
$('.fr.borderg a').text('عمر الحديد')
            
            
$(window).resize();
setTimeout(function(){
    $('a.fr.primaryborder.btn.btn-default,label.fl.label.loginstat, label.label.label-primary.mini.fr,.fr.borderg,label.fl.label.loginstat, span.s1.fa.fa-user.label.badgex.label-as-badge.label-success,.fr.borderg a,ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,marquee.label-primary.fl span').css({'color':$('a.label.label-primary.fl').css('background-color')})

    $(window).resize()
},1000)
setTimeout(function(){
    $(window).resize()
},2000)
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)+10;
}


            var dsfdm = $('a.label.label-primary.fl').css('background-color').match(/(\d+)/g)
            if(dsfdm){
                $('ul.nav.nav-tabs li a, ul.nav.nav-tabs li a:hover, ul.nav.nav-tabs li :focus,label.fl.label.loginstat, label.label.label-primary.mini.fr, .fr.borderg').css('background-color',rgbToHex(Number(dsfdm[0]),Number(dsfdm[1]), Number(dsfdm[2])))
            }
                            
