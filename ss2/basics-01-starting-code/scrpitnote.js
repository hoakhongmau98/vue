const app = Vue.createApp({
    data(){
        return {text} //by tag// <p>{{ text }}</p>
        return {vlink: "link"} // render by v-bind<a href='link'></a>
        return {htmltext: "<h2 style='color: red'>vuejs html tag output</h2>"}
        // <p v-html='output()'></p>
        return {counter: 0} // <button v-on:click="counter++||--">
        rerturn {naem: ''} // <input v-on:input="setname"> ?? why setname call like a var but it's a menthod?
    },
    method: {
        setname(data){
            this.name = data.target.value; // get data from input form
        },
        method_app (){ // render by <p>{{method_app()}}</p>
            const randommath = Math.random();
            if (randommath < 0.5){
                // do something
            }
            else {
                //dosomething
            }
        },
        // button v-on:click="app()" || "recuded()"
        app(){
            this.counter = this.counter +1;
        },
        recuded(){
            this.counter = this.counter -1;
        }
    } 
});
app.mount()// mount('#id|| .class')