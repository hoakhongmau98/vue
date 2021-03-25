const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!'
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.savetext.value;
    }, 
    deletetext() {
      this.message = 'None'
    },
  }, 
});

app.mount('#app');

///

const data = {
  message: 'hello!',
  longmessage: 'hello long message'

};

// {message: "hello!"}
// app.js:32 message
// app.js:33 hello !!

const handler = {
  set(target, key, value){
    if (key === 'message'){
      target.longmessage = value + 'world'
    }
    else{
      target.message = value
    }
  }
};

const proxy = new Proxy(data, handler);


// this attack data and handler 
// proxy.message = 'hello !!' // if use this log: hello !! world
proxy.nonemessage = 'hello !!' // if use this log: hello long message

// this access to handler() when u set message = 'hello' up there
// because if (key === 'message') take key of proxy
console.log(proxy.longmessage);