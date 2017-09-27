<template>
    <div class="container   ">
        <div class="field is-horizontal">
            <div class="field-body">
                <div class="field">
                    <p class="control is-expanded has-icons-left">
                        <input class="input" type="email" placeholder="email" v-model="email">
                        <span class="icon is-small is-left"><i class="fa fa-user"></i></span>
                    </p>
                </div>
                <div class="field">
                    <p class="control is-expanded has-icons-left has-icons-right">
                        <input class="input is-success" type="password" placeholder="password" v-model="password">
                        <span class="icon is-small is-left"><i class="fa fa-envelope"></i></span>
                        <span class="icon is-small is-right"><i class="fa fa-check"></i></span>
                    </p>
                </div>
                <div class="field">
                    <div class="control">
                        <button @click="signIn" class="button is-primary">
                            Sign in
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <article class="message is-danger">
            <div class="message-body" v-show="error.message">
                {{ error.message }}
            </div>
        </article>
    </div>

</template>

<script>
    import { firebaseApp } from '../firebaseApp'
    export default {
        data (){
            return {
                email:'',
                password: '',
                error:{
                    message:''
                }
            }
        },
        methods:{
            signIn(){
                firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
                    .catch(error => {
                        this.error = error
                    })
            }
        }
    }
</script>

<style>
</style>