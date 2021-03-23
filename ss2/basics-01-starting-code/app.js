const app = Vue.createApp({
    data() { //?? data() point for wha? and where || and why courseGoal can be access by only name in special {{}}
        return {
            courseGoal: 'Fish the course and learn vue',
        };
    }
});



app.mount('#user-goal');