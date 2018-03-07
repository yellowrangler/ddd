<template>
    <div>
        <div class="footer-components">
            <div style="float:right;" class="row">
                    <div style="display:inline-block;padding-top:40px;padding-right:10px;">
                        <span class="enjoyLife" style="padding-left:35px;">Enjoy Life and Have Fun!</span>
                    </div>

                    <div style="display:inline-block;padding-right:30px;float:right;">
                        <img style="height:125px;padding:15px;" :src="footerImgPath" alt="Ha!" class="img-circle">
                    </div>    
                </div>  <!-- end of row -->  
        </div>
    </div>
</template>                    

<script>

const baseImgUrl = '/static/img/';

export default {
    data: function () {
        return {
            footerImg : 'ddd-small-footer.png'
        }
    },
    computed: {
        footerImgPath() {
                return baseImgUrl+this.footerImg;
            }
    }
}
</script>

<style scoped>
.footer-components {
    padding-top:5px;
    padding-bottom:10px;
    padding-left:8px;
}

.img-circle {
    border-radius: 50%;
}
</style>