var trace = function(str){ console.log(str); };

var display;
var el_list;
var worldMain;

var thePlayer;

function init_first(event, w, h)
{
	trace(event);
	trace(window);

	init_display();
	init_elements();
	init_world(w, h);

	init_player();
	init_control();
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

function init_player()
{
	thePlayer = {};
	thePlayer.sprite = document.querySelector('#character');
	thePlayer.spriteX = document.querySelector('.player-x');
	thePlayer.spriteY = document.querySelector('.player-y');
	thePlayer.pos = new Array();
	thePlayer.posSafe = new Array();
	thePlayer.pos[0] = 0;
	thePlayer.pos[1] = 0;
	thePlayer.posSafe[0] = 0;
	thePlayer.posSafe[1] = 0;
	thePlayer.move_listen = false;
	thePlayer.hit = false;
	thePlayer.interact = null;

	// TODO
	test();

	// thePlayer.spriteX.addEventListener("transitionend", event_move, false);
	// thePlayer.spriteY.addEventListener("transitionend", event_move, false);
}

function init_control()
{
	window.requestAnimationFrame(update_control);

	window.addEventListener("keydown", event_control, false);
	window.addEventListener("keyup", event_control, false);
}

function cancel_control()
{
	window.cancelAnimationFrame(update_control);

	window.removeEventListener("keydown", event_control, false);
	window.removeEventListener("keyup", event_control, false);
}

function event_control(event)
{
	if(event.type === "keydown" && !thePlayer.hit)
	{
		// thePlayer.move_listen = true;

		// U
		if(event.keyCode == 38)
		{
			thePlayer.pos[1] -= 40;

			// update_control("y");
		}

		// D
		else if(event.keyCode == 40)
		{
			thePlayer.pos[1] += 40;

			// update_control("y");
		}

		// L
		else if(event.keyCode == 37)
		{
			thePlayer.pos[0] -= 40;

			// update_control("x");
		}

		// R
		else if(event.keyCode == 39)
		{
			thePlayer.pos[0] += 40;

			// update_control("x");
		}
	}

	update_control_check();
}

function update_control_check()
{
	thePlayer.hit = hitTest();

	if(thePlayer.hit)
	{
		if(thePlayer.interact != null)
		{
			if(thePlayer.interact.overlap)
			{

			}

			else
			{
				thePlayer.pos[0] = thePlayer.posSafe[0];
				thePlayer.pos[1] = thePlayer.posSafe[1];
			}

			interactWithWorld();
		}

		else
		{
			thePlayer.pos[0] = thePlayer.posSafe[0];
			thePlayer.pos[1] = thePlayer.posSafe[1];
		}
	}

	else
	{
		thePlayer.posSafe[0] = thePlayer.pos[0];
		thePlayer.posSafe[1] = thePlayer.pos[1];
	}
}

function update_control()
{
	thePlayer.spriteX.style.transform = 'translateX(' + thePlayer.pos[0] + 'px)';

	thePlayer.spriteY.style.transform = 'translateY(' + thePlayer.pos[1] + 'px)';

	window.requestAnimationFrame(update_control);
}

// function update_control(axis)
// {
// 	if(axis === "x")
// 	{
// 		thePlayer.spriteX.style.transform = 'translateX(' + thePlayer.pos[0] + 'px)';
// 	}

// 	if(axis === "y")
// 	{
// 		thePlayer.spriteY.style.transform = 'translateY(' + thePlayer.pos[1] + 'px)';
// 	}
// }

function event_move(event)
{
	thePlayer.move_listen = false;
}

function interactWithWorld()
{
	if(thePlayer.interact.hitType === "ENEMY")
	{
		trace(thePlayer.interact.hitPrefs.name);
		trace(thePlayer.interact.hitPrefs.character);
	}
}







