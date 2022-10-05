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
        mouseoverhandler()
        {
            console.log('mouse Over')
        },
        mouseleavehandler()
        {
            console.log('mouse leave')
        },
        dblclickhandler()
        {
            console.log('Dbl Click')
        }
    }
});

app.mount('#app')