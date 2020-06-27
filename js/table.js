$(document).ready(function () {
  var table = $('#myTable').DataTable( {
  	scrollX: true,
	'dom': "lrtip"
	} );


  $("#search-bar").val('');

  $('input.search-bar').on('keyup', function () {
        table.column(0).search( this.value ).draw();
    } );

});