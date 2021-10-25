import DI from "./di";

describe('When an instance of BreedUseCase its requested', ()=> {
    let breedUseCase;
    beforeAll(()=> {
        breedUseCase = DI.BreedUseCase
    });

    it('return an BreedUseCase with all its dependencies', ()=> {
        expect(breedUseCase).toBeDefined();
    })
})