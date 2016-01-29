var boundry_ARR;

function test()
{
	boundry_ARR = new Array();

	// TBLR
	add_to_hitTest({x:0, y:-40, w:worldMain.w, h:40});
	add_to_hitTest({x:0, y:worldMain.h, w:worldMain.w, h:40});
	add_to_hitTest({x:-40, y:0, w:40, h:worldMain.h});
	add_to_hitTest({x:worldMain.w, y:0, w:40, h:worldMain.h});

	// WOODS
	add_to_hitTest({x:0, y:80, w:160, h:80});
	add_to_hitTest({x:0, y:240, w:160, h:80});
	add_to_hitTest({x:320, y:80, w:160, h:160});
	add_to_hitTest({x:0, y:400, w:160, h:80});

	// ENEMY
	// add_to_hitTest({x:520, y:80, w:40, h:40, hitInteract:true, hitName:"doom lord", hitType:"ENEMY", overlap:true});

	add_to_hitTest({x:520, y:80, w:40, h:40, hitInteract:true, hitPrefs:{name: "doom lord", character: "crow"}, hitType:"ENEMY", overlap:true});

	trace(boundry_ARR);
}

function add_to_hitTest(build)
{
	var box = {};

	box.x = build.x;
	box.y = build.y;
	box.w = build.w;
	box.h = build.h;

	box.hitInteract = build.hitInteract || false;
	box.hitName 		= build.hitName || null;
	box.hitType			= build.hitType || null;
	box.hitPrefs		= build.hitPrefs || null;
	box.overlap 		= build.overlap || false;

	box.x0 = box.x;
	box.x1 = box.x0 + box.w;
	box.y0 = box.y;
	box.y1 = box.y + box.h;

	boundry_ARR.push(box);
}

function hitTest()
{
	var hit = false;

	for(var i in boundry_ARR)
	{
		if(thePlayer.pos[0] >= boundry_ARR[i].x0 && thePlayer.pos[0] < boundry_ARR[i].x1)
		{
			if(thePlayer.pos[1] >= boundry_ARR[i].y0 && thePlayer.pos[1] < boundry_ARR[i].y1)
			{
				hit = true;

				if(boundry_ARR[i].hitInteract)
				{
					thePlayer.interact = boundry_ARR[i];
				}

				break;
			}
		}
	}

	if(hit)
	{
		return true;
	}

	else
	{
		return false;
	}
}