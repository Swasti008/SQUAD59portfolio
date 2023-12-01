// let welcome = document.getElementById("welcome")
// window.addEventListener('scroll', () => {
//     let value = window.scrollY;
//     text.style.marginTop = value * 2.5 +'px';
// }
// );
// const blur = document.getElementById("info")
// const text= document.getElementsByClassName("mentor1")
// var click  = 0
// function toggle() {
//     if (click === 0){
//         blur.style.filter = "blur(15px)"
//         click = 1
//     }
//     else if(click === 1){
//         blur.style.filter = "blur(0px)"
//         click = 0
//     }
    
// }

// const infobr = document.getElementById('infobr')
// const namebr = document.getElementById('namebr')

// const names=["Nava","Akash"]
// const info = [ "As a college student majoring in Operations and human resource management, I have gained valuable
// experience in various aspects of the field. I have worked as a temporary staff at the college HR office for
// two weeks, where I assisted in the recruitment process, screening candidates, and conducting phone
// interviews. I have also completed a one-month internship at a medium-scale textile manufacturing unit,
// where I learned about quality management and quality control techniques. Currently, I am doing another
// internship at Kalvium, a leading educational technology company, as a Program Manager (Campus) Intern
// at their Coimbatore base. In this role, I facilitate students and Tech mentors to use Kalvium's innovative
// learning platform provide feedback to the development team and provide a bridge between the
// management and the product team, "aiming at program success.,From: Nasriganj, Bihar
// Bio: I am Akash Raj, Technical Mentor at Kalvium and handling Squad 59. I have good knowledge in HTML, CSS , JS, Python Programming, Data Analytics, Data cleansing, SQL, Excel and Machine Learning."]

// var info = [`"As a college student majoring in Operations and human resource management, I have gained valuable
// experience in various aspects of the field. I have worked as a temporary staff at the college HR office for
// two weeks, where I assisted in the recruitment process, screening candidates, and conducting phone
// interviews. I have also completed a one-month internship at a medium-scale textile manufacturing unit,
// where I learned about quality management and quality control techniques. Currently, I am doing another
// internship at Kalvium, a leading educational technology company, as a Program Manager (Campus) Intern
// at their Coimbatore base. In this role, I facilitate students and Tech mentors to use Kalvium's innovative
// learning platform provide feedback to the development team and provide a bridge between the
// management and the product team"`,`"I am Akash Raj, Technical Mentor at Kalvium and handling Squad 59. I have good knowledge in HTML, CSS , JS, Python Programming, Data Analytics, Data cleansing, SQL, Excel and Machine Learning."`]

// function pointing(index){
//     infobr.innerText= info[1];
//     namebr.innerText = names[1]
// }
const wholeSection = document.getElementById("info");
const popupTitle = document.getElementById('popup-title');
const gifDiv = document.getElementById('popup-gif');
const popupDiv = document.getElementById('popup');
const games = {
    eterniasLab: {
        title: "Eternias-Labyrinth",
        gifSrc: "./New folder/Intro.gif"
    },
    victoryGrid: {
        title: "Victory Grid",
        gifSrc: "./New folder/swasti.gif"
    },
    cosmicCollision: {
        title: "Asteroid Collision",
        gifSrc: "./New folder/chirag.gif"
    },
    kangarooJump: {
        title: "Roo Run",
        gifSrc: "./New folder/ishika.gif.gif"
    },
    catchThefish: {
        title: "Catch The Fish",
        gifSrc: "./New folder/catchTheFish.gif"
    },
    flappyBird: {
        title: "Fluffy Bird",
        gifSrc: "./New folder/vanshika.gif"
    },
    scrambleWords: {
        title: "Scramble Words",
        gifSrc: "./New folder/kamakshi.gif"
    },
    snakeGame: {
        title: "Snake Race",
        gifSrc: "./New folder/snake race gif.gif"
    },

    // Add more games as needed
}

document.addEventListener('click', (e) => {
    if (e.target.classList.contains("gameButton")) {
        openPopup(e.target.dataset.gamename);
    }
});

function openPopup(gameName) {
    console.log(games[gameName].title);
    console.log(games[gameName].gifSrc); // Fix the typo here
    popupTitle.innerText = games[gameName].title;
    gifDiv.src = games[gameName].gifSrc; // Fix the typo here
    popupDiv.style.display = 'block';
    wholeSection.style.filter ='blur(5px)'

}

function closePopup() {
    popupDiv.style.display = 'none';
    wholeSection.style.filter = 'blur(0px)';
}

