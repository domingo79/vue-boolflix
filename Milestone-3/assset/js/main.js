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
            let chiamataFilm = `${this.url}${this.film}?api_key=${this.apiKey}&page=1&query=${this.query}`;
            axios
                .get(chiamataFilm)
                .then(respose => {
                    console.log(respose.data);
                    this.movies = respose.data;
                })
                .catch(err => {
                    console.error(err);
                    this.error = 'Sorry.. ' + err
                });

            let chiamataSerie = `${this.url}${this.serieTv}?api_key=${this.apiKey}&page=1&query=${this.query}`;
            axios
                .get(chiamataSerie)
                .then(respose => {
                    console.log(respose.data);
                    this.series = respose.data;
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
