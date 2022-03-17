<template>
	<header 
		class="header-main-component"
	>
        <nav>
            <ul class="flex-container">
                <li>
                    <ul class="flex-container">
                        <li>
                            <!-- 
                                v-text: input value in the HTML tag
                                @click: bind event on HTML tag
                            -->
                            <button
                                v-text="`Home`"
                                @click="$router.push( { name: 'HomeView' } )"
                            />
                        </li>
                        <li>
                            <button
                                v-text="`Single`"
                                @click="$router.push( { name: 'SingleView', params: { type: `post`, id: 2 } } )"
                            />
                        </li>
						<li>
                            <button
                                v-text="`Create`"
                                @click="$router.push( { name: 'CreateView' } )"
                            />
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
	</header>
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
			name: 'HeaderMain',

			/*
				[VUE] Components => https://bit.ly/3GdqmXg
				Used to inject children components
			*/
				components: {},
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
					}
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
				created: function(){
					// Subscribe to state mutation
					this.$store.subscribe( (mutation) => {
						if( mutation.type === 'USERINFOS' ){
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
		}
	//
</script>

<style scoped>
</style>