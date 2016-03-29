var args = arguments[0] || {};
var WTools = require(WPATH('WidgetTools'));


function initUI() {

  WTools.setTiProps(args, $.iconLbl);

  $.init(args);

 WTools.cleanArgs(args);

}


$.init = function(argsInit) {

	$.iconLbl.font = {
		fontSize: args.size || 24,
		fontFamily: "MaterialIcons-Regular"
	};

	if(argsInit.iconColor) $.iconLbl.color = args.iconColor;

	if(argsInit.icon) {

		$.iconLbl.text =args.icon
	}
};


$.setIcon = function(icon) {
  console.log('setIcon '+icon)
  $.iconLbl.text = icon;
};

$.setColor = function(color) {
  $.iconLbl.color = color;
};

$.setVisible = function(status) {
  $.iconLbl.visible = status;
};

// workaround for android
exports.on = function(name, cb) { return $.iconLbl.addEventListener(name, cb); };
exports.off = function(name, cb) { return $.iconLbl.removeEventListener(name, cb); };
exports._hasListenersForEventType = function(name, flag) {
    return $.iconLbl._hasListenersForEventType(name, flag);
};

exports.bind = $.iconLbl.addEventListener;
exports.unbind = $.iconLbl.removeEventListener;

exports.addEventListener = $.iconLbl.addEventListener;
exports.removeEventListener = $.iconLbl.removeEventListener;


exports.trigger = $.iconLbl.fireEvent;
exports.fireEvent = $.iconLbl.fireEvent;

initUI();
