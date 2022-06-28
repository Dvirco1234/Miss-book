import { eventBus } from "../services/eventBus-service.js"

export default {
    template: `
    <h2 class="toggle-review" @click="isReview = !isReview"> Add review</h2>
    <section v-if="isReview" class="add-review flex ">
        <form @submit.prevent="save" class="review-form flex">
                <label for="name">Name</label>
                <input ref="input" type="text" id="name" v-model="review.name" placeholder="Full name">

                <label for="rate"> Book rate </label>
                <select class="rate" id="rate" v-model="review.rate">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label for="time">Read book at </label>
                <input class="review-time" type="date" id="time" v-model="review.readAt">
                <textarea name="" id="free-txt" cols="30" rows="10" 
                placeholder="Your opinion" v-model="review.txt"></textarea>
            <button class="save-review">Save review</button>
        </form>
    </section>
`,
props: ['book'],
    data() {
        return {
            review: {
                name: '',
                rate: 5,
                readAt: new Date(),
                txt: '',
            },
            isReview: false,
        }
    },
    created() {
        // this.$refs.input.focus()
    },
    methods: {
        save() {
            this.$emit('saved', this.review)
            this.isReview = !this.isReview
            // const msg = `Review about ${this.book.title} was successfully added`
            eventBus.emit('show-msg', { txt: 'review was successfully added', type: 'success', name: this.book.title, bookId: this.book.id})
        },
    },
    computed: {},
    unmounted() {},
}
