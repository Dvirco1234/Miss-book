import bookPreview from '../cmps/book-preview.cmp.js'

export default {
    template: `
 <section class="book-list">
        <ul>
            <li v-for="book in books" :key="book.id" class="book-preview-container"
            @click1="select(book)">
                <book-preview :book="book"/>
                <div class="actions">
                    <button @click.stop="remove(book.id)">X</button>
                    <!-- <button @click="select(book)">Details</button> -->
                </div>
                <router-link :to="'/book/'+book.id" class="link"></router-link>
            </li>
        </ul>
    </section>
    `,
    components: {
        bookPreview,
    },
    props: ['books'],
    data() {
        return {}
    },
    methods: {
        remove(bookId) {
            this.$emit('removed', bookId)
        },
        // select(book) {
        //     this.$emit('selected', book)
        // },
    },
    computed: {},
}
