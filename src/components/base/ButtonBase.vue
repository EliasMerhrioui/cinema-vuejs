<template>
	<div 
		class="button-base-component"
	>
		<button 
			:type="buttonvalue.type"
			:disabled="buttondisabled"
			v-text="buttonvalue.content"

			@click="$emit('onClickButton', {
				from: 'ButtonBase',
				type: buttonvalue.type,
			})"
		/>
	</div>
</template>

<script>
	/* eslint-disable no-console */
	/* eslint-disable no-unused-vars */
	/* eslint-disable no-mixed-spaces-and-tabs */
	
	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'ButtonBase',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {},
			//

			/* 
				[VUE] Props => https://fr.vuejs.org/v2/guide/components-props.html
				Data binding CTRL => VIEW
			*/
				props: {
					buttonvalue: {
						type: Object,
						required: true,
						default: () => {}
					},
					buttondisabled: {
						type: Boolean,
						required: false,
						default: () => false
					}
				},
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