<template>
	<div 
		class="create-view-component"
	>
		<p>RECHERCHE VIEW</p>
		<ImageBase />
		<FormBase />
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */

	/* 
		[VUE] Main imports
		Define main imports to create the application
	*/
    	import ImageBase from '../components/base/ImageBase.vue';
		import FormBase from "../components/base/FormBase.vue";
	//

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'CreateView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { ImageBase, FormBase },
			//

			/*
				[VUE] Computed => https://vuejs.org/guide/essentials/computed.html
				Used to define simple in-template expression, 
				the expression below bind values from Store getters
			*/
				computed: {},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
                methods: {},
            //

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the instance has finished processing all state-related options.
			*/
				created: function(){},
			//

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the component has been mounted.
			*/
				mounted: function(){},
			//
		}
	//
</script>

<style scoped>
</style>