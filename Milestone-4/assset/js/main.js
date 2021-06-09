const app = new Vue({
    el: '#app',
    data: {
        url: 'https://api.themoviedb.org/3/',
        film: 'search/movie',
        serieTv: 'search/tv',
        apiKey: 'a036838588a8580d8706b9e66b467405',
        query: '',
        movies: [],
        error: '',
    },
    methods: {
        serch() {
            let chiamataFilm = axios.get(`${this.url}${this.film}?api_key=${this.apiKey}&page=1&query=${this.query}`);
            let chiamataSerie = axios.get(`${this.url}${this.serieTv}?api_key=${this.apiKey}&page=1&query=${this.query}`);

            axios.all([chiamataFilm, chiamataSerie])
                .then(respose => {
                    for (let i = 0; i < respose.length; i++) {
                        this.movies = this.movies.concat(respose[i].data.results);
                    }
                    this.query = ''
                })
                .catch(err => {
                    console.error(err);
                    this.error = 'Sorry.. ' + err
                });
        },
        language(code) {
            let countryflags;
            countryflags = `https://www.unknown.nu/flags/images/${code}-100`
            return countryflags;
        },
        copertina(img) {
            let poster;
            if (img === null) {
                poster = "./assset/img/placeholder.png"
            } else {
                poster = `https://image.tmdb.org/t/p/w342${img}`
            }
            return poster;
        }
    },

    computed: {},
    watch: {},
    mounted() { }
});
