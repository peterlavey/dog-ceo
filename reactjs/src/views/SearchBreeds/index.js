import {useEffect, useState} from "react";
import {GETBreedsImages} from "../../services";
import Breeds from "../../components/Breeds";
import {TextField} from "@mui/material";
import Filters from "../../components/Filters";
import BreedsSkeleton from "../../components/BreedsSkeleton";
import Switch from "../../components/Switch";
import Case from "../../components/Switch/Case";
import NoMatches from "../../components/NoMatches";


const STATE = {
    LOADING: "LOADING",
    MATCHES_FOUND: "MATCHES_FOUND",
    NO_MATCHES: "NO_MATCHES"
};

const SearchBreeds = ()=> {
    const [currentState, setCurrentState] = useState(STATE.LOADING);
    const [filter, setFilter] = useState('');
    const [filters, setFilters] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    const loadBreeds = async ()=> {
        const _breeds = await GETBreedsImages();
        setBreeds(_breeds);
        setFilteredBreeds(_breeds);
        setCurrentState(STATE.MATCHES_FOUND);
    };

    const filterBreeds = ()=> {
        if(filters.length) {
            const _filteredBreeds = breeds.filter((breed)=> filters.some((filter)=> breed.name.includes(filter)));
            setFilteredBreeds(_filteredBreeds);
            if(_filteredBreeds.length) {
                setCurrentState(STATE.MATCHES_FOUND);
            } else {
                setCurrentState(STATE.NO_MATCHES);
            }
        } else {
            setFilteredBreeds(breeds);
            setCurrentState(STATE.MATCHES_FOUND);
        }
    };

    const addFilter = ()=> {
        setFilters([...filters, filter]);
        setFilter('');
    };

    const removeFilter = (_filter)=> {
        const _filters = [...filters];
        const index = _filters.indexOf(_filter)
        if (index !== -1) {
            _filters.splice(index, 1)
            setFilters(_filters);
        }
    }

    const onPressEnter = ({key})=> {
        if (key === 'Enter') {
            addFilter();
        }
    };

    const handleChange = ({target})=> {
        setFilter(target.value);
    };

    useEffect(()=> {
        loadBreeds();
    }, []);

    useEffect(()=> {
        filterBreeds();
    }, [filters]);

    return (
        <div className="App">
            <TextField
                fullWidth
                autoComplete={""}
                autoFocus
                id="standard-search"
                label="Breed filter"
                type="search"
                variant="standard"
                margin="dense"
                value={filter}
                onChange={handleChange}
                onKeyDown={onPressEnter}
            />
            <Filters filters={filters} remove={removeFilter}/>

            <Switch value={currentState}>
                <Case type={STATE.LOADING}>
                    <BreedsSkeleton/>
                </Case>
                <Case type={STATE.MATCHES_FOUND}>
                    <Breeds breeds={filteredBreeds}/>
                </Case>
                <Case type={STATE.NO_MATCHES}>
                    <NoMatches/>
                </Case>
            </Switch>
        </div>
    );
};

export default SearchBreeds;