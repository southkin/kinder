var navigationController;
function navi_back(){
	if (!navigationController.hasBack()) {
		return;
	}
	navigationController.back(1);
}
function push_navi(url){
	navigationController.pushWithURL(url);
}
$(function(){
	navigationController = new Navigator($("#contentsWrap"));
	push_navi("pages/list.html");
});