
// right top section2
function mrt2_h1(){
	$(".main-right-top2 h1").fadeIn(100);
}
function mrt2_product(){
	$(".mrt2-product").fadeIn(500);
	$(".mrt2-product").addClass('mrt2-product'); //2s
}
function mrt2_words(){
	$(".mrt2-words").fadeIn(500);
}
setTimeout(mrt2_h1,0)
setTimeout(mrt2_product,100)
setTimeout(mrt2_words,600)


// right top section3
function mrt3_title(){
	$(".mrt3-title").fadeIn(100);
}
function mrt3_cyclic(){
	$(".mrt3-cyclic").fadeIn(500);
}
function mrt3_column(){
	$(".mrt3-column").fadeIn(500);
	$(".mrt3-column").addClass('zoomIn');
}
setTimeout(mrt3_title,1100)
setTimeout(mrt3_cyclic,1200)
setTimeout(mrt3_column,1700)


// right top section4
function mrt4_title(){
	$(".mrt4-title").fadeIn(100);
}
function mrt4_bg(){
	$(".mrt4-bg").fadeIn(500);
	$(".mrt4-bg").addClass('mrt4_bg'); //3s

}
setTimeout(mrt4_title,2200)
setTimeout(mrt4_bg,2300)




// right bottom section3
function mrb_title(){
	$(".mrb-title").fadeIn(100);
	$(".mrb-title").addClass('bounceInLeft');
}
function mrb3_map(){
	$(".mrb3-map").fadeIn(500);
	$(".mrb3-map").addClass('bounceIn'); 
}
function mrb3_point(){
	$(".mrb3-point").fadeIn(500);
}
setTimeout(mrb_title,2800)
setTimeout(mrb3_map,2800)
setTimeout(mrb3_point,3300)

// right bottom section4
function mrb4_coords(){
	$(".mrb4-coords").fadeIn(500);
}
function mrb4_map(){
	$(".mrb4-map").fadeIn(500);
	$(".mrb4-map").addClass('flash'); 
}
function mrb4_line(){
	$(".mrb4-line").fadeIn(500);
}
setTimeout(mrb4_coords,3800)
setTimeout(mrb4_map,4300)
setTimeout(mrb4_line,4800)