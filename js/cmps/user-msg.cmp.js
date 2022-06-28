import { eventBus } from "../services/eventBus-service.js";
export default {
    template: `
 <section v-if="msg" class="user-msg flex" :class="msg.type">
    <!-- <div class="symbol"> -->
        <img :src="imgUrl">
    <!-- </div>   -->
    <div class="message">
        <h3>{{msgToUpper}}</h3>
        <p class="msg-txt">Book 
            <router-link  :to="'/book/'+msg.bookId">{{msg.name}}</router-link> 
            {{msg.txt}}</p>
        
    </div> 
    <button @click="msg = null">x</button>
 </section>
`,
    data() {
        return {
            unsubscribe: null,
            msg: null
        };
    },
    created() {
        this.unsubscribe = eventBus.on('show-msg', this.showMsg)
    },
    methods: {
        showMsg(msg) {
            this.msg = msg
            setTimeout(() => {
                this.msg = null
            }, 3000)
        }
    },
    computed: {
        msgToUpper(){
            return this.msg.type.toUpperCase() + '!'
        },
        imgUrl(){
            return `img/${this.msg.type}.png`
        }
    },
    unmounted() {
        this.unsubscribe()
    },
};