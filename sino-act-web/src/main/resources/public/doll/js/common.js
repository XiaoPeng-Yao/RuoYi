// 改变窗口的时候重新计算大小
document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 15 + "px";
window.onresize = function () {
	document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 15 + "px";
}
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return decodeURI(r[2]);
	return null;
}

;(function() {
	if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
			handleFontSize();
	} else {
			if (document.addEventListener) {
					document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
			} else if (document.attachEvent) {
					document.attachEvent("WeixinJSBridgeReady", handleFontSize);
					document.attachEvent("onWeixinJSBridgeReady", handleFontSize);  }
	}
	function handleFontSize() {
			// 设置网页字体为默认大小
			WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
			// 重写设置网页字体大小的事件
			WeixinJSBridge.on('menu:setfont', function() {
					WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
			});
	}
})();