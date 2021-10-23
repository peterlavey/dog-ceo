import Breed from "../Breed";

const Breeds = ({breeds})=> {
    return (
        <div>
            {
                breeds.map((breed)=> <Breed {...breed}/>)
            }
        </div>
    )
};

export default Breeds;