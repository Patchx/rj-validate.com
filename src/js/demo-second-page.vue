<template>
	<div>
		<p 
		    class="mx-auto text-center"
		    style="max-width:500px"
		>Second Page</p>

		<div class="text-center">
			<p>Please enter a date in the year 2019</p>

			<input 
				id="date-of-birth"
				placeholder="Your birthday here"
			/>

			<p id="dob-result-msg"></p>
		</div>

		<br>

		<div class="text-center">
		    <button 
		    	v-on:click="submitForm"
		        class="btn btn-lg btn-primary mb-4" 
		    >&nbsp;Submit&nbsp;</button>
		</div>
	</div>
</template>

<script>

// ----------------
// - Dependencies -
// ----------------

var datepicker = require('js-datepicker');
var rj = require('rj-validate/dist/rj');

// ----------
// - Export -
// ----------

module.exports = (function() {

	// ---------------------
	// - Private Functions -
	// ---------------------

	function initializeDatepicker(this_component) {
		datepicker('#date-of-birth', {
			formatter: (input, date, instance) => {
				const value = date.toISOString().split('T')[0];
				input.value = value;
			},

			onSelect: (instance, date) => {
				this_component.validateInput();
			},

			startDate: new Date(),
		});
	}

	// -----------------
	// - Vue Component -
	// -----------------
	
	return {
		data: function () {
			return {
				data_is_valid: true,
				date_of_birth: new Date(),
			};
		},

		methods: {
			submitForm: function() {
				var is_valid = this.validateInput();

				if (is_valid) {
					alert('submitted');
				}
			},

			validateInput: function() {
				var input = document.getElementById('date-of-birth');

				var isValid = rj().isValid(
					input.value, 
					{
						required: true,
						date: 'yyyy-mm-dd',
					}
				);

				if (isValid) {
					textColor = 'green';
					message = 'Looks good!';
				} else {
					textColor = 'red';
					message = "Please enter a date in the year 2019 in the format 'yyyy-mm-dd'";
				}

				var msgDiv = document.getElementById('dob-result-msg');
				msgDiv.style.color = textColor;
				msgDiv.innerHTML = message;

				return isValid;
			},
		},

		mounted: function() {
			initializeDatepicker(this);
		},
	};
})();
</script>