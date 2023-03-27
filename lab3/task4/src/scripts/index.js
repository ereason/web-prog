import axios from 'axios'
import VacationModel from './VacationModel.js'
import getVacationPageElement from './VacationUI.js'
import  'bootstrap/dist/css/bootstrap.min.css'
import '../index.css'


let page = 0
const perPage = 20;

addItems()


function addItems(){
    axios.get(`https://api.hh.ru/vacancies?per_page=${perPage}&page=${page}`)
        .then(function (response) {

          response.data["items"].forEach(item=>{
              let vacation = new VacationModel(item);
              let vacationElement = getVacationPageElement(vacation)
              document.getElementById("list").append(vacationElement);
          })
        })
    page++;
}

var throttleTimer;
const throttle = (callback, time) => {
    if (throttleTimer) return;

    throttleTimer = true;

    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
};

const handleInfiniteScroll = () => {
    throttle(() => {
        const endOfPage =
            window.innerHeight + window.pageYOffset >= document.body.offsetHeight;

        if (endOfPage) {
            addItems();
        }

    }, 1000);
};

window.addEventListener("scroll", handleInfiniteScroll);

