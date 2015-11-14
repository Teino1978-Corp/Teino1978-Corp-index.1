var $inputs = $('.float-placeholder-input'),
	update = function(){
		var $input = $(this),
			$wrapper = $input.closest('.float-placeholder');

		if( $input.val() !== '' || $input.is(':focus') || $input.prop('tagName') === 'SELECT'){
			$input.addClass('is-floating');
		} else {
			$input.removeClass('is-floating');
		}

		if($input.is(':focus')){
			$wrapper.addClass('is-focused');
		} else {
			$wrapper.removeClass('is-focused');
		}
	};

$inputs.each( update );
$inputs.on('click focus input blur', update);