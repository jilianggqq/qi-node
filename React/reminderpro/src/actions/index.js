import { ADD_REMINDER } from '../constants';

// creat an redux action named addReminder.
export const addReminder = (text) => {
    const action = {
        type : ADD_REMINDER,
        text
    };

    console.log('action in addReminder', action);
    return action;
}