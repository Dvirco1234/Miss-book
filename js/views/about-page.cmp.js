export default {
 template: `
    <section class="main-app">
        <h2>Some information about the app...</h2>
    </section>
`,
data() {
return {
    messageId: null,
    isPositive: false,
}
},
created() {
    this.messageId = setInterval(() => {
        this.isPositive = !this.isPositive
        const msg = this.isPositive? 'This app is the best!' : 'This app is boring...'
        console.log(msg)
    }, 2000)
},
methods: {},
computed: {},
unmounted() {
    clearInterval(this.messageId)
},
}