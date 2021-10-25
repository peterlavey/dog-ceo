import {Box} from "@mui/material";
import Breeds from "../../components/Breeds";
import Filters from "../../components/Filters";
import BreedsSkeleton from "../../components/BreedsSkeleton";
import Switch from "../../components/Switch";
import Case from "../../components/Switch/Case";
import NoMatches from "../../components/NoMatches";
import FilterInput from "../../components/FilterInput";
import {STATE} from "./states";


const SearchBreeds = ({currentState, filter, filters, filteredBreeds, handleChange, addFilter, removeFilter})=> {
    return (
        <div className="App">
            <Box component={"div"} sx={{ mb: 5 }}>
                <FilterInput value={filter} handleChange={handleChange} onAddFilter={addFilter}/>
                <Filters filters={filters} onRemove={removeFilter}/>
            </Box>

            <Switch value={currentState}>
                <Case type={STATE.LOADING}>
                    <BreedsSkeleton quantity={50}/>
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