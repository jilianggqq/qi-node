import { ADD_REMINDER } from '../constants.js';

const reminder = (action) => {
    return {
        text : action.text,
        id : Math.random()
    }
};

// this is a reducer.
const reminders = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
            reminders = [...state, reminder(action)];
            console.log('reminder of this.state.', reminders);
            return reminders;
        default:
            return state;
    }

};

export default reminders;