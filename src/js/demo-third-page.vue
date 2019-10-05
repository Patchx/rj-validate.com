<template>
	<div>
		<div class="text-center">
			<p>How extroverted are you?</p>

			<span 
				class="d-none d-sm-inline-block"
				style="margin-right:15px"
			>Extroverted</span>

			<div class="form-check form-check-inline">
				<input 
					class="form-check-input" 
					type="radio" 
					value="5"
				/>
			</div>
			
			<div class="form-check form-check-inline">
				<input 
					class="form-check-input" 
					type="radio" 
					value="4"
				/>
			</div>
			
			<div class="form-check form-check-inline">
				<input 
					class="form-check-input" 
					type="radio" 
					value="3" 
				/>
			</div>

			<div class="form-check form-check-inline">
				<input 
					class="form-check-input" 
					type="radio" 
					value="2" 
				/>
			</div>

			<div class="form-check form-check-inline">
				<input 
					class="form-check-input" 
					type="radio" 
					value="1" 
				/>
			</div>

			<span
				class="d-none d-sm-inline-block"
			>Introverted</span>
		</div>

		<br>

		<div class="text-center">
		    <button 
		    	v-on:click="submitForm"
		        class="btn btn-lg btn-primary mb-4" 
		    >&nbsp;Next&nbsp;</button>
		</div>
	</div>
</template>

<script>

// ----------------
// - Dependencies -
// ----------------

var rj = require('rj-validate/dist/rj');

// ----------
// - Export -
// ----------

module.exports = (function() {

	// ---------------------
	// - Private Functions -
	// ---------------------

	// -----------------
	// - Vue Component -
	// -----------------
	
	return {
		data: function () {
			return {
				data_is_valid: true,
			};
		},

		computed: {
		},

		methods: {
			submitForm: function() {
				var is_valid = this.validateInput();

				if (is_valid) {
					alert('submitted');
				}
			},

			validateInput: function() {
				var is_valid = rj().isValid(input.value, {
					required: true,
				});

				if (!is_valid) {
				}

				return is_valid;
			},
		},

		mounted: function() {
		},
	};
})();
</script>