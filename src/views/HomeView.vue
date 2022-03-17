<template>
	<div 
		class="home-view-component"
	>
	<h1>TERE</h1>
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

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'HomeView',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {  },
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
					return {
						cmpUserinfo: this.$store.getters.userinfos,
						cmpLoginFormValue: {
							email: {
								name: 'email',
								value: 'julien@dwsapp.io',
								label: 'Your email',
								placeholder: 'Required min. 5 charts',
								type: 'email',
								min: 5,
								required: true
							},
							password: {
								name: 'password',
								value: 'azertyuiop',
								label: 'Your password',
								placeholder: 'Required min. 5 charts',
								type: 'password',
								min: 5,
								required: true
							}
						}
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
                methods: {
					onSubmit: function(event){
						/* 
							[STORE] Dispatch
							Call a store action
						*/
							this.$store.dispatch( 'getOperator', { 
								query: `users/?email=${event.value.email}&password=${event.value.password}`
							});
						//
					}
				},
            //

			/*
				[VUE] Hooks => https://vuejs.org/api/options-lifecycle.html
				Called after the instance has finished processing all state-related options.
			*/
				created: function(){
					// Subscribe to state mutation
					this.$store.subscribe( (mutation) => {
						if( mutation.type === 'userinfos' ){
							if( this.$store.getters.userinfos !== null ){
								this.cmpUserinfo = this.$store.getters.userinfos
							}
							else{
								this.cmpUserinfo = undefined
							}
						}
					})
				},
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