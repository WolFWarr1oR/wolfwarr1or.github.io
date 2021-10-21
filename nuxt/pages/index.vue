<template>
  <div>
    <a id="return-to-top">
        <i>
            <img src="https://d15f34w2p8l1cc.cloudfront.net/overwatch/c7b3c57d7dd91c200f558914f0dd16fb7d733278694f3f63b20d44cc583cb173.png"
                alt="Top" class="img-fluid" style="max-height: 37px;">
        </i>
    </a>
    <section id="site">


      <HeaderSection/>
      <FeaturedBanner/>
      <section class="NewsSection">
    <div class="NewsSection-bg"></div>
    <div class="Container">
        <div class="NewsSection-header">
            <div class="NewsSection-header-lockup">
                <h4 class="NewsSection-header-text">{{ $t('waiting_for_ow2') }}</h4>
                <img src="https://static.playoverwatch.com/svg/ow2-logo-0fed8babe1.svg"
                    alt="Overwatch 2 logo" class="NewsSection-header-icon">
                <a href="" class="NewsSection-button">{{ $t('learn_more') }}</a>
            </div>
        </div>
        <div class="NewsSection-news">
            <div class="NewsSection-links">
                <h5 class="NewsSection-headline">{{ $t('featured_news') }}</h5>
                <span class="NewsSection-bar">|</span>
                <nuxt-link :to="localePath('blog')" class="NewsSection-cta">
                    <span>{{ $t('view_all_news') }}</span>
                    <svg class="Svg-icon NewsSection-cta-icon" viewBox="0 0 64 64"><path d="M31.1 43.6L9.6 22.1a1.2 1.2 0 0 1 1.5-1.9l20.3 12.4a1.2 1.2 0 0 0 1.3 0l20.2-12.4a1.2 1.2 0 0 1 1.5 1.9L32.9 43.6a1.2 1.2 0 0 1-1.8 0z"></path></svg>
                </nuxt-link>
            </div>
            <div class="NewsSection-newsList">
              <div v-for="(post, index) in featuredposts" :key="index">
                <nuxt-link :to="localePath(post.path)" class="CardLink CardLink--taggable">
                    <figure class="Card Card-blog Card-withCaption">
                        <div class="Card-thumbnail-wrapper">
                            <img :src="`/images/posts/${post.img}`" class="Card-thumbnail">
                        </div>
                        <div class="Card-bottom">
                            <figcaption class="Card-caption">
                                <h1 class="Card-title">{{ post.title }}</h1>
                                <div class="Card-details">
                                    <p class="Card-author"></p>
                                    <p class="Card-date">{{ formatDate(post.createdAt) }}</p>
                                </div>
                            </figcaption>
                        </div>
                    </figure>
                </nuxt-link>
              </div>
            </div>
        </div>
    </div>
</section>
      <HeroesSection></HeroesSection>
    </section>
    <Footer/>
  </div>


</template>

<script>
export default {
  name: 'Main',
  components: {
    'HeroesSection': () => import('@/components/HeroesSection.vue'),
  },
  async asyncData({ $content, app}) {
    const featuredposts = await $content(app.i18n.locale,'blog')
      .where({isFeatured:true})
      .sortBy('data','desc')
      .fetch()
    return {
      featuredposts
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  computed: {
    availableLocales () {
      return this.$i18n.locales
    }
  },
}
</script>
}
</script>
