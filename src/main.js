import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import HomePage from './components/views/DashboardView.vue'
import AllMedia from './components/views/AllMediaView.vue'
import AccountSettings from './components/views/AccountSettingsView.vue'
import '@babel/polyfill'
import MultiFiltersPlugin from './plugins/MultiFilters'

Vue.use(VueRouter);
Vue.use(MultiFiltersPlugin);

const router = new VueRouter({
	routes:[
		{
			path: '/',
			component: HomePage,
		},

		{
			path: '/allmedia',
			component: AllMedia,
		},

		{
			path: '/accountsettings',
			component: AccountSettings,
		}
	]

});


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
