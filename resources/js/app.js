import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'

import Layout from "./Shared/Layout";

import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
    delay: 0,
    color: '#3B82F6',
    includeCSS: true,
    showSpinner: false,
});

createInertiaApp({
    resolve: name => {
        const page = require(`./Pages/${name}`).default
        page.layout = page.layout || Layout;

        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mixin({methods: {route: window.route}})
            .mount(el)
    },
})
