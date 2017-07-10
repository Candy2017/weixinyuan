/* 动态换算rem和px值  */
var rem = 20;
window.onload = function() {
	changeW();
	window.addEventListener("resize", changeW, false);

	function changeW() {
		rem = 20 / 375 * document.documentElement.clientWidth;
		document.documentElement.style.fontSize = rem + "px";
	}
	window.addEventListener("resize", changeW, false);
}


//收藏
mui("body").on("tap", ".wish-info-shoucang", function(e) {
	if($(this).hasClass('icon-weishoucang')) {
		$(this).removeClass('icon-weishoucang').addClass('icon-shoucang');
		mui.toast('收藏成功！');
	}
})

//评价弹框
mui(".wish-comment-result").on("tap", ".comment-btn", function(e) {
	dialogStyle();
	var btnArray = ['满意', '不满意'];
	mui.confirm('对此服务满意吗？', '服务评价', btnArray, function(e) {
		if(e.index == 1) {
			//确认按钮 将取消后的心愿会保存到已失效心愿中

		} else {

		}
	})
});

//拨打电话
/*mui("body").on("tap", "#organiser-phone", function(e){
	var phone = $(this).text();
	var a = '<a class="tel-xxx" href="tel:' + phone + '" style="width: 100%;display: inline-block";>确定</a>';
	mui.confirm(phone, '是否拨打电话 ', [ a,'取消']);
})
*/
//删除评论按钮
mui(".comment-list").on("tap", ".cancel-comment", function(e) {
	var _this = $(this)
	var btnArray = ['取消', '确认'];
	mui.confirm('确认删除这条评论吗？', '删除评论', btnArray, function(e) {
		if(e.index == 1) {
			$(_this).parents('.comment-list').remove();
		}
	})
})


//评论输入框
mui("body").on("tap", "#public-comment", function(e){
//document.getElementById("public-comment").addEventListener('tap', function() {
	$('.comment-textbox').show();
})
mui("body").on("tap", "#comment-canncel", function(e){
//document.getElementById("comment-canncel").addEventListener('tap', function() {
	$('.comment-textbox').hide();
})


//验证电话号码
function checkMobile() {
	var sMobile = $("#organiser-phone").val()
	if(!(/^(((1[0-9]{1}[0-9]{1}))+\d{8})$/.test(sMobile))) {
		return false;
	} else {
		return true;
	}
}
//重置对话框样式
function dialogStyle() {
	$("<style id='b'></style>").text([
		'.mui-popup-buttons{',
		'display:block;',
		'height: auto;',
		'font-weight: 400;',

		'}',
		'.mui-popup-button:first-child{',
		'border-radius: 0;',
		'}',
		'.mui-popup-button:after {',
		'top: auto;',
		'bottom:0;',
		'left: 0;',
		'width:100% ;',
		'height:1px;',
		'-webkit-transform: scaleX(1);',
		'transform: scaleX(1);',
		'background-color: rgba(0, 0, 0, .1);',
		'}',
		'.mui-popup-button.mui-popup-button-bold{',
		'font-weight:400;',
		'}'
	].join('')).appendTo($("head"));
}