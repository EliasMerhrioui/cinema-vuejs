<template>
	<div>
		<!-- Display child component -->
		<HeaderMain />
		
		<main>
			<!-- User router-view directive -->
			<router-view
				v-slot="{ Component }"
				:key="$route.name"
			>
				<!-- Inject path component in component directive -->
				<component :is="Component" />
			</router-view>
		</main>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */

	/* 
		[VUE] Main imports
		Define main imports to create the application
	*/
		// App components
		import HeaderMain from './components/main/HeaderMain.vue';
	
	/*
		[VUE] Component
		Define properties and methods => https://fr.vuejs.org/v2/guide/components.html
	*/
		export default {
			// [VUE] Component name
			name: 'App',

			/*
				[VUE] Components => https://vuejs.org/guide/essentials/component-basics.html
				Used to inject child components
			*/
				components: {
					HeaderMain
				},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {
					}
				},
			//

			created: function(){
				
			}
		}
	//
</script>

<!-- Import main CSS -->
<style src="@/assets/css/main.css"></style>