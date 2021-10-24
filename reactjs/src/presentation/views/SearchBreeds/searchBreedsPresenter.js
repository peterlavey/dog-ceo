import SearchBreeds from "./searchBreedsView";
import {useEffect, useState} from "react";
import {STATE} from "./states";


const SearchBreedsPresenter = ({useCase})=> {
    const [currentState, setCurrentState] = useState(STATE.LOADING);
    const [filter, setFilter] = useState('');
    const [filters, setFilters] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [filteredBreeds, setFilteredBreeds] = useState([]);

    const loadBreeds = async ()=> {
        const breedViewModel = await useCase.getBreeds();
        setFilteredBreeds(breedViewModel.breeds);
        setBreeds(breedViewModel.breeds);
    };

    const filterBreeds = ()=> {
        if(filters.length) {
            const _filteredBreeds = breeds.filter((breed)=> filters.some((filter)=> breed.name.includes(filter)));
            setFilteredBreeds(_filteredBreeds);
        } else {
            setFilteredBreeds(breeds);
        }
    };

    const addFilter = ()=> {
        setFilters([...filters, filter]);
        setFilter('');
    };

    const removeFilter = (_filter)=> {
        const _filters = [...filters];
        const index = _filters.indexOf(_filter)
        _filters.splice(index, 1)
        setFilters(_filters);
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

    useEffect(()=> {
        if(breeds.length) {
            if(filteredBreeds.length) {
                setCurrentState(STATE.MATCHES_FOUND);
            } else {
                setCurrentState(STATE.NO_MATCHES)
            }
        } else {
            setCurrentState(STATE.LOADING);
        }
    }, [breeds, filteredBreeds]);

    return (
        <SearchBreeds
            currentState={currentState}
            filter={filter}
            filters={filters}
            filteredBreeds={filteredBreeds}
            handleChange={handleChange}
            addFilter={addFilter}
            removeFilter={removeFilter}
        />
    );
};

export default SearchBreedsPresenter;