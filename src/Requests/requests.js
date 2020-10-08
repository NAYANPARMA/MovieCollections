const API_KEY = "26ce533749beac93b06c8febb6cac210";

const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // fetchTVshows: `/tv/${tv_id}?api_key=${API_KEY}&language=en-US`,
  // fetchLatestTvshows: `/tv/latest?api_key=${API_KEY}&language=en-US`,
  // fetchTvSeasons: `/tv/${tv_id}/season/${season_number}?api_key=${API_KEY}&language=en-US`,
  // fetchTvEpisode: `/tv/${tv_id}/season/${season_number}/episode/${episode_number}?api_key=${API_KEY}&language=en-US`,
  // fetchMovies: `/movie/${movie_id}?api_key=${API_KEY}&language=en-US`,
};

export default requests

// /discover/movie?api_key=$26ce533749beac93b06c8febb6cac210&with_genres=10749