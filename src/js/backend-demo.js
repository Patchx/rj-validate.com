
// ----------------
// - Dependencies -
// ----------------

const Vue = require('vue/dist/vue.common');

// ------------------
// - Vue Components -
// ------------------

var first_page = require('./demo-first-page.vue').default;
var second_page = require('./demo-second-page.vue').default;
var third_page = require('./demo-third-page.vue').default;
var fourth_page = require('./demo-fourth-page.vue').default;

// ----------------
// - Vue Instance -
// ----------------

var vue_app = new Vue({
	el: '#app',

	data: {
		current_page: "first-page",

		form: {
			date_of_birth: '',
			extroversion_score: null,
			gender: '',
			myers_briggs: '',
		}
	},

	components: {
		'first-page': first_page,
		'second-page': second_page,
		'third-page': third_page,
		'fourth-page': fourth_page,
	},

	computed: {
		pageEventListeners: function() {
			var event_map = {
				'first-page': {
					'next-clicked': this.getSecondPage,
				},

				'second-page': {
					'next-clicked': this.getThirdPage,
				},

				'third-page': {
					'next-clicked': this.getFourthPage,
				},

				'fourth-page': {
					'next-clicked': this.getFifthPage,
				},
			};

			return event_map[this.current_page];
		},

		pageProps: function() {
		},
	},

	methods: {
		getSecondPage: function() {
			this.current_page = 'second-page';
		},

		getThirdPage: function() {
			this.current_page = 'third-page';
		},

		getFourthPage: function() {
			this.current_page = 'fourth-page';
		},

		getFifthPage: function() {
			// this.current_page = 'fifth-page';
		},
	},
});
