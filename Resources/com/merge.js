/*
 * Hugo FLores <hugoafj@gmail.com>
 * November 28, 2011
 */
if(typeof TL === "undefined") { var TL = {}; }

/*
 * Merges UI properties into an existing Titanium element
 * @param object [_element] The Titanium object to apply styles to
 * @param object [_params] An object with UI properties to apply to the element
 */
TL.merge = function(_element, _params) {
	for(var key in _params) {
		_element[key] = _params[key];
	}
};