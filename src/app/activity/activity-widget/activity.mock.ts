import { times, sample } from 'lodash';
import { IActivity } from '../../shared/Definitions';

export function generateMock (): Array<IActivity> {

    function mockDescription () {
        const descriptions = [
        'User 1 Changed Lamp 3 to ON',
        'Bathroom temperature changed to 55.3F'
        ];
        return sample(descriptions);
    }

    let activities = times(55, (index) => {
        return {
            id: index,
            description: mockDescription()
        };
    });
    activities = activities.reverse();
    return activities;
}