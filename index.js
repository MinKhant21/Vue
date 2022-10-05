const app = Vue.createApp({
    data(){
        return {
            title : "vue 3 start",
            author : "Kaung Min Khant",
            age : 20
        }
    },
    methods:{
        IncreaseAge()
        {
            this.age++
        }
    }
});

app.mount('#app')