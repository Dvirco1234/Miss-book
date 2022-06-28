import { bookService } from '../services/book-service.js'

export default {
    template: `

 <section class="book-edit">
    <form @submit.prevent="save">
        <input type="text" placeholder="Vendor" v-model="bookToEdit.vendor">
        <input type="text" placeholder="Max speed" v-model.number="bookToEdit.maxSpeed">
        <button>Save</button>    
    </form>
 </section>
`,
    data() {
        return {
            bookToEdit: bookService.getEmptybook(),
        }
    },
    methods: {
        save() {
            if (!this.bookToEdit.vendor) return
            const book = bookService.save(this.bookToEdit)
            this.$emit('saved', book)
            this.bookToEdit = bookService.getEmptybook()
        },
    },
    computed: {},
}
