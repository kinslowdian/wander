var trace = function(str){ console.log(str); };

var display;
var el_list;
var worldMain;

function init_first(event, w, h)
{
	trace(event);
	trace(window);

	init_display();
	init_elements();
	init_world(w, h);
}

function init_elements()
{
	el_list = {};
	el_list.world 		= document.querySelector('#world');
	el_list.outside 	= document.querySelector('#world .outside');
	el_list.outsideL 	= document.querySelector('#world .outside-l');
	el_list.outsideR 	= document.querySelector('#world .outside-r');
	el_list.outsideT 	= document.querySelector('#world .outside-t');
	el_list.outsideB 	= document.querySelector('#world .outside-b');

	trace(el_list);
}

function init_display()
{
	display = {};
	display.screenSize = {};
	display.screenSize.w = window.screen.width;
	display.screenSize.h = window.screen.height;

	trace(display);
}

function init_world(w, h)
{
	var positioning = {};

	positioning.t = new Array();
	positioning.b = new Array();

	worldMain = {};
	worldMain.w = w;
	worldMain.h = h;

	// WIDTH
	el_list.outsideL.style.width = display.screenSize.w + "px";
	el_list.outsideR.style.width = display.screenSize.w + "px";
	el_list.outsideT.style.width = ((display.screenSize.w * 2) + worldMain.w) + "px";
	el_list.outsideB.style.width = ((display.screenSize.w * 2) + worldMain.w) + "px";

	// HEIGHT
	el_list.outsideT.style.height = display.screenSize.h + "px";
	el_list.outsideB.style.height = display.screenSize.h + "px";

	// POSITION
	el_list.outsideL.style.transform = 'translateX(' + -(display.screenSize.w) + 'px)';
	el_list.outsideR.style.transform = 'translateX(' + worldMain.w + 'px)';

	positioning.t[0] = -(display.screenSize.w);
	positioning.t[1] = -(display.screenSize.h);

	positioning.b[0] = -(display.screenSize.w);
	positioning.b[1] = worldMain.h;

	el_list.outsideT.style.transform = 'translate(' + positioning.t[0] + 'px, ' + positioning.t[1] + 'px)';
	el_list.outsideB.style.transform = 'translate(' + positioning.b[0] + 'px, ' + positioning.b[1] + 'px)';
}







