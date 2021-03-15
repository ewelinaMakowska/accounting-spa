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
                <social-icon :height="25" :name="'facebook'" />
              </a>

              <a href="#" class="footer__social">
                <social-icon :height="25" :name="'linkedin'" />
              </a>

              <a href="#" class="footer__social">
                <social-icon :height="25" :name="'instagram'" />
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