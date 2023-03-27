function getVacationPageElement(Vacation){
    let divWrapper = document.createElement("div");
    let divId = document.createElement("div");
    let divName = document.createElement("a");
    let divArea = document.createElement("div");
    let divEmployer = document.createElement("div");


    divId.innerHTML = "id: " + Vacation.id
    divArea.innerHTML = "Локация: " + Vacation.area
    divEmployer.innerHTML = "Работодатель: " + Vacation.employer

    divName.href = Vacation.vacationLink;
    divName.innerHTML = Vacation.name

    divWrapper.append(divId);
    divWrapper.append(divName);
    divWrapper.append(divArea);
    divWrapper.append(divEmployer);

    divWrapper.className = "border border-primary rounded item"
    divId.className = "border border-secondary rounded job-id"
    divName.className = "border border-secondary rounded job-name"
    divArea.className = "border border-secondary rounded job-area"
    divEmployer.className = "border border-secondary rounded job-employer"

    return divWrapper
}

module.exports = getVacationPageElement