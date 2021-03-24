// syntax  Vue.createApp
const app = Vue.createApp({
    data() { //?? data() point for wha? and where || and why courseGoal can be access by only name in special {{}}
        return {
            nonetext:" <h2 style='color: red'>Fish the course and learn vue</h2>",
            textout: 'Finish the course and learn vue',
            vlink: 'https://vuejs.org'
        };
    },
    methods: {
        outputGoal(){
            const randomnumber = Math.random();
            if (randomnumber < 0.5){
                return 'learn vue';
            }
            else {
                return this.nonetext; // link to nonetext in out
            }
        }
    }
});

app.mount('#user-goal');