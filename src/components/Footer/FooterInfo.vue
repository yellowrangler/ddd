<template>
    <div>
        <div class="footer-components">
            <a class="ddd-footer-links" style="text-decoration:none;" href="#/faqs">
                <img style="height:30px;vertical-align:top" :src="infoImgPath" alt="information" class="img-circle">
                <span style="padding-left:15px;cursor: pointer;">Information</span>
            </a>
        </div>

        <div class="footer-components">
            <a class="ddd-footer-links" style="text-decoration:none;" href="mailto:daredevilducks.xyz@gmail.com?Subject=Daredevil%20Ducks%20Feedback">
                <img style="height:30px;vertical-align:top" :src="feedbackImgPath" alt="feedback" class="img-circle">
                <span style="padding-left:10px;cursor: pointer;">Feedback</span>
            </a>
        </div>

        <div class="footer-components">
            <a id="gomobile" name="gomobile" class="ddd-footer-links" style="text-decoration:none;" href="http://daredevilducksm.xyz" target="_blank">
                <img :src="mobileImgPath" style="height:40px;text-align:center;" alt="Go Mobile!"> 
                <span style="padding-left:13px;cursor: pointer;">Mobile
                </span>
            </a>
        </div> 

        <div style="padding-top:45px;" class="footer-components">
            <table style="line-height: 14px;">
                <tr>
                    <td style="padding-right:5px">Contact:</td>
                    <td class="helpInfo">Tarry Cutler</td>
                </tr>

                <tr>
                    <td style="text-align:right">eMail:</td>
                    <td style="text-align:right"><a class="emailLink" href="mailto:daredevilducks.xyz@gmail.com?Subject=Daredevil%20Ducks%20Inquirey">daredevilducks.xyz@gmail.com</a></td>
                </tr>
            </table>
        </div>
    </div>
</template>                    

<script>

const baseImgUrl = '/static/img/';

export default {
    data: function () {
        return {
            infoImg : 'DareDevilDuckInfoButton.png',
            feedbackImg : 'feedback-ddd.png',
            mobileImg : 'phone-mobile.png'
        }
    },
    computed: {
        infoImgPath() {
                return baseImgUrl+this.infoImg;
        },
        feedbackImgPath() {
                return baseImgUrl+this.feedbackImg;
        },
        mobileImgPath() {
                return baseImgUrl+this.mobileImg;
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

.ddd-footer-links {
    font-style:italic;
    font-weight:700;
    font-size:16px;
    color:NavajoWhite;
    cursor: pointer;
    font-family: 'Cormorant Garamond', serif;
    font-variant: small-caps;
    letter-spacing: 2px;
}

.helpInfo {
    padding-top:10px;
    padding-bottom:10px;
    color: NavajoWhite;
    font-size: 16px;
    font-variant:small-caps;
    letter-spacing: 1px;
}

.emailLink {
    color:NavajoWhite;
    font-size:16px;
    font-variant:small-caps;
    letter-spacing: 1px;
    cursor: pointer;
}
</style>