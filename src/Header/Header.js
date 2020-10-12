import React, {useEffect, useState} from 'react'
import { Autocomplete } from "@material-ui/lab"
import TextField from "@material-ui/core/TextField";
import './Header.css'
import axios from '../axios'
import MenuIcon from "@material-ui/icons/Menu";
import { SearchRounded } from '@material-ui/icons';
import CircularProgress from "@material-ui/core/CircularProgress";
import MovieOptions from './MovieOptions/MovieOptions';


const Header = () => {
  const [options, setOptions] = useState([]);
  const [ loading, setLoading] = useState(false)

   const movies = async (v) => {
      const request = await axios.get(
        // `https://api.themoviedb.org/3/search/movie?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&query=${e.target.value}&include_adult=false`
         `https://api.themoviedb.org/3/search/multi?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&query=${v}&include_adult=false`
        // `https://api.themoviedb.org/3/search/tv?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&page=1&query=${e.target.value}&include_adult=false`
      );
     setOptions(request.data.results);
      
   };
    return (
      <div className="header">
        <div className="header__right">
          <div className="header__menu">
            <MenuIcon style={{ color: "rgba(255, 255, 255, 0.6)" }} />

            <img
              className="header__logo"
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
            />
          </div>

          <div className="header__option">
            <div>Movie</div>
          </div>
          <div className="header__option">
            <div>TV</div>
          </div>
          <div className="header__option">
            <div>Episodes</div>
          </div>
        </div>

        <div className="header__left">
          <Autocomplete
            freeSolo
            className="header__search"
            id="clear-on-escape"
            clearOnEscape
           // value={v}
            onInputChange={(e,v)=>movies(v)}
            getOptionLabel={(option) =>{
              return option.original_name || option.original_title || ""
            }}
            options={options}
            loading={loading}
            renderOption={(option) => (
              <MovieOptions movie={option}/>
            )}
            renderInput={(params) => (
              <TextField
                style={{ color: "white" }}
                {...params}
                label="Search"
               // value={v}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="primary" size={20} />
                      ) : null}
                      {params.InputProps.endAdornment}
                    </React.Fragment>
                  ),
                }}
              />
            )}
          />
          <div className="header__searchicon">
            <SearchRounded style={{ color: "rgba(255, 255, 255, 0.8)" }} />
          </div>
          <div className=" header__optionleft">
            <div className="header__sub">SUBSCRIBE</div>
          </div>
          <div className=" header__optionleft">
            <div className="header__login">Login</div>
          </div>
        </div>
      </div>
    );
}

export default Header
