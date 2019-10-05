
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

// ----------------
// - Vue Instance -
// ----------------

var vue_app = new Vue({
	el: '#app',

	data: {
		current_page: "first-page",
	},

	components: {
		'first-page': first_page,
		'second-page': second_page,
		'third-page': third_page,
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
			};

			return event_map[this.current_page];
		},

		pageProps: function() {
		},

		title: function() {
			var first_title_array = ['first-page', 'second-page', 'third-page'];

			if (first_title_array.indexOf(this.current_page) !== -1) {
				return 'Horoscope Survey';
			}

			return 'Title here';
		},
	},

	methods: {
		getSecondPage: function() {
			this.current_page = 'second-page';
		},

		getThirdPage: function() {
			this.current_page = 'third-page';
		},
	},
});
