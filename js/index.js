var pattern = ['t', 'o', 'o', 'r'];
var current = 0;

var keyHandler = function (event)
{
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current])
	{
		current = 0;
		return;
	}

	current++;

	if (pattern.length === current)
	{
		current = 0;
		window.alert('g0t r00t :-)');
	}
};

document.addEventListener('keydown', keyHandler, false);
