window.addEventListener('load', function () {

	var today = new Date();
	var server = $('#server').val();
	var folder = $('#folder').val();
	var report = $('#report').val();


	var datepicker = $('#datepicker').datepicker({
		language: $('#__USER_LOCALE__').val(),
		todayHighlight: true,
		format: 'yyyy-mm-dd',
		autoclose: true,
	})
	.on('changeDate', function (e) {
		var date = e.date;
		show_reports(date, server, folder, report);
	})

	datepicker.datepicker('setDate', today);



	$('#back').on('click', function (e) {
		e.preventDefault()
		var currentDate = moment(datepicker.datepicker('getDate'));
		datepicker.datepicker('setDate', new Date(currentDate.subtract(1, 'd').format()));
	})



	$('#foward').on('click', function (e) {
		e.preventDefault()
		var currentDate = moment(datepicker.datepicker('getDate'));
		datepicker.datepicker('setDate', new Date(currentDate.add(1, 'd').format()));
	})


	$('#print').on('click', function (e) {
		e.preventDefault();
		var currentDate = moment(datepicker.datepicker('getDate')).format('YYYY-MM-D') + 'T00:00:00';
		var options = 'rs:Command=Render';	
		var href = server + '?' + folder + 'report' + '&' + options + '&lecture=' + currentDate;
		Utils.popupWindow(href, 1200, 800);

	})


	$('.report').on('load', function () {
		$('body').removeClass('loading');
	})

	$('.report-informations').on('load', function () {
		$('body').removeClass('loading');		
	})

})




function show_reports (date, server, folder, report) {

	$('body').addClass('loading');

	var options = 'rs:Command=Render&rc:Toolbar=false';
	var formatDate = moment(date).format('YYYY-MM-D') + 'T00:00:00';



	$('.report').each(function (index, r) {
		var report = $(this).attr('data-report');
		var src = server + '?' + folder + report + '&' + options + '&lecture=' + formatDate;
		$(this).attr('src', src);
	})


	$('.report-informations').attr('src', server + '?' + folder + 'informations' + '&' + options + '&lecture=' + formatDate);



}