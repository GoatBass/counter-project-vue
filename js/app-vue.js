const app = Vue.createApp({
    data(){
        return {
            counter: 0,
            styleObject: {
                color: ''
              }
        }
    },
    methods: {
        updateCounter(val){
            this.counter = this.counter + val
            if(this.counter < 0){
                this.styleObject.color = 'red'
            } else if(this.counter == 0){
                this.styleObject.color = '#333333'
            } else {
                this.styleObject.color = 'green'
            }
        },
        resetCounter(){
            this.counter = 0
            this.styleObject.color = '#333333'
        }
    }
})

app.mount('.container')