const app = Vue.createApp({
    data(){
        return {
            counter: 0
        }
    },
    methods: {
        updateCounter(val){
            this.counter = this.counter + val
        }
    }
})

app.mount('.container')