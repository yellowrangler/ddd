<template>
	<div>
		<img style="width:100%;" :src="mascotImgPath" alt="daredevil ducks mascot" class="img-rounded">
	</div>
</template>


<script>

const baseImgUrl = '/static/img/';

export default {
	data: function () {
		return {
			mascotImg : 'DonaldDuckSpring2018HomePage.png'
		}
	},
    computed: {
      	mascotImgPath() {
	            return baseImgUrl+this.mascotImg;
			}
	}
}

</script>

<style scoped>

.mainTitle {
	color:#6C0000;
	font-size: 46px;
	font-family: 'Damion', 'Oleo Script Swash Caps', Helvetica, sans-serif;
	font-weight: 700;
	text-align:center;
}

</style>