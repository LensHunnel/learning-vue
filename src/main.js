import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { firebaseApp } from './firebaseApp'
Vue.use(VueRouter)

import DashBoard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/dashboard', component:DashBoard},
        {path: '/signin', component:Signin}
    ]
})

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        router.push('/dashboard')
    }
    else{
        router.replace('signin')
    }
})

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
