<template>
	<div 
		class="create-view-component"
	>
		<p>LOGIN VIEW</p>
		<ImageBase />
		<FormBase />   
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */

	
    	import ImageBase from '../components/base/ImageBase.vue';
		import FormBase from "../components/base/FormBase.vue";
	
		export default {
			name: 'LoginView',

				components: { ImageBase, FormBase },

				computed: {},

				data(){
					return {}
				},

                methods: {},
    
				created: function(){},

			
				mounted: function(){},
		}
</script>

<style scoped>
</style>