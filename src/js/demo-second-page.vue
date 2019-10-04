<template>
	<div>
		<div class="text-center">
			<p>Please enter your birthday:</p>

			<input 
				id="date-of-birth"
				v-on:change="validateInput"
			/>

			<p 
				v-if="dob_error_msg !== ''"
				v-cloak
				v-text="dob_error_msg"
				style="color:red"
			></p>
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
				dob_error_msg: '',
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

				var isValid = rj().isValid(input.value, {
					required: true,
					date: 'yyyy-mm-dd',
				});

				if (isValid) {
					this.dob_error_msg = "";
				} else {
					this.dob_error_msg = "Invalid date";
				}

				return isValid;
			},
		},

		mounted: function() {
			initializeDatepicker(this);
		},
	};
})();
</script>