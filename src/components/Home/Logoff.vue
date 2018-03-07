<template>
	<div>
		<div>
			<b-button @click="DoLogoff" variant="primary">Logoff</b-button>    
		</div>
	</div>
</template>

<script>

export default {
	methods: {
		DoLogoff () {
        	this.$emit('logoffSuccessful', true);
        }
	}
}

</script>
<style scoped>


</style>