function getramdonheal(min, max) {
    // random from min--max vs min is base number
    return Math.floor(Math.random() * (max - min) + min);
}

const app = Vue.createApp({
    data() {
        return {
            monsterheal: 100,
            playerheal: 100,
            round: 0,
            winner: null,
            logmessages: []
        }
    },
    watch: {
        monsterheal(value){
            if( value <=0 && this.playerheal <=0){
                this.winner = 'draw'
            }else if(value <=0 ){
                this.winner = 'player'
            }
        },
        playerheal(value){
            if( value <=0 && this.monsterheal <=0){
                this.winner = 'draw'
            } else if(value <= 0){
                this.winner = 'monster'
            }
        },
    },
    computed: {
        monsterhealbar() {
            return { width: this.monsterheal + '%' };
        },
        playerhealbar() {
            return { width: this.playerheal + '%' };
        },
        onspecialattack(){
            return this.round % 3 !== 0;
        }
    },
    methods: {
        attackmonster() {
            const attackValue = getramdonheal(5, 12);
            if (this.monsterheal - attackValue < 0){
                this.monsterheal =0;
            }
            else{
                this.monsterheal -= attackValue;
            }
            this.round++;
            // if attackmonster has call it also call attackPlayer
            this.attackplayer();
        },
        attackplayer() {
            const attackValue = getramdonheal(8, 15);
            if (this.playerheal - attackValue < 0){
                this.playerheal =0;
            }
            else{
                this.playerheal -= attackValue;
            }
        },
        attackmonsterspecial() {
            const attackValue = getramdonheal(10, 25);
            this.monsterheal -= attackValue;
            this.round++;
            this.attackplayerspecail();
        },
        attackplayerspecail() {
            const attackValue = getramdonheal(10, 25);
            this.playerheal -= attackValue;
        },
        healall() {
            const monsterHealValue = getramdonheal(8, 20);
            if (this.monsterheal + monsterHealValue > 100){
                this.monsterheal = 100;
            }
            else{
                this.monsterheal += monsterHealValue;
            }
            this.round++;
            this.healplayer();
        },
        healplayer(){
            const playerHealValue = getramdonheal(8, 20);
            if (this.playerheal + playerHealValue > 100){
                this.playerheal = 100;
            }
            else{
                this.playerheal += playerHealValue;
            }
        },
        surrender(){
            this.playerheal =0;
        },
        newgame(){ 
            this.monsterheal= 100,
            this.playerheal= 100,
            this.round= 0,
            this.winner= null
        },
        logmessages(who, type, value){
            this.logmessages.unshift({
            actionwho: who,
            actiontype: type,
            actionvalue: value})
        }
    },
});
app.mount('#game')