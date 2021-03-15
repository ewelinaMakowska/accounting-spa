<template>
   <div class="footer">

      <div class="container">
        <div class="row">
          <div class="col-sm-12 footer__flex-container">

            <div class="footer__links">
              <router-link class="footer__link" to="/search">Usługi</router-link>
              <router-link class="footer__link" to="/search">Księgowi</router-link>
            </div>

            <div class="footer__socials">
              <a href="#" class="footer__social">
                <social-icon :height='20'/>
              </a>

              <a href="#" class="footer__social">
                <i class="material-icons-sharp">linkedin</i>
              </a>

              <a href="#" class="footer__social">
                <i class="material-icons-sharp">instagram</i>
              </a>
            </div>

          </div>
        </div>
      </div>
      
    </div>
</template>


<script>
  import SocialIcon from './SocialIcon.vue'

  export default {
    name: 'Footer',
    components: {
      SocialIcon
    }
  }// export default
</script>