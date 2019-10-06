<template>
	<div>
		<div class="text-center">
			<p>How extroverted are you?</p>

			<div class="extrovert-radio-div">				
				<div>
					<input 
						type="radio" 
						id="radio-5"
						v-model="extroversion_score"
						value="5" 
					/>
				</div>

				<label for="radio-5">Very</label>
			</div>

			<div class="extrovert-radio-div">				
				<div>
					<input 
						type="radio"
						v-model="extroversion_score"
						value="4" 
					/>
				</div>

				<label>&nbsp;</label>
			</div>

			<div class="extrovert-radio-div">				
				<div>
					<input 
						type="radio"
						v-model="extroversion_score"
						value="3" 
					/>
				</div>

				<label>&nbsp;</label>
			</div>

			<div class="extrovert-radio-div">				
				<div>
					<input 
						type="radio"
						v-model="extroversion_score"
						value="2" 
					/>
				</div>

				<label>&nbsp;</label>
			</div>

			<div class="extrovert-radio-div">				
				<div>
					<input 
						type="radio" 
						id="radio-1"
						v-model="extroversion_score"
						value="1" 
					/>
				</div>

				<label for="radio-1">Not</label>
			</div>			
		</div>

		<br>

		<!-- <div class="d-sm-none">
			<p style="display:inline-block">Very</p>
			<p class="text-right" style="display:inline-block">Not at all</p>
		</div> -->

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
				extroversion_score: null,
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