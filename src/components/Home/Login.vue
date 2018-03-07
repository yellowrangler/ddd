<template>
  <div>
  	<b-row class="panel">	
  		<div class="panelHeading">
	        <span class="panel-title">Dare Devil Ducks Login</span>
      	</div>
		<b-col class='formOffset' offset="1" cols="11">
		    <b-form>
		        <b-form-input 
		        	id="screenname"
                    type="text"
                    v-model="screenname"
                    required
                    placeholder="Enter Login Screen Name">
		        </b-form-input>

				<div class='formFieldsOffset'></div>
		      
		        <b-form-input 
		        	id="passwd"       
		            type="password"
                    v-model="passwd"
                    required
                    placeholder="Enter Password">
		        </b-form-input>

		        <div class='formFieldsOffset'></div>

				<b-button @click.prevent="DoLogin" variant="primary">Submit</b-button>

		      <div class='formFieldsOffset'></div>
		    </b-form>
		</b-col>
	</b-row>	    
  </div>
</template>

<script>
import axios from 'axios'

const baseUrl = 'http://10.0.0.9/';

export default {
	data () {
		return {
		    screenname: '',
		    passwd: ''
		}
	},
	methods: {
		DoLogin () {
			const formData = {
	          screenname: this.screenname,
	          passwd: this.passwd
	        }

	        axios.post(baseUrl + 'rest/login.php', formData)
			.then(res => {
				var msg = res.data;
				console.log(msg)

				if (msg.rc == 1)
				{
		        	this.$emit('loginSuccesseful', msg.member);
		        	alert(msg.text);
				}
				else
				{
					this.$emit('loginSuccesseful', "");
					alert(msg.text);
				}
					
			})
			.catch(error => { 
				console.log(error)
			})
        }
	}
}

</script>

<style scoped>
.panel {
	border: 1px solid lightgrey;
	width: 90%;
	margin: auto; 
}

.panelHeading {
	border: 1px solid #337ab7;
	color:white;
	background-color: #337ab7;
	text-align: center; 
	width:100%;
	font-family: 'Open Sans', sans-serif;
	font-size: 18px;
}

.formOffset {
	padding-top: 35px;
}

.formFieldsOffset {
	padding-top: 15px;
}

</style>