<template>
  	<div>
  		<b-row>
  			<b-col cols="3">
	    		<img @click="navigateToMemberUpdateMember" class="imgAvatarNav" :src="avatarImagePath">
	    	</b-col>
	    	<b-col cols=9>	
	    		<div class="imgTextTop">Welcome</div>
	    		<br>
	    		<div class="imgTextBottom">{{member.screenname}}!</div>
	    	</b-col>
	    </b-row>		
	</div>
</template>

<script>

const baseImgAvatarUrl = '/static/img/avatars/';

export default {
	props: {
		member: {
			type:Object,
			required: true
		}
	},
	methods: {
		navigateToMemberUpdateMember() {
				// so is this with named routes
				this.$router.push( { name: 'memberupdatemember' } );
			}
	
	},
	computed: {
		avatarImagePath: function() {
			return baseImgAvatarUrl + this.member.avatar;
		}
		
	}
}

</script>

<style scoped>

.imgAvatarNav {
	height:125px;
    vertical-align:middle;
    padding-right:15px;
    cursor: pointer;
}

.imgTextTop {
	font-family: 'Loto', sans-serif;
	font-size: 30px;
	color:teal;
	text-align: center;
}

.imgTextBottom {
	font-family: 'Loto', sans-serif;
	font-size: 18px;
	color:teal;
	font-style: italic;
	text-align: center;
}
</style>