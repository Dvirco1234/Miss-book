export default {
    template: `
 <section class="book-filter">
    <!-- <pre>{{filterBy}}</pre> -->
    <h3>Search</h3>
    <input type="text" v-model="filterBy.title" @input="filter" placeholder="Search book">
    <input type="range" v-model="filterBy.price" @input="filter" :min="minPrice" :max="maxPrice" v-model.number="filterBy.price">
    {{filterBy.price}}
 </section>
`,
    props: ['books'],
    data() {
        return {
            filterBy: {
                title: '',
                price: null,
            },
        }
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy)
        },
    },
    computed: {
        minPrice() {
            return Math.min(...this.books.map((book) => book.listPrice.amount))
        },
        maxPrice() {
            return Math.max(...this.books.map((book) => book.listPrice.amount))
        },
    },
    created() {
        this.filterBy.price = this.minPrice
    },
}
