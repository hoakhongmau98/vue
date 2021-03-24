const app = Vue.createApp({
  data() {
    return {
      entergoalsvalue: "",
      goals: [] 
    };
  },

  watch:{
    goalvalue(){console.log(goals.length)}
  },
  methods: {
    goalvalue(){
      this.goals.push(this.entergoalsvalue);
    }
  }
});

app.mount('#user-goals');
