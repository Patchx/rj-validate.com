<template>
	<div>
		<h1 class="text-center pb-4">Optional Questions</h1>

		<div class="row">
			<div class="col-12">
				<div 
					class="form-group mx-auto text-center"
					style="width:125px"
				>
					<label>Gender:</label>

					<select 
						v-model="$root.form.gender"
						class="form-control"
					>
						<option value=""></option>
						<option value="male">Male</option>
						<option value="female">Female</option>
						<option value="nonbinary">Nonbinary</option>
					</select>
				</div>
			</div>
		</div>

		<p 
			v-if="gender_error_msg !== ''"
			v-cloak
			v-text="gender_error_msg"
			class="text-center"
			style="color:red"
		></p>

		<br>

		<div class="row">
			<div class="col-12">
				<div 
					class="form-group mx-auto text-center"
					style="width:300px"
				>
					<label>Myer's Briggs Personality Type:</label>
					
					<p><a 
						href="https://psychcentral.com/quizzes/personality/start.php"
						target="_blank"
					>Take the test</a></p>

					<input 
						v-model="$root.form.myers_briggs"
						class="form-control mx-auto"
						maxlength="4"
						style="width:100px; text-transform:uppercase"
					/>
				</div>
			</div>
		</div>

		<p 
			v-if="myers_briggs_error_msg !== ''"
			v-cloak
			v-text="myers_briggs_error_msg"
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
				gender_error_msg: '',
				myers_briggs_error_msg: '',
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
				var result = rj().validateAll([
				    {
				        name: 'gender',
				        value: this.$root.form.gender,
				        rules: {
				            in: ['', 'male', 'female', 'nonbinary'],
				        },
				    },

				    {
				        name: 'myers_briggs',
				        value: this.$root.form.myers_briggs.toUpperCase(),
				        rules: {
				            in: [
				            	'', 
				            	'ISTJ', 'ISFJ', 'INFJ', 'INTJ',
				            	'ISTP', 'ISFP', 'INFP', 'INTP',
				            	'ESTP', 'ESFP', 'ENFP', 'ENTP',
				            	'ESTJ', 'ESFJ', 'ENFJ', 'ENTJ',
				            ],
				        },
				    },
				]);

				if (result.gender.valid) {
					this.gender_error_msg = '';
				} else {
					this.gender_error_msg = result.gender.message;
				}

				if (result.myers_briggs.valid) {
					this.myers_briggs_error_msg = '';
				} else {
					this.myers_briggs_error_msg = result.myers_briggs.message;
				}

				return result.gender.valid && result.myers_briggs.valid;
			},
		},

		mounted: function() {
		},
	};
})();
</script>