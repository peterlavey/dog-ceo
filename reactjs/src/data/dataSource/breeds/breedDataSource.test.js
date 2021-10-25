import BreedDataSource from "./breedDataSource";

const requestMock = {
    getBreedsNamesCalled: false,
    getBreedImageCalled: false,
    getSubBreedImageCalled: false
};

const request = {
    get: (path)=> {
        switch (path) {
            case '/breeds/list/all':
                requestMock.getBreedsNamesCalled = true;
                return new Promise((resolve, _)=> resolve({data:{}}));
            case `/breed/poodle/images/random`:
                requestMock.getBreedImageCalled = true;
                return new Promise((resolve, _)=> resolve({data:{}}));
            case `/breed/poodle/miniature/images/random`:
                requestMock.getSubBreedImageCalled = true;
                return new Promise((resolve, _)=> resolve({data:{}}));
        }
    }
};

describe('When BreedDataSource is instantiated', ()=> {
    let dataSource;
    beforeAll(()=> {
        dataSource = BreedDataSource(request);
    });

    it('and "getBreedsNames" its called return success', async ()=> {
        expect(requestMock.getBreedsNamesCalled).toBeFalsy();
        await dataSource.getBreedsNames();
        expect(requestMock.getBreedsNamesCalled).toBeTruthy();
    });

    it('and "getBreedImage" its called return success', async ()=> {
        expect(requestMock.getBreedImageCalled).toBeFalsy();
        await dataSource.getBreedImage("poodle");
        expect(requestMock.getBreedImageCalled).toBeTruthy();
    });

    it('and "getSubBreedImage" its called return success', async ()=> {
        expect(requestMock.getSubBreedImageCalled).toBeFalsy();
        await dataSource.getSubBreedImage("poodle", "miniature");
        expect(requestMock.getSubBreedImageCalled).toBeTruthy();
    });
});