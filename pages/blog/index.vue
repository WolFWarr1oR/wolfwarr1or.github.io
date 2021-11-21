<template>
  <div>
    <h1>POSTS</h1>
    <div v-for="(post, index) in posts" :key="index">
      <p>{{ post.short }}</p>
      <img :src="`/images/posts/${post.img}`"/>
      <nuxt-link :to="localePath(post.path)">{{ post.title }}</nuxt-link>
    </div>

    <Footer/>
  </div>
</template>

<script>
export default {
  name: 'Blog',
  async asyncData({ $content, app}) {
    const posts = await $content(app.i18n.locale,'blog').fetch();
    const featuredposts = await $content(app.i18n.locale,'blog').where({isFeatured:true}).fetch()
    return {
      posts,
      featuredposts
    }
  },
  data() {
    return {
      title: this.$t('blog')
    }
  },
  head() {
    return {
      title: this.title
    }
  },
}
</script>
