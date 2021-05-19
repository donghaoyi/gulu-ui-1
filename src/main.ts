import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'

import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'

const history = createWebHashHistory();
const router = createRouter({
    history:history,
    routes:[
        {path:'/',component:HelloWorld},
        {path:'/xxx',component:HelloWorld2}
    ]
})
// 使用router
const app = createApp(App);
app.use(router);
app.mount('#app')
