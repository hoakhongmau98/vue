// function add(){
//   counter = counter +1
// }

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      username: '',
      confirmedname: ''
    };
  },
  computed: {
    fullname(){
      console.log('running again ...');
      if (this.name === ''){
        return '';
      }
      else{
        return this.name + 'none'
      }
    }
  },
  methods: {
    outputfullname() {
      if (this.name === '') {
        return ''
      }
      else {
        return this.name + ' lastname'
      }
    },
    resetinput() {
      this.name = '';
    },
    submitform() {
      alert(this.username);
    },
    confirminput() {
      this.confirmedname = this.name;
    },
    sigup(event) {
      this.username = event.target.value;
    },
    setname(event, secondname) {
      this.name = event.target.value + secondname;
    },
    app(num) {
      this.counter = this.counter + num
    },
    reduced(num) {
      this.counter = this.counter - num
    }
  }
});

app.mount('#events');
