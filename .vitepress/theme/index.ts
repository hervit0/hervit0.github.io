// https://vitepress.dev/guide/custom-theme
import {h} from 'vue'
import type {Theme} from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import TechStackTable from "../components/TechStackTable.vue";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCalendarDays, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import ExperienceMeta from "../components/ExperienceMeta.vue";

library.add(faCalendarDays, faLocationDot)

export default {
    extends: DefaultTheme,
    Layout: () => {
        return h(DefaultTheme.Layout, null, {
            // https://vitepress.dev/guide/extending-default-theme#layout-slots
        })
    },
    enhanceApp({app, router, siteData}) {
        app.component('FontAwesomeIcon', FontAwesomeIcon)
        app.component('TechStackTable', TechStackTable)
        app.component('ExperienceMeta', ExperienceMeta)
    },
} satisfies Theme
