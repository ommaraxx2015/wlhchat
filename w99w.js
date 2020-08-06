            $('#l1 br,#l2 br,#l3 br').remove()
			$('ul.nav.nav-tabs li a,#l1 input,#l2 input,#l3 input,#l1 button,#l2 button,#l3 button,div#l1,div#l2,div#l3').addClass('primaryborder')
			$('label.label.label-primary.mini.fl').addClass('fr').removeClass('fl').css('width','auto')
			$('#l2 input,#l3 input').addClass('fr')
			$('.checkbox label').html($('.checkbox label input'))
            $('div#l1').html($('div#l1').children())
			$(`
	<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera" />
<style>
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
$('.fr.borderg a').text('دوك موبايل')
            
            
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
                            
