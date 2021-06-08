const app = new Vue({
    el: '#app',
    data: {
        url: 'https://api.themoviedb.org/3/search/movie',
        apiKey: 'a036838588a8580d8706b9e66b467405',
        query: '',
        movies: [],
        error: '',
    },
    methods: {
        serch() {
            let chiamata = `${this.url}?api_key=${this.apiKey}&query=${this.query}`
            axios
                .get(chiamata)
                .then(respose => {
                    console.log(respose.data.results);
                    this.movies = respose.data.results;
                })
                .catch(err => {
                    console.error(err);
                    this.error = 'Sorry.. ' + err
                });
        }
    },
    computed: {},
    watch: {},
    mounted() { }
});