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
            let chiamataFilm = `${this.url}${this.film}?api_key=${this.apiKey}&query=${this.query}`;
            axios
                .get(chiamataFilm)
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
        },
        language(code) {
            let countryflags;
            if (code !== 'en' && code !== 'hi' && code !== 'ja') {
                countryflags = `https://www.countryflags.io/${code}/shiny/32.png`;
            } else if (code === 'hi') {
                countryflags = "https://www.countryflags.io/in/shiny/32.png";
            } else if (code === 'en') {
                countryflags = "https://www.countryflags.io/gb/shiny/32.png";
            } else if (code === 'ja') {
                countryflags = "https://www.countryflags.io/jp/shiny/32.png";
            }
            return countryflags;
        }
    },

    computed: {},
    watch: {},
    mounted() { }
});

// && code !== 'ja' && code !== 'hi'
// 