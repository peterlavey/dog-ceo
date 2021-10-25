const BreedUseCase = (BreedRepository, BreedsToSearchBreedsViewModel)=> {
    return {
        getBreeds: async ()=> {
            const breeds = await BreedRepository.getBreeds();
            return BreedsToSearchBreedsViewModel.map(breeds);
        }
    }
};

export default BreedUseCase;