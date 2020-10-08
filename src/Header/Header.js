import React, {useEffect, useState} from 'react'
import { Autocomplete } from "@material-ui/lab"
import TextField from "@material-ui/core/TextField";
import './Header.css'
import axios from '../axios'
import { Avatar } from '@material-ui/core';
import AddBoxIcon from "@material-ui/icons/AddBox";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { SearchRounded } from '@material-ui/icons';
import CircularProgress from "@material-ui/core/CircularProgress";

const baseUrl = "https://image.tmdb.org/t/p/original/"
const Header = () => {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const loading = open && options.length === 0;

  useEffect(() => {
     if (!open) {
       setOptions([]);
     }
   }, [open]);

   const movies = async (e) => {
      const request = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=26ce533749beac93b06c8febb6cac210&language=en-US&query=${e.target.value}&include_adult=false`
      );
      request.data.results && setOptions(request.data.results);
      
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
            className='header__search'
            id="asynchronous-demo"
            style={{ width: 300 }}
            open={open}
            onOpen={() => {
              setOpen(true);
            }}
            onClose={() => {
              setOpen(false);
            }}
            onInputChange={(e) => movies(e)}
            getOptionLabel={(option) => option.original_title}
            options={options}
            loading={loading}

            renderOption ={(option) => (
              <div>
                <img 
                  style={{width:'50px'}}
                 src={`${baseUrl}${option.poster_path}`}
                 alt={option.original_title}
                />
                <h3>{option.original_title}</h3>
              </div>
            )}
            renderInput={(params) => (
              <TextField
                style={{color:'white'}}
                {...params}
                label="Search"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <React.Fragment>
                      {loading ? (
                        <CircularProgress color="inherit" size={20} />
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
