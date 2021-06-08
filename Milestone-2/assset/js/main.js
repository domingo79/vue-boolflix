const app = new Vue({
    el: '#app',
    data: {
        url: 'https://api.themoviedb.org/3/search/',
        film: 'movie',
        serieTv: 'tv',
        apiKey: 'a036838588a8580d8706b9e66b467405',
        query: '',
        movies: [],
        series: [],
        error: '',
    },
    methods: {
        serch() {
            let chiamata = `${this.url}${this.film}?api_key=${this.apiKey}&query=${this.query}`;
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

            let chiamataSerie = `${this.url}${this.serieTv}?api_key=${this.apiKey}&query=${this.query}`;
            axios
                .get(chiamataSerie)
                .then(respose => {
                    console.log(respose.data.results);
                    this.series = respose.data.results;
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