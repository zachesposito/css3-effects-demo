$(function(){
	//2d transforms
	$('.twodtransform-controls span').on('click',function(){
		$('.twodtransform-img').toggleClass($(this).data('transform'));
	});
});