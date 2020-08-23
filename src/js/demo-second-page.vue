<template>
	<div>
		<h1 class="text-center pb-4">Horoscope Survey</h1>

		<div class="text-center">
			<p>Please enter your birthday:</p>

			<div style="height:10px"></div>

			<div class="mx-auto">
				<div 
					class="date-dropdown-div"
					style="display: inline-block"
				>
					<select 
						v-on:change="determineSign"
						v-model="dob_month"
						class="form-control"
					>
						<option value="">Month</option>
						<option v-for="month in (1,12)">{{month}}</option>
					</select>
				</div>

				<div 
					class="date-dropdown-div"
					style="display: inline-block"
				>
					<select 
						v-on:change="determineSign"
						v-model="dob_day"
						class="form-control"
					>
						<option value="">Day</option>
						<option v-for="day in (1,31)">{{day}}</option>
					</select>
				</div>

				<div 
					class="date-dropdown-div"
					style="display: inline-block"
				>
					<select 
						v-on:change="determineSign"
						v-model="dob_year"
						class="form-control"
					>
						<option value="">Year</option>
						<option v-for="year in getYearList()">{{year}}</option>
					</select>
				</div>
			</div>

			<p 
				v-if="dob_error_msg !== ''"
				v-cloak
				v-text="dob_error_msg"
				class="mt-15"
				style="color:red"
			></p>

			<p 
				v-if="sign !== ''"
				v-cloak
				v-text="signDisplayText"
				class="mt-15"
				style="color:green"
			></p>
		</div>

		<div style="height:40px"></div>


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

var getSign = require('horoscope').getSign;
var rj = require('rj-validate/dist/rj');


// ----------
// - Export -
// ----------

module.exports = (function() {

	// ---------------------
	// - Private Functions -
	// ---------------------

	function zeroPadNumber(n) {
		return (n < 10 ? '0' : '') + n;
	}

	function validateInput(dob_string, this_component) {
		var result = rj().test(dob_string, {
			required: true,
			date: 'yyyy-mm-dd',
		});

		if (result.valid) {
			this_component.dob_error_msg = '';
		} else {
			this_component.dob_error_msg = result.message;
			this_component.sign = '';
		}

		return result.valid;
	}

	// -----------------
	// - Vue Component -
	// -----------------
	
	return {
		data: function () {
			return {
				data_is_valid: true,
				dob_day: '',
				dob_month: '',
				dob_year: '',
				dob_error_msg: '',
				sign: '',
			};
		},

		computed: {
			missingData: function() {
				return (
					this.dob_month === ''
					|| this.dob_day === ''
					|| this.dob_year === ''
				);
			},

			signDisplayText: function() {
				return "You are a " + this.sign + "!";
			},
		},

		methods: {
			determineSign: function() {
				this.dob_error_msg = '';

				if (this.missingData) {
					return false;
				}

				this.sign = getSign({
					month: parseInt(this.dob_month),
					day: parseInt(this.dob_day),
				});
			},

			getYearList: function() {
				var today = new Date();
				var current_year = today.getFullYear();
				var output = [];
				
				for (var i = current_year; i >= 1900; i--) {
				    output.push(i);
				}

				return output;
			},

			submitForm: function() {
				var dob_string = this.dob_year 
					+ '-' + zeroPadNumber(this.dob_month) 
					+ '-' + zeroPadNumber(this.dob_day);

				var is_valid = validateInput(dob_string, this);

				if (is_valid) {
					this.$root.form.date_of_birth = dob_string;
					this.$emit('next-clicked');
				}
			},
		},
	};
})();
</script>