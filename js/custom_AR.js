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
		selectYears: 15 
	  });
	  $(document).ready(function(){
		$('.modal').modal();
		$('#MandatoryData').modal({
		  dismissible: false,
		  opacity: .7,
		  }
		 );
	    $('#MandatoryData').modal('open');
	  });
	  $(document).ready(function(){
		$('.collapsible').collapsible();
	  });
	  $(document).ready(function(){
		$('.tooltipped').tooltip({delay: 50});
	  });
	  
	  $('.btn-success').click(function(){
			swal({
				title: "جيد!",
				text: "تم حفظ البيانات بنجاح!",
				type: "success",
				confirmButtonText: 'موافق',
			
	     });
	   });
	   $('.btn-error').click(function(){
			swal({
				title: "خطأ!",
				text: "نأسف ... الرجاء المحاولة لاحقاً!",
				type: "error",
				confirmButtonText: 'موافق',
			
	     });
	   });
	  $('.btn-warning-confirm').click(function(){
			swal({
				title: "هل أنت متأكد؟",
				text: "سوف يتم حذف خبرتك  'Senior UI/UX Designer	'!",
				type: "warning",
				showCancelButton: true,
				cancelButtonText:'رجوع',
				confirmButtonColor: '#DD6B55',
				confirmButtonText: 'حذف',
				closeOnConfirm: false
			},
			function(){
				swal({
				title: "تم الحذف!",
				text: "لقد تم حذف خبرتك!",
				type: "success",
				confirmButtonText: 'موافق',
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
