<template>
	<b-container>
		<app-banner></app-banner>
		
		<b-row class="topMargin">	
			<b-col cols="6">
				<app-main-picture></app-main-picture>
				<app-welcome class='componentPadding'></app-welcome>
				<app-login 
					v-if="!memberLoggedIn" 
					@loginSuccesseful="memberIsLoggedin($event)"
					:isloggedin='isloggedin'
					class='componentPadding'></app-login>
				<app-member-avatar-show 
					v-if="memberLoggedIn" 
					:member="member"
					class='componentPadding'></app-member-avatar-show>
			</b-col>
			<b-col cols="6">
				<app-news-opinion></app-news-opinion>
			</b-col>
		</b-row>
	</b-container>	
</template>

<script>
import Banner from './Banner.vue'
import MainPicture from './MainPicture.vue'
import Welcome from './Welcome.vue'
import NewsOpinion from './NewsOpinion.vue'
import Login from './Login.vue'
import MemberAvatarShow from './MemberAvatarShow'

export default {
	data: function () {
		return {
			member: {},
			memberLoggedIn: false
		}
	},
    components: {
        appBanner: Banner,
        appMainPicture: MainPicture,
        appWelcome: Welcome,
        appNewsOpinion: NewsOpinion,
        appLogin: Login,
        appMemberAvatarShow: MemberAvatarShow
    },
    computed: {
      	isloggedin() {
	            return this.$store.getters.isloggedin;
			}
	},
	methods: {
		memberIsLoggedin(event) {
			this.$store.dispatch('updateLogin', event);

			this.member = event;
			this.$store.dispatch('updateMember', event);

			if (event == "")
			{
				this.memberLoggedIn = false;
			}
			else
			{
				this.memberLoggedIn = true;
			}
			
		}
	},
	created() {
		var memberStr = localStorage.getItem("dddLogin");
		if (memberStr != null)
		{
			console.log("member: "+memberStr);

			var member = JSON.parse(memberStr);
			
			this.member = member;

			console.log("store: "+this.$store);

			this.$store.dispatch('updateLogin', true);
			this.$store.dispatch('updateMember', member);

			this.memberLoggedIn = true;
		}
	}
}
</script>

<style scoped>
.topMargin {
	padding-top:40px;
}	

.componentPadding {
	padding-top:40px;
}

</style>