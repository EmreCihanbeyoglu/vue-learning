import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
    state() {
        return {
            count:0
        }
    },
    mutations: {
        increment(state) {
            state.count += 2;
        },
        increase(state, increaseAmount) {
            state.count += increaseAmount;
        },
        increaseWithObjectPayload(state, payload) {
            state.count += payload.value;
        }
    },
    getters: {
        count(state) {
            return state.count;
        }
    },

    // commit the mutation handler function with name of increase, after 2 sec
    actions: {
        increase(context, payload) {
            console.log(context);
            setTimeout(() => {
                context.commit('increase', payload);
            }, 2000)
        }
    }
})

app.use(store);

app.mount('#app');
