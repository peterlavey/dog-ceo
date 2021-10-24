import BreedUseCase from "./domain/useCase/breedUseCase";
import BreedRepository from "./data/repository/breedRepository";
import BreedDataSource from "./data/dataSource/breedDataSource";
import BreedsToSearchBreedsViewModel from "./domain/useCase/mappers/breedsToSearchBreedsViewModel";
import {request} from "./httpRequest";

const DI = {
    BreedUseCase: BreedUseCase(
        BreedRepository(
            BreedDataSource(request)
        ),
        BreedsToSearchBreedsViewModel
    )
};

export default DI;