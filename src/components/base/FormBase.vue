<template>
	<div 
		class="form-base-component"
	>
		<form @submit="$event => $event.preventDefault()">
			<!-- Loop on an object -->
			<ul>
				<li 
					v-for="( prop, idx ) in cmpFormValue" 
					:key="`item-${idx}`"
				>
					<label 
						:for="prop.name"
						v-text="prop.label"
					/>

					<input 
						:type="prop.type"
						:placeholder="prop.placeholder"
						:min="prop.min ? prop.min : undefined"
						:required="prop.required ? prop.required : undefined"
						v-model="prop.value"
					>
				</li>
			</ul>

			<!-- Define ButtonBase props strategy -->
			<ButtonBase 
				v-if="cmpLoginButton"
				:buttonvalue="cmpLoginButton"
				:buttondisabled="false"

				@onClickButton="onClickButton($event)"
			/>
		</form>

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
    	import ButtonBase from "./ButtonBase.vue";
	//

	/*
		[VUE] Component
		Define properties and methods => https://bit.ly/3GdqmXg
	*/
		export default {
			// [VUE] Component name
			name: 'FormBase',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: { ButtonBase },
			//

			/* 
				[VUE] Props => https://fr.vuejs.org/v2/guide/components-props.html
				Data binding CTRL => VIEW
			*/
				props: {
					formValue: {
						type: Object,
						required: true,
						default: () => {}
					}
				},
			//

			/*
				[VUE] Computed => https://vuejs.org/guide/essentials/computed.html
				Used to define simple in-template expression, 
				the expression below bind values from Store getters
			*/
				computed: {
					cmpFormValue: function(){
						return this.formValue
					}
				},
			//

			/*
				[VUE] Data => https://bit.ly/3GdqmXg
				Used to inject data in the Vue.js component
			*/
				data(){
					return {
						cmpLoginButton: {
							type: 'submit',
							content: 'Login',
						},
					}
				},
			//

			/*
				[VUE] Methods => https://bit.ly/3GdqmXg
				Used to add methods in Vue.js component
			*/
                methods: {
					onClickButton: function(event){
						// Prepare forme validation values
						let isValide = true;
						let validFomValue = {};

						// Get each item form
						for( let prop in this.cmpFormValue ){
							if( this.cmpFormValue[prop].required ){
								if( ['email', 'password', 'text', 'textarea'].indexOf( this.cmpFormValue[prop].type ) !== -1 ){
									if(!this.cmpFormValue[prop].value){ isValide = false } 
									else{
										if( this.cmpFormValue[prop].min ){
											if(this.cmpFormValue[prop].value.length < this.cmpFormValue[prop].min){ isValide = false }
										}
										else{
											if( !this.cmpFormValue[prop].value.length ){ isValide = false }
										}
									}
								}
							}

							// Add value in the valid form value
							validFomValue[prop] = this.cmpFormValue[prop].value;
						}
						
						// Check form validation
						if( isValide ){
							// Emit event to parent component
							this.$emit('onSubmit', { 
								from: 'FormBase',
								value: validFomValue,
							})
						}
					},
				},
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