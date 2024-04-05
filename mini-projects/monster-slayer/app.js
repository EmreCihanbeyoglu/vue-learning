function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


const {createApp} = Vue;
const app = createApp({
    data: () => {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            MONSTER_MAX_DAMAGE: 15,
            MONSTER_MIN_DAMAGE: 8,
            PLAYER_MAX_DAMAGE: 12,
            PLAYER_MIN_DAMAGE: 7,
            PLAYER_SPECIAL_MAX_DAMAGE: 25,
            PLAYER_SPECIAL_MIN_DAMAGE: 10,
            PLAYER_MIN_HEAL: 8,
            PLAYER_MAX_HEAL: 20,
            round: 1,
            isPlayerWin: false,
            isMonsterWin: false,
            logs: []
        }
    }, 
    methods: {
        playerAttack() {
            const damage = getRandomValue(this.PLAYER_MIN_DAMAGE, this.PLAYER_MAX_DAMAGE);
            this.monsterHealth = this.monsterHealth >= damage ? this.monsterHealth - damage : 0;
            this.addLogMessage('you', 'attacked', damage, this.playerHealth);
            this.monsterAttack();           
        },
        monsterAttack() {
            const damage = getRandomValue(this.MONSTER_MIN_DAMAGE, this.MONSTER_MAX_DAMAGE);
            this.playerHealth = this.playerHealth >= damage ? this.playerHealth - damage : 0;
            this.addLogMessage('monster', 'attacked', damage, this.monsterHealth);
            this.round++;
        },
        playerSpecialAttack() {
            const damage = getRandomValue(this.PLAYER_SPECIAL_MIN_DAMAGE, this.PLAYER_SPECIAL_MAX_DAMAGE);
            this.monsterHealth = this.monsterHealth >= damage ? this.monsterHealth - damage : 0;
            this.addLogMessage('you', 'special attacked', damage, this.playerHealth);
            this.monsterAttack();
        }, 
        healPlayer() {
            const heal = getRandomValue(this.PLAYER_MIN_HEAL, this.PLAYER_MAX_HEAL);
            this.playerHealth += heal;
            this.playerHealth = this.playerHealth > 100 ? 100 : this.playerHealth;
            this.addLogMessage('you', 'heal', heal, this.playerHealth);
            this.monsterAttack();
        },
        resetGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.isMonsterWin = false;
            this.isPlayerWin = false;
            this.round = 1;
            this.logs = []
        },
        surrender() {
            this.isMonsterWin = true;
        },
        addLogMessage(who, what, value, currentHealth) {
            this.logs.unshift({
                round: this.round,
                actionBy: who,
                actionType: what,
                actionValue: value,
                health: currentHealth
            })
        }
    },
    computed: {
        renderMonsterHealthBar() {
            return {width: this.monsterHealth + '%'};
        },
        renderPlayerHealthBar() {
            return {width: this.playerHealth + '%'};
        },
        isSpecialAttackAllowed() {
            console.log(this.round % 3);
            return this.round % 3 === 0;
        }, 
    },
    watch: {
        monsterHealth(value) {
            this.isPlayerWin = (value === 0 );
   
        }, 
        playerHealth(value) {
            this.isMonsterWin = (value === 0);
        }
    }

});
app.mount('#game');