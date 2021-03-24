const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastname: ''
    };
  },
  watch: {
  //   name(value) { 
  //     if (this.name === ''){
  //       this.fullname = '';
  //     }
  //     else{
  //       this.fullname = value  + ' ' + this.lastname;
  //     }
  //    },
  //    lastname(value){
  //     if (this.name === '') {
  //       this.fullname = ''
  //     }
  //     this.fullname = this.name  + '' + value;
  //   }

  // if u using watch || when value is over 50 it'd set to 0
    counter(value){
      if (value > 50){
        const that = this
        setTimeout(function(){
          that.counter = 0;
        }, 2000)
        // this.counter = 0;
      }
    }
  },

  // compare watch vs computed || vs watch u need define and take value 2 time but with computed u only need 1 time and it taking by true value from imput.html
  computed: {
    fullname(){ 
      console.log(this.name);
      if (this.name === '' ){
        return ''
      }
      else {return this.name + ' ' + this.lastname;
      }
    }
  },
  methods: {
    outputfullname() {
      console.log('running again');
      if (this.name === '' ){
        return ''
      }
      else {return this.name + ' ' + 'nones';
    }
  },
    resetinput(){
      this.name = '';
    }, 
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
