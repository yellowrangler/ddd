<template>
	<b-container>
		<app-banner></app-banner>
		
		<b-row class="topMargin">	
			<b-col cols="6">
				<app-main-picture></app-main-picture>
				<app-welcome class='componentPadding'></app-welcome>
				<app-login 
					v-if="!memberLoggedIn" 
					@loginSuccessful="loginMember($event)"
					class='componentPadding'></app-login>
				<app-member-avatar-show 
					v-if="memberLoggedIn" 
					:member="member"
					class='componentPadding'></app-member-avatar-show>
				<app-logoff 
					v-if="memberLoggedIn" 
					@logoffSuccessful="logoffMember($event)"
					class='componentPadding'></app-logoff>	
			</b-col>
			<b-col cols="6">
				<app-news-opinion></app-news-opinion>
			</b-col>
		</b-row>

		<b-modal v-model="modalShowMessage" :title="modalTitle">
			<div class="d-block text-center">
				<span>{{ modalMessage }}</span>
			</div>
	    </b-modal>
	</b-container>	
</template>

<script>
import Banner from './Banner.vue'
import MainPicture from './MainPicture.vue'
import Welcome from './Welcome.vue'
import NewsOpinion from './NewsOpinion.vue'
import Login from './Login.vue'
import Logoff from './Logoff.vue'
import MemberAvatarShow from './MemberAvatarShow'

export default {
	data: function () {
		return {
			member: {},
			memberLoggedIn: false,
			modalShowMessage: false,
			modalMessage: "",
			modalTitle: ""
		}
	},
    components: {
        appBanner: Banner,
        appMainPicture: MainPicture,
        appWelcome: Welcome,
        appNewsOpinion: NewsOpinion,
        appLogin: Login,
        appLogoff: Logoff,
        appMemberAvatarShow: MemberAvatarShow
    },
    computed: {
      	isloggedin() {
            return this.$store.getters.isloggedin;
		}
	},
	methods: {
		logoffMember(event) {
			if (event == true)
			{
				this.$store.dispatch('logoff', event);

				this.member = "";
				this.$store.dispatch('updateMember', this.member);
				this.memberLoggedIn = false;

				// modal window management
				this.modalMessage = "Logoff Successful!";
				this.modalTitle = "Logoff Status";
				this.modalShowMessage = true;
			}
			else
			{
				this.memberLoggedIn = true;

				// modal window management
				this.modalTitle = "Logoff Status";
				this.modalMessage = "Logoff NOT Successful!";
				this.modalShowMessage = true;
			}
			
		},
		loginMember(event) {
			console.log("in login member. event="+event);
			if (event == "")
			{
				this.member = "";
				this.$store.dispatch('login', this.member);
				this.memberLoggedIn = false;

				// modal window management
				this.modalTitle = "Logon Status";
				this.modalMessage = "Logon NOT Successful!";
				this.modalShowMessage = true;
			}
			else
			{
				this.member = event.member;
				this.$store.dispatch('updateMember', this.member);

				this.memberLoggedIn = true;

				// modal window management
				this.modalTitle = "Logon Status";
				this.modalMessage = event.text;
				this.modalShowMessage = true;
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

			this.$store.dispatch('login', true);
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