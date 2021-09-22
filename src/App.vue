<template>
	<router-view />
	<FooterComponent/> 
	<ModelComponent/>
</template>

<script>
import FooterComponent from './components/Layout/Footer'
import ModelComponent from './components/Layout/Model'

export default {
	name: 'App',
	components: {
		FooterComponent,
		ModelComponent
	},
}
</script>

<style>
#app {
  font-family:Arial,sans-serif !important;
  /*-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
     /* --font-family-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    --font-family-monospace: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;*/

}

</style>
