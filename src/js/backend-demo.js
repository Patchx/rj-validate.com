
// ----------------
// - Dependencies -
// ----------------

const Vue = require('vue/dist/vue.common');

// ------------------
// - Vue Components -
// ------------------

var first_page = require('./demo-first-page.vue').default;
var second_page = require('./demo-second-page.vue').default;

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
	},

	computed: {
		pageEventListeners: function() {
			var event_map = {
				'first-page': {
					'next-clicked': this.getSecondPage,
				},
			};

			return event_map[this.current_page];
		},

		pageProps: function() {
		},

		title: function() {
			if (['first-page', 'second-page'].indexOf(this.current_page) !== -1) {
				return 'Horoscope Survey';
			}

			return 'Title here';
		},
	},

	methods: {
		getSecondPage: function() {
			this.current_page = 'second-page';
		},
	},
});
