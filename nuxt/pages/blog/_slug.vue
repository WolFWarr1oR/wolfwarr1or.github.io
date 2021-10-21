<template>
  <div id="frame" class="root root-ru">
    <div class="content-wrap">
      <div class="news_detail">
        <div class="news_wrap">
          <div class="body">
            <div class="article cate">
          <div class="article__title">{{ post.title }}</div>
          <div class="article__date">
            {{ $t('date_posted') }}: {{ formatDate(post.createdAt) }}
          </div>
          <nuxt-content class="article__content" :document="post"/>

            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'BlogSlug',
  async asyncData({ $content, params, app, error }) {
    const post = await $content(app.i18n.locale, 'blog', params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { post }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'numeric', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
 }
}
</script>


<style>
.cate {
 border-top:#e8cba7 solid 6px
}
.news_detail {
 background:#4d6e80 url(/_nuxt/img/ea6ea46.jpg) no-repeat top center;
 background-size:100% auto
}
.news_wrap {
 display:flex;
 justify-content:center;
 align-items:flex-start;
 position:relative;
 width:100%;
 padding-top:66px;
 padding-bottom:210px
}
.news_wrap .body {
 position:relative;
 width:900px;
 min-height:390px
}
.news_wrap .body .ellipsis {
 overflow:hidden;
 text-overflow:ellipsis;
 white-space:nowrap
}
.news_wrap .body .topbar {
 display:flex;
 justify-content:space-between;
 margin-top:80px;
 width:100%;
 height:50px;
 vertical-align:top
}
.news_wrap .body .topbar__breadcrumb {
 display:flex;
 justify-content:center;
 align-items:center;
 font-size:16px;
 height:18px;
 line-height:18px
}
.news_wrap .body .topbar__breadcrumb>span {
 display:inline-block
}
.news_wrap .body .topbar__node {
 color:#808080;
 text-decoration:none
}
.news_wrap .body .topbar__node:hover {
 color:#fff
}
.news_wrap .body .topbar__arraw {
 width:24px;
 color:#aaa;
 text-align:center
}
.news_wrap .body .topbar__title {
 color:#cfcfcf;
 line-height:30px;
 max-width:550px
}
.news_wrap .body .topbar__back {
 width:138px;
 color:#ccc;
 text-decoration:none;
 text-align:right;
 font-size:16px
}
.news_wrap .body .topbar__back:hover {
 color:#fff
}
.news_wrap .body .article {
 position:relative;
 background-color:#f0f0f0;
 padding:79px 90px 115px;
 min-height:601px;
 font-size:0
}
.news_wrap .body .article__title {
 line-height:40px;
 font-size:32px;
 color:#333
}
.news_wrap .body .article__date {
 margin-top:13px;
 font-size:16px;
 line-height:22px;
 color:#999
}
.news_wrap .body .article__cover {
 width:100%;
 height:auto;
 margin:46px auto 0
}
.news_wrap .body .article__content {
 margin-top:51px;
 font-size:14px;
 color:#7d7d7d;
 line-height:24px;
 display:flex;
 flex-direction:column
}
.news_wrap .body .article__content>* {
 max-width:720px
}
.news_wrap .body .article__content * {
 word-break:break-word;
 word-wrap:break-word
}
.news_wrap .body .article__content a {
 color:#1795b6 !important;
 text-decoration:none
}
.news_wrap .body .article__content a,
.news_wrap .body .article__content a:visited {
 color:#a7864f !important
}
.news_wrap .body .article__content a:hover {
 text-decoration:underline
}
.news_wrap .body .article__content ol,
.news_wrap .body .article__content ul {
 margin:15px
}
.news_wrap .body .article__content img,
.news_wrap .body .article__content video,
.news_wrap .body .article__content table {
 max-width:100% !important;
 height:unset !important;
}
.news_wrap .body .article__content table {
 margin:0 auto;
 border-collapse:collapse;
 border-spacing:0;
 width:100%
}
.news_wrap .body .buttombar {
 position:absolute;
 left:50%;
 bottom:41px;
 display:flex;
 justify-content:space-between;
 width:721px;
 margin:24px 0 0 0;
 transform:translateX(-50%);
 -webkit-user-select:none;
 -moz-user-select:none;
 -ms-user-select:none;
 user-select:none
}
.news_wrap .body .buttombar__prev,
.news_wrap .body .buttombar__next {
 width:70px;
 height:44px;
 background:#393b40 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAArCAYAAACNWyPFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY0QzcyMDFBMUQ4MzExRUFBQTdEOTNGRkFCRjFCQTJBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY0QzcyMDFCMUQ4MzExRUFBQTdEOTNGRkFCRjFCQTJBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjRDNzIwMTgxRDgzMTFFQUFBN0Q5M0ZGQUJGMUJBMkEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjRDNzIwMTkxRDgzMTFFQUFBN0Q5M0ZGQUJGMUJBMkEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4oRmJtAAAB1ElEQVR42qyY2ysEcRTHZ0frmkdelLskCkkepCVK/i/xoKQoYouisKIoUpQlTx68KYS0rdsmSW77NL5H8ytlds7M7/xOffb2q/k0M/s7l7Ecx8kDw+ARvINVUA4sU9DLqPM/LkCFScmz4x1XoNKExLYsK2p5Rx1IgipLGCRJ+KzXgEP3XT9wOiXgyPGPFKiX3BMlSjKiNGiUSIhisM+I7kGTRKJEu4yI9lOzREIUgh1GlAGtEgmRD7YYEe2vdolEiTYY0QvokEiIKFhjRK+gSyKx3AS6EkDULZEo0RIjegM9EokSLTAiKhW9Eglhgzgj+gD9EgkRATMBRIMSiRJNMaIvMCSRKNEEI8qCmInyOsaITiO/pyOPE9CZYy1rCw8eAeM+Aooz6T2ZZC7Vt+SekGCaEXyqv7GOgDbkXIB9MqC7Tyi1zIdNLWEFizpJMoxgWTfdBxFQ4UpIChcnoBK8Li3BnGDTRDORa6EAbAdoi9p0u5WiAA3eE2iRdJB7jOAhbKv69ws13QeM4E6n6VYfSgOODw26XT0JjhnBLaiVzCezjOAGVEsH04yP4NrEcGq7c6NXXIIYSJkYTOMev5+DPpA20QCoBDjiXjb1RKLM5BOJHwEGAGMhDj181kwgAAAAAElFTkSuQmCC) no-repeat center;
 background-size:14px 23px;
 border-radius:4px;
 opacity:0.8;
 text-align:center;
 font-size:16px;
 color:#ccc;
 cursor:pointer;
 text-decoration:none
}
.news_wrap .body .buttombar__prev:hover,
.news_wrap .body .buttombar__next:hover {
 background-color:#565961
}
.news_wrap .body .buttombar__prev--disabled,
.news_wrap .body .buttombar__next--disabled {
 background-color:#9ea1a8;
 cursor:inherit;
 pointer-events:none
}
.news_wrap .body .buttombar__prev {
 transform:rotate(180deg)
}
.news_wrap .latest {
 width:355px;
 background-color:#f0f0f0;
 margin-top:130px;
 margin-left:25px;
 border-radius:1px;
 padding-bottom:60px
}
.news_wrap .latest__title {
 width:100%;
 height:34px;
 background:rgba(18,18,18,0.04);
 color:#333;
 line-height:34px;
 font-size:16px;
 font-weight:600;
 text-align:center;
 margin-top:31px
}
.news_wrap .latest__item {
 display:flex;
 width:100%;
 padding:10px 20px;
 box-sizing:border-box;
 cursor:pointer
}
.news_wrap .latest__item:hover {
 background:#e3e3e5
}
.news_wrap .latest__item:first-child {
 margin-top:4px
}
.news_wrap .latest__item img {
 flex-shrink:0;
 width:140px;
 height:70px
}
.news_wrap .latest__info {
 margin-left:10px;
 word-break:break-word;
 word-wrap:break-word
}
.news_wrap .latest__info p {
 line-height:20px
}
.news_wrap .latest__info p:first-child {
 min-height:40px;
 color:#393b40;
 font-size:16px
}
.news_wrap .latest__date {
 font-size:14px;
 color:#999;
 margin-top:5px
}
@media screen and (max-width: 1350px) {
 .news_wrap .latest {
  display:none
 }
}

</style>
