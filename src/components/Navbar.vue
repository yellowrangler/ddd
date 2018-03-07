<template>

<div>
  <!-- Image and text -->
  <b-navbar type="light" variant="light" toggleable>
    	<b-navbar-brand href="#">
            <img @click="navigateToHome"  :src="navImgPath" class="d-inline-block align-top imgButtonNav" alt="BV">
        </b-navbar-brand>
        <b-navbar-toggle target="nav_dropdown_collapse">
        </b-navbar-toggle>

        <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
                <b-nav-item-dropdown text="Games" left>
                    <b-dropdown-item href="#">Pick your teams</b-dropdown-item>
                    <b-dropdown-item href="#">Members picks</b-dropdown-item>
                    <b-dropdown-item href="#">Team pick Member Totals </b-dropdown-item>
                </b-nav-item-dropdown>
                <!-- Navbar dropdowns -->
                <b-nav-item-dropdown text="Member Stats" left>
                    <b-dropdown-item href="#">Total Wins Leaders</b-dropdown-item>
                    <b-dropdown-item href="#">Total Percentage Leaders</b-dropdown-item>
                    <b-dropdown-item href="#">Week Leaders</b-dropdown-item>
                </b-nav-item-dropdown>
                <b-nav-item-dropdown text="Teams" left>
                    <b-dropdown-item href="#">Standings</b-dropdown-item>
                    <b-dropdown-item href="#">Weekly Rankings</b-dropdown-item>
                    <b-dropdown-item href="#">Charts</b-dropdown-item>
                    <b-dropdown-item href="#">Playoff Brackets</b-dropdown-item> 
                    <b-dropdown-divider></b-dropdown-divider> 
                    <b-dropdown-item href="#">Current Scores</b-dropdown-item>             
                    <b-dropdown-item href="#">In the News</b-dropdown-item>  
                    <b-dropdown-item href="#">NFL Websites</b-dropdown-item>  
                </b-nav-item-dropdown>
                <b-nav-item href="#">Hall of Fame</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
  </b-navbar>
</div>

</template>

<script>
const baseImgUrl = '/static/img/';

export default {
    data: function () {
        return {
            navImg : 'ddd-Jess-small.png'
        }
    },
    computed: {
        navImgPath() {
                return baseImgUrl+this.navImg;
            }
    },
    methods: {
        navigateToHome() {
            // so is this with named routes
            this.$router.push( { name: 'home' } );
        }
    }
}
</script>

<style scoped>

.imgButtonNav {
	height:50px;
	padding-right:25px;
	vertical-align:middle;
}
</style>