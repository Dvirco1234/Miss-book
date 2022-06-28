export default {
    template: `
    <p class="long-text">{{longText}}<span v-if="isLongTxt" @click="toggleLongTxt">{{moreLess}}</span></p>
    `,
    props: ['txt'],
    data() {
        return {
            isLongTxt: false,
            isTxtHide: true,
        }
    },
    methods: {
        toggleLongTxt(){
            this.isTxtHide = !this.isTxtHide 
        }
    },
    computed: {
        longText(){
            // const txtLength = this.txt.split(' ').filter(word => word !== '').length
            if(this.txt.length > 100 && this.isTxtHide){
                this.isLongTxt = true
                return this.txt.substring(0, 100)
            } 
            else return this.txt
        },
        moreLess(){
            return this.isTxtHide ? '...More': '...Less'
        },
    },
}
