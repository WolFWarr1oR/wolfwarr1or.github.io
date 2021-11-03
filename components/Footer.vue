/* eslint-disable vue/no-parsing-error */
<template>
  <div class="footer-conteiner" id="Page-footer">
        <div class="NavbarFooter is-light" id="global-navbar-footer">
            <div class="NavbarFooter-overlay"></div>
            <div class="NavbarFooter-selector">
                <div class="NavbarFooter-selectorToggle" onclick="document.querySelector('.NavbarFooter-selector').classList.add('is-open')">
                    <div class="NavbarFooter-icon NavbarFooter-selectorToggleIcon">
                        <svg class=""><i class="fad fa-globe"></i></svg>
                    </div>
                    <label class="NavbarFooter-selectorToggleLabel"
                      v-for="lang in currentLang" :key="lang.name">
                      {{ lang.name }}
                    </label>
                    <div class="NavbarFooter-icon NavbarFooter-selectorToggleArrow"><svg class=""><i
                                class="fad fa-sort-down"></i></svg></div>

                </div>
                <div class="NavbarFooter-selectorDropdown">
                    <div class="NavbarFooter-selectorDropdownContainer">
                        <div class="NavbarFooter-selectorCloser">
                            <div class="NavbarFooter-selectorCloserAnchor">
                                <div class="NavbarFooter-icon">
                                    <svg><i class="fad fa-times"></i></svg>
                                </div>
                            </div>
                        </div>
                        <div class="NavbarFooter-selectorLocales NavbarFooter-selectorSection">
                            <div class="NavbarFooter-selectorSectionBlock">
                                <nuxt-link
                                  class="NavbarFooter-selectorLocale NavbarFooter-selectorOption"
                                  v-for="locale in availableLocales"
                                  :key="locale.code"
                                  :to="switchLocalePath(locale.code)">
                                    <div class="NavbarFooter-selectorOptionLabel">
                                      {{ locale.name }}
                                    </div>
                                </nuxt-link>
                                <a href="" class="NavbarFooter-selectorLocale NavbarFooter-selectorOption">
                                    <div class="NavbarFooter-selectorOptionLabel">Add language</div>
                                    <div class="NavbarFooter-selectorOptionIcon NavbarFooter-icon"><i
                                            class="fad fa-external-link"></i></div>
                                </a>
                            </div>
                            <div class="Navbar-modalClose Navbar-icon">
                                s
                            </div>
                            <div class="NavbarFooter-selectorTick" style="left: 145.25px;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="NavbarFooter-links NavbarFooter-mainLinks">
                <div class="NavbarFooter-linksLeft">
                    <div class="NavbarFooter-link NavbarFooter-mainLink">
                        <a href="" class="NavbarFooter-anchor">{{ $t('about_me') }}</a>
                    </div>
                    <div class="NavbarFooter-link NavbarFooter-mainLink">
                        <a href="" class="NavbarFooter-anchor">GitHub</a>
                    </div>
                    <div class="NavbarFooter-link NavbarFooter-mainLink">
                        <nuxt-link :to="localePath('blog')" class="NavbarFooter-anchor">{{ $t('blog') }}</nuxt-link>
                    </div>
                </div>
                <div class="NavbarFooter-linksRight">
                    <div class="NavbarFooter-link NavbarFooter-mainLink">
                        <a href="" class="NavbarFooter-anchor">
                            {{ $t('overwatch_news') }}
                        </a>
                    </div>
                </div>
            </nav>
            <div class="NavbarFooter-copyright">© WolFWarrioR, {{ currentYear }}</div>
            <div class="NavbarFooter-trademark">{{ $t('site_isnt_owned_by') }}<a href="https://blizzard.com">Blizzard
                    Entertainment</a> & <a href="https://mihoyo.com">miHoYo</a>.</div>
        </div>

    </div>
</template>

<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales
    },
    currentYear() {
      return new Date().getFullYear()
    },
    currentLang() {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)
    }
  },
}



</script>
