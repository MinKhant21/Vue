const app = Vue.createApp({
    data(){
        return {
            title : "vue 3 start",
            author : "Kaung Min Khant",
            age : 20,
            ShowBook:true
        }
    },
    methods:{
       hide()
       {
        !ShowBook
       }
    }
});

app.mount('#app')