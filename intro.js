function calculateAge() {
    const birthDate = new Date("2022-02-13");
    const currentDate = new Date();
    const diffInMilliseconds = currentDate - birthDate;
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.floor(diffInDays / 30);
    return { days: diffInDays, months: diffInMonths};
}

function displayAge() {
    const age = calculateAge();
    const ageDays = document.getElementById("age-days");
    const ageMonths = document.getElementById("age-months");

    ageDays.innerText = age.days;
    ageMonths.innerText = age.months;
}
