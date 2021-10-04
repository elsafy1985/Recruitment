	  $(document).ready(function() {
        Materialize.updateTextFields();
      });
	  $(document).ready(function(){
        $('.slider').slider();
      });
	  $(document).ready(function() {
        $('select').material_select();
      });
	  $('.datepicker').pickadate({
		selectMonths: true, 
		selectYears: 15,
	  });
	  
	  $(document).ready(function(){
		$('.modal').modal();
		$('#MandatoryData').modal({
		  dismissible: false,
		  opacity: .7,
		  }
		 );
	    $('#MandatoryData').modal('close');
	  });
	  $(document).ready(function(){
		$('.collapsible').collapsible();
	  });
	  $(document).ready(function(){
		$('.tooltipped').tooltip({delay: 50});
	  });
	  $('.btn-success').click(function(){
			swal({
				title: "Good!",
				text: "You saved your data successfully!",
				type: "success",
				confirmButtonText: 'OK',
	     });
	   });
	   $('.btn-error').click(function(){
			swal({
				title: "Error!",
				text: "Sorry .. Please try again later!",
				type: "error",
				confirmButtonText: 'OK',
	     });
	   });
	  $('.btn-warning-confirm').click(function(){
			swal({
				title: "Are you sure?",
				text: "You will Delete your experience 'Senior UI/UX Designer	'!",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'Yes, delete it!',
				closeOnConfirm: false
			},
			function(){
				swal({
				title: "Deleted!",
				text: "Your experience has been deleted!",
				type: "success",
				confirmButtonText: 'OK',
	     });
	     });
	   });
	   
	  $('.chips-initial').material_chip({
		data: [{
		  tag: 'Web Design',
		}, {
		  tag: 'Dreamweaver',
		}, {
		  tag: 'Bootstrapping',
	    }, {
		  tag: 'Responsive Web Design',
		}, {
		  tag: 'User Experience Design',
	    }, {
		  tag: 'HTML5',
		}, {
		  tag: 'CSS3',
	    }, {
		  tag: 'Adobe Photoshop',
		}, {
		  tag: 'Flash Animation',
	    }, {
		  tag: 'User Interface Design',
		}, {
		  tag: 'Interaction Design',
		}],
	  });
	  
