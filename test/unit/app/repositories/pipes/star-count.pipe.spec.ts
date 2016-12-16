// app imports
import { StarCountPipe } from '../../../../../src/app/repositories/pipes/star-count.pipe';


describe('StarCountPipe', () => {

    let starCountPipe: StarCountPipe;

    beforeEach(() => {
       starCountPipe = new StarCountPipe();
    });

    it ('should filter objects with star count lower than required', () => {

        // given
        let givenData = [
                {stargazers_count: 15},
                {stargazers_count: 4},
                {stargazers_count: 27}
            ],
            expectedData = [
                {stargazers_count: 15},
                {stargazers_count: 27}
            ],
            starCount = 12;

        // when
        let actualData = starCountPipe.transform(givenData, starCount);

        // then
        expect(actualData).toEqual(expectedData);
    });

});
