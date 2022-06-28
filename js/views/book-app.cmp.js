import { bookService } from '../services/book-service.js'
import bookList from '../cmps/book-list.cmp.js'
import bookFilter from '../cmps/book-filter-cmp.js'
import bookDetails from '../views/book-details.cmp.js'
import { eventBus } from '../services/eventBus-service.js'
// import bookEdit from "../views/book-edit.cmp.js";

export default {
    template: `
  <section class="book-app main-app">
    <book-filter class="filter-books" @filtered="filterBooks" :books="books"/>
    <book-list  @removed="removeBook" @selected="selectBook" :books="booksToShow" />
    <!-- <book-details v-else @close="selectedBook = null" :book="selectedBook" /> -->
    <!-- <book-edit @saved="savebook"/> -->
  </section>
`,
    components: {
        bookList,
        bookFilter,
        bookDetails,
        // bookEdit,
    },
    data() {
        return {
            books: [],
            filterBy: null,
            // selectedBook: null,
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId).then(() => {
            const idx = this.books.findIndex((book) => book.id === bookId)
            this.books.splice(idx, 1)
            eventBus.emit('show-msg', { txt: 'Deleted successfully', type: 'success' })
        }).catch(err => {
            console.log(err);
            eventBus.emit('show-msg', { txt: 'Failed - try again later', type: 'error' });
        })
        },
        selectBook(book) {
            this.selectedBook = book
        },
        filterBooks(filterBy){
          this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const regex = new RegExp(this.filterBy.title, 'i')
            return this.books.filter((book) => regex.test(book.title) && book.listPrice.amount >= this.filterBy.price)
        },
    },
    created() {
        bookService.query().then(books => this.books = books)
    },
}
