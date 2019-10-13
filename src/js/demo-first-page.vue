<template>
	<div>
		<h1 class="text-center pb-4">Horoscope Survey</h1>

		<p 
		    class="mx-auto text-center"
		    style="max-width:500px"
		>Many ancient civilizations believed that a person's personality was determined, in part, by the day of their birth. Let's put that theory to the test, with good ol' fashion data collection!</p>

		<br>

		<div class="text-center">
		    <button 
		    	v-on:click="emitNextPage"
		        class="btn btn-lg btn-primary mb-4" 
		    >&nbsp;Get Started&nbsp;</button>
		</div>
	</div>
</template>

<script>
module.exports = (function() {

	// -----------------
	// - Vue Component -
	// -----------------

	return {
		data: function () {
			return {
			};
		},

		methods: {
			emitNextPage: function() {
				this.$emit('next-clicked');
			}
		},
	};
})();
</script>