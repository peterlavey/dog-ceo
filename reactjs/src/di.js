import BreedUseCase from "./domain/useCase/breedUseCase";
import BreedRepository from "./data/repository/breedRepository";
import BreedDataSource from "./data/dataSource/breedDataSource";
import BreedsToSearchBreedsViewModelMapper from "./domain/useCase/mappers/breedsToSearchBreedsViewModelMapper";
import {request} from "./httpRequest";

const DI = {
    BreedUseCase: BreedUseCase(
        BreedRepository(
            BreedDataSource(request)
        ),
        BreedsToSearchBreedsViewModelMapper
    )
};

export default DI;