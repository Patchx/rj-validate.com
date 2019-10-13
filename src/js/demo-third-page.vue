<template>
	<div>
		<h1 class="text-center pb-4">Horoscope Survey</h1>

		<div class="row">
			<div class="col-12">
				<div class="form-group text-center">
					<p>How extroverted are you?</p>

					<div class="extrovert-radio-div align-top">				
						<div>
							<input 
								type="radio" 
								id="radio-5"
								v-model="$root.form.extroversion_score"
								value="5" 
							/>
						</div>

						<label for="radio-5">Very</label>
					</div>

					<div class="extrovert-radio-div align-top">				
						<div>
							<input 
								type="radio"
								v-model="$root.form.extroversion_score"
								value="4" 
							/>
						</div>

						<label>&nbsp;</label>
					</div>

					<div class="extrovert-radio-div align-top">				
						<div>
							<input 
								type="radio"
								v-model="$root.form.extroversion_score"
								value="3" 
							/>
						</div>

						<label>&nbsp;</label>
					</div>

					<div class="extrovert-radio-div align-top">				
						<div>
							<input 
								type="radio"
								v-model="$root.form.extroversion_score"
								value="2" 
							/>
						</div>

						<label>&nbsp;</label>
					</div>

					<div class="extrovert-radio-div align-top">				
						<div>
							<input 
								type="radio" 
								id="radio-1"
								v-model="$root.form.extroversion_score"
								value="1" 
							/>
						</div>

						<label for="radio-1">Not<br>at all</label>
					</div>			
				</div>
			</div>
		</div>

		<p 
			v-if="score_error_msg !== ''"
			v-cloak
			v-text="score_error_msg"
			class="text-center"
			style="color:red"
		></p>

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
				score_error_msg: '',
			};
		},

		computed: {
		},

		methods: {
			submitForm: function() {
				var is_valid = this.validateInput();

				if (is_valid) {
					this.$emit('next-clicked');
				}
			},

			validateInput: function() {
				const score = this.$root.form.extroversion_score;

				var result = rj().test(score, {
					required: true,
					in: ['1','2','3','4','5'],
				});

				if (result.valid) {
					this.score_error_msg = '';
				} else {
					this.score_error_msg = result.message;
				}

				return result.valid;
			},
		},

		mounted: function() {
		},
	};
})();
</script>