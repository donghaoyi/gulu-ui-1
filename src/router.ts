import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'

import SwitchDemo from './components/SwitchPage/SwitchDemo.vue'
import ButtonDemo from './components/ButtonPage/ButtonDemo.vue'
import DialogDemo from './components/DialogPage/DialogDemo.vue'
import TabsDemo from './components/TabsPage/TabsDemo.vue'
import { h } from '@vue/runtime-core'
import Markdown from './components/Markdown.vue'

import intro from './markdown/intro.md'
import install from './markdown/install.md'
import getStarted from './markdown/getStarted.md'

const md = string => h(Markdown,{content:string,key:string})
const history = createWebHashHistory();
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        {
            path: '/doc', component: Doc, children: [
                { path: '', redirect: '/doc/intro' },
                { path: 'intro', component: md(intro)},
                { path: 'get-started', component:md(getStarted)},
                { path: 'install', component: md(install)},
                { path: 'switch', component: SwitchDemo },
                { path: 'button', component: ButtonDemo },
                { path: 'Dialog', component: DialogDemo },
                { path: 'tabs', component: TabsDemo }
            ]
        }
    ]
})