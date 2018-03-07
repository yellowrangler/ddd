import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		isloggedin: false,
		member: {},
		memberstatusList: [ 
	        { value :  "active", text : "active" },
	        { value :  "inactive", text : "inactive" }
	    ],
		memberroleList: [ 
	        { value :  "member", text : "member" },
	        { value :  "admin", text : "admin" },
	        { value :  "expert", text : "expert" }
	    ],
		membergenderList: [ 
	        { value :  "Male", text : "Male" },
	        { value :  "Female", text : "Female" },
	        { value :  "Other", text : "Other" }
	    ],
	    stateList : [ 
	        { value : "AL", text : "Alabama" },
	        { value : "AK", text : "Alaskan" },
	        { value : "AZ", text : "Arizona" },
	        { value : "AR", text : "Arkansas" },
	        { value : "CA", text : "California" },
	        { value : "CO", text : "Colorado" },
	        { value : "CT", text : "Connecticut" },
	        { value : "DE", text : "Delaware" },
	        { value : "DC", text : "District of Columbia" },
	        { value : "FL", text : "Florida" },
	        { value : "GA", text : "Georgia" },
	        { value : "HI", text : "Hawaiin" },
	        { value : "ID", text : "Idaho" },
	        { value : "IL", text : "Illinois" },
	        { value : "IN", text : "Indiana" },
	        { value : "IA", text : "Iowa" },
	        { value : "KS", text : "Kansas" },
	        { value : "KY", text : "Kentucky" },
	        { value : "LA", text : "Louisiana" },
	        { value : "ME", text : "Maine" },
	        { value : "MD", text : "Maryland" },
	        { value : "MA", text : "Massachusetts" },
	        { value : "MI", text : "Michigan" },
	        { value : "MN", text : "Minnesota" },
	        { value : "MS", text : "Mississippi" },
	        { value : "MO", text : "Missouri" },
	        { value : "MT", text : "Montana" },
	        { value : "NE", text : "Nebraska" },
	        { value : "NV", text : "Nevada" },
	        { value : "NH", text : "New Hampshire" },
	        { value : "NJ", text : "New Jersey" },
	        { value : "NM", text : "New Mexico" },
	        { value : "NY", text : "New York" },
	        { value : "NC", text : "North Carolina" },
	        { value : "ND", text : "North Dakota" },
	        { value : "OH", text : "Ohio" },
	        { value : "OK", text : "Oklahoma" },
	        { value : "OR", text : "Oregon" },
	        { value : "PA", text : "Pennsylvania" },
	        { value : "RI", text : "Rhode Island" },
	        { value : "SC", text : "South Carolina" },
	        { value : "SD", text : "South Dakota" },
	        { value : "TN", text : "Tennessee" },
	        { value : "TX", text : "Texas" },
	        { value : "UT", text : "Utah" },
	        { value : "VT", text : "Vermont" },
	        { value : "VA", text : "Virginia" },
	        { value : "WA", text : "Washington" },
	        { value : "WV", text : "West Virginia" },
	        { value : "WI", text : "Wisconsin" },
	        { value : "WY", text : "Wyoming" }
	    ]
	},
	getters: {
		isloggedin: state => {
			return state.isloggedin;
		},
		getMemberStatusList: state => {
			return state.memberstatusList;
		},
		getMemberRoleList: state => {
			return state.memberroleList;
		},
		getMemberGenderList: state => {
			return state.membergenderList;
		},
		getStateList: state => {
			return state.stateList;
		}
	},
	mutations: {
		login: (state, payload) => {
			state.isloggedin = payload;
		},
		logoff: (state, payload) => {
			state.isloggedin = false;
		},
		updateMember: (state, payload) => {
			state.member = payload;
			
			var memberStr = JSON.stringify(payload);
        	localStorage.removeItem("dddLogin");

        	if (state.member != "")
        	{
        		localStorage.setItem("dddLogin", memberStr);
        	}
        	

        	console.log("store member: "+payload);
        	console.log("store memberStr: "+memberStr);
		}
	},
	actions: {
		asynclogin: ({ commit }, payload) => {
			setTimeout(() => {
				commit('login', payload.by);
			}, payload.duration);
		},
		login({ commit }, payload)  {
			commit('login', payload);
		},
		logoff({ commit }, payload)  {
			commit('logoff', payload);
		},
		updateMember: ({ commit }, payload) => {
			commit('updateMember', payload);
		}
	}
})