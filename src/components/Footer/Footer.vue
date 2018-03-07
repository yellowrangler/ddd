<template>
	<div class="ddd-footer">
			<b-row class="footer-component-spacing">
				<b-col cols="5">
					<app-footer-info></app-footer-info>
				</b-col>

				<b-col cols="3">

				</b-col>

				<b-col cols="4">
					<app-footer-snacks></app-footer-snacks>
				</b-col>
					
			</b-row>
	</div>
</template>

<script>
import FooterInfo from './FooterInfo.vue';
import FooterSnacks from './FooterSnacks.vue';

export default {
	components: {
		appFooterInfo: FooterInfo,
		appFooterSnacks: FooterSnacks
	}
	
}
</script>

<style scoped>
.ddd-footer {
	margin-top: 60px;
	background:#88C9C4;
	height:525px;
	color:Snow;
	font-size:15px;
	padding-left:25px;
	text-decoration: none;
	font-family:"Lusitana", Arial, Helvetica, sans-serif;
}

.footer-component-spacing {
	padding-top:40px;
}
</style>