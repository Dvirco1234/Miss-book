export default {
    props: ['book'],
    template: `
      <img :src="book.thumbnail" alt="">
      <h3>{{ titleToUpper }}</h3>
      <h5>Price: {{ bookPrice }}</h5>
`,
    data() {
        return {}
    },
    methods: {},
    computed: {
        titleToUpper() {
            return this.book.title[0].toUpperCase() + this.book.title.substring(1)
        },
        bookPrice(){
          const currency = this.book.listPrice.currencyCode 
          return new Intl.NumberFormat(currency, { 
            style: 'currency', 
            currency,
          }).format(this.book.listPrice.amount)
        }
    },
}
