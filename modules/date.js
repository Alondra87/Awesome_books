import { luxon } from './luxon.js';

function displayDate() {
    document.getElementById('date').innerHTML = luxon.DateTime.now().toJSDate();
}

export default displayDate;