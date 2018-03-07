<template>
	<b-container class="topPagePadding">
		<b-row>
		    <b-col cols="12">
		      	<h2 class="headerTitle">Manage Your Information</h2>
		  	</b-col>
  		</b-row>

  		<b-row class="topPagePadding">
		    <b-col cols="12">
	
		      	<b-form id="memberupdatememberForm" name="memberupdatememberForm" style="padding:10px;" >
					<b-row>
						<b-col  cols="6">
							<b-form-group inline
						      id="membernameLabel"
						      description="Enter your name."
						      label="Member name"
						      label-for="membername"
						      :invalid-feedback="invalidMembernameFeedback"
						      :valid-feedback="validMembernameFeedback"
						      :state="membernameState"
						  	>
			    				<b-form-input id="membername" :state="membernameState" v-model.trim="member.membername">
			    				</b-form-input>
		  					</b-form-group>

		  					<b-form-group
						      id="screennameLabel"
						      description="Change your Screeen name."
						      label="Screen name"
						      label-for="screenname"
						      :invalid-feedback="invalidScreennameFeedback"
						      :valid-feedback="validScreennameFeedback"
						      :state="screennameState"
						  	>
			    				<b-form-input id="screenname" :state="screennameState" v-model.trim="member.screenname">
			    				</b-form-input>
		  					</b-form-group>

							<b-form-select v-model="member.gender" :options="getMemberGenderList" class="mb-3">
						      	<template slot="first">
							        <!-- this slot appears above the options from 'options' prop -->
							        <option :value="null" disabled>-- Please select a Gender --</option>
						      	</template>
						    </b-form-select>
		  				</b-col>	

		  				<b-col  offset-md="1" style="padding-top:30px;" cols="5">
				    		<div style="margin:auto;">
				    			<img style="margin:auto;display:block;height:185px;" align="center" :src='thinkingImgPath'>
				    		</div>
				    		
			                <div style="padding-top:35px; text-align:center; font-weight:bold; font-size:13px; font-style:italic;">
			                Think Carefully for the Right Name. Make it Fun & Clean!
			                </div>
				    	</b-col>
			    	</b-row>
					
					<b-row>
						<hr class="hrBreak">
					</b-row>
		      	</b-form>
		  	</b-col>
  		</b-row>
	</b-container>	
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex';

const baseUrl = 'http://10.0.0.9/';
const baseImgUrl = '/static/img/';

export default {
	data () {
	    return {
	      member: {
	      	membername: "",
	      	screenname: "",
	      	gender: ""
	      },
	      thinkingImg : 'thinking.png'
	    }
	},
  	computed: {
  		...mapGetters([
        'getMemberStatusList',
        'getMemberRoleList',
        'getMemberGenderList',
        'getMemberRoleList',
        ]),
  		thinkingImgPath() {
	            return baseImgUrl+this.thinkingImg;
		},
		membernameState () {
		  return this.member.membername.length >= 4 ? true : false
		},
		screennameState () {
		  return this.member.screenname.length >= 2 ? true : false
		},
		invalidMembernameFeedback () {
		  if (this.member.membername.length > 4) {
		    return ''
		  } else if (this.member.membername.length > 0) {
		    return 'Enter at least 4 characters'
		  } else {
		    return 'Please enter something'
		  }
		},
		validMembernameFeedback () {
		  return this.membernameState === true ? 'Thank you' : ''
		},
		invalidScreennameFeedback () {
		  if (this.member.screenname.length > 4) {
		    return ''
		  } else if (this.member.screenname.length > 0) {
		    return 'Enter at least 4 characters'
		  } else {
		    return 'Please enter something'
		  }
		},
		validScreennameFeedback () {
		  return this.screennameState === true ? 'Thank you' : ''
		}
  	},
	created() {
	  	var memberStr = localStorage.getItem("dddLogin");
		if (memberStr != null)
		{
			console.log("member: "+memberStr);

			// member = JSON.parse(memberStr);
			
			axios.post(baseUrl+'rest/getmember.php', memberStr)
			.then(res => {
				var member = res.data;
				console.log('get member' + member)

				this.member = member;
			})
			.catch(error => { 
				console.log(error)
			})
		}   
  }
}
</script>

<style scoped>

.headerTitle {
	color:#6C0000;
	font-family: 'aileron', 'Oleo Script Swash Caps', Helvetica, sans-serif;
	font-weight: 700;
}

.topPagePadding {
	padding-top: 25px;
}

.hrBreak {
	width: 95%;
	height: 5px;
	margin-left: auto;
	margin-right: auto;
	background-color:#058689;
	color:#058689;
	border: 0 none;
}

</style>