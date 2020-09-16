var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();

$('input').on('input',function(){
    var value = $(this).attr('id');
    $('table').css('--'+value,$(this).val()+$(this).data('unit'));
    $(this).next('output').text($(this).val()+$(this).data('unit'));
});

$('td').on('mouseenter mouseleave',function(){
    var i = $(this).index();
    $(this).toggleClass('hover');
    $(this).prev().toggleClass('hover');
    $(this).next().toggleClass('hover');
    $(this).parent().prev().find('td:eq('+i+')').toggleClass('hover');
    $(this).parent().next().find('td:eq('+i+')').toggleClass('hover');
});

$('table').bind('touchmove', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $('td').removeClass('hover');
    var $this = $(document.elementFromPoint(event.touches[0].clientX, event.touches[0].clientY));
    var i = $this.index();
    $this.addClass('hover');
    $this.prev().addClass('hover');
    $this.next().addClass('hover');
    $this.parent().prev().find('td:eq('+i+')').addClass('hover');
    $this.parent().next().find('td:eq('+i+')').addClass('hover');
});
$('table').bind('touchend', function(event) {
    $('td').removeClass('hover');
});
