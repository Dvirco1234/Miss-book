export default {
 template:`
 <header class="app-header flex">
    <div class="logo">
        <!-- <h3>Miss book</h3> -->
        <router-link to="/"><h3>Miss book</h3></router-link>
      </div>
      <nav class="flex">
        <router-link to="/">Home</router-link>
        <router-link to="/book">Books</router-link>
        <router-link to="/about">About</router-link>
      </nav>
 </header>
`,
  data() {
    return {
    }
  },
  methods:{},
computed:{}
}