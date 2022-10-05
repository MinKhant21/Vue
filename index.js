const app = Vue.createApp({
    data(){
        return {
            books:[
                {
                    title : "vue 1 start",
                    author : "Kaung Min Khant",
                    age : 20,
                   
                },
                {
                    title : "vue 2 start",
                    author : "Kaung  Khant",
                    age : 22,
                    
                },
                {
                    title : "vue 3 start",
                    author : "Min Khant",
                    age : 24,
                   
                },
            ],
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