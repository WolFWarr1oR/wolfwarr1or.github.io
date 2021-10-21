/* jshint browser: true */
<script>
  // eslint-disable-next-line no-unused-vars
  const sd = function(as){
    const name = as.getAttribute("data-spotlight-header");
    const image = as.getAttribute("data-spotlight-image");
    const caption = as.getAttribute("data-spotlight-caption");
    document.querySelector("h2.HeroSpotlight-title").innerHTML = name;
    document.querySelector(".HeroSpotlight-caption>p").innerHTML = caption;
    document.querySelector(".HeroSpotlight-image").style.backgroundImage = "url('"+image+"')";
  }
</script>
<template>
  <section class="HeroesSection">
    <div class="container">
      <div class="HeroesSection-header">
        <h1 class="HeroesSection-headline">{{ $t('my_team') }}</h1>
          <div class="HeroesSection-description">
            <p>description</p>
          </div>
        </div>
    </div>
    <div class="HeroSpotlight">
      <div class="HeroSpotlight-inner Container">
        <div class="HeroSpotlight-image" style="background-image: url(https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png);"></div>
          <div class="HeroSpotlight-text">
            <h2 class="HeroSpotlight-title">WolFWarrioR</h2>
              <div class="HeroSpotlight-caption">
                <p>Мейнит Крысавчика, Зарю(до реворка Симметру). Играл с QadraGaming’ом. Создатель этого
                  сайта</p>
              </div>
          </div>
      </div>
    </div>
    <div class="HeroesSection-heroList" data-js="spotlight-list" data-id="heroes-spotlight">
        <a class="HeroesSection-hero HeroPortraitLink" data-js="spotlight-activator"
          data-spotlight-header="WolFWarrioR"
          data-spotlight-image="https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/full-portrait.png"
          data-spotlight-caption="Мейнит Крысавasdметру). Играл с QadraGaming’ом. Создатель этого сайта."
          onmouseover='herospot(this)'>
          <span class="HeroPortraitLink-imageWrapper">
            <span class="HeroPortraitLink-image"
              style="background-image:url('https://d1u1mce87gyfbn.cloudfront.net/hero/junkrat/icon-portrait.png')"></span>
            </span>
          <span class="HeroPortraitLink-title">WolFWarrioR</span>
        </a>
        <a class="HeroesSection-hero HeroPortraitLink" data-js="spotlight-activator"
          data-spotlight-header="PIIIXEL"
          data-spotlight-image="/images/characters/piiixel.png"
          data-spotlight-caption="дай описание и маленькую картинку"
          onmouseover="herospot(this)">
          <span class="HeroPortraitLink-imageWrapper">
            <span class="HeroPortraitLink-image"
              style="background-image:url('https://d1u1mce87gyfbn.cloudfront.net/hero/widowmaker/icon-portrait.png')"></span>
          </span>
          <span class="HeroPortraitLink-title">PIIIXEL</span>
        </a>
    </div>
    <script>
      herospot = function(as){
        let name = as.getAttribute("data-spotlight-header");
        let image = as.getAttribute("data-spotlight-image");
        let caption = as.getAttribute("data-spotlight-caption");
        document.querySelector("h2.HeroSpotlight-title").innerHTML = name;
        document.querySelector(".HeroSpotlight-caption>p").innerHTML = caption;
        document.querySelector(".HeroSpotlight-image").style.backgroundImage = "url('"+image+"')";
        // document.querySelector(".HeroSpotlight-image").style.backgroundImage = "url('"${image}"')";
      }
    </script>
  </section>
</template>


<script>
  export default{

  }
</script>

