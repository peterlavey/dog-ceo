import BreedUseCase from "../../domain/useCase/breeds/breedUseCase";
import BreedRepository from "../../data/repository/breeds/breedRepository";
import BreedDataSource from "../../data/dataSource/breeds/breedDataSource";
import BreedsToSearchBreedsViewModelMapper from "../../domain/useCase/breeds/mappers/breedsToSearchBreedsViewModelMapper";
import {request} from "../../data/dataSource/httpRequest";

const DI = {
    BreedUseCase: BreedUseCase(
        BreedRepository(
            BreedDataSource(request)
        ),
        BreedsToSearchBreedsViewModelMapper
    )
};

export default DI;