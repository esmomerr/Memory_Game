// let game = [😎, 🙂, 🙄, 😏, 😴, 😝, 🤑, 😮];
let games = [1, 2, 3, 4, 5, 6, 7, 8];
const gameBox = document.querySelector(".gameBox");
const newBtn = document.querySelector(".new-btn");

function createGameArray(){
    //Belirtilen game değişkenini ikiye katlar
    games = [...games, ...games];

    //sort metodu ile sıralama işlemi yapılarak ardından rastgele karıştırma yapar
    games.sort(x => Math.random() -0.5)
}

function handleGameBtn() {
    if(this.classList.contains('correct')) {
        return;
    }

    if(this.classList.contains('active')) {
        return;
    }

    const activeBtns = document.querySelectorAll('.active');
    if (activeBtns.length === 1){
        if(activeBtns[0].innerHTML === this.innerText){
            activeBtns[0].classList.remove('active');
            activeBtns[0].classList.add('correct');
            this.classList.add('correct');

            //oyun bittiginde ekrana alert cikartiyor
            if(document.querySelectorAll('li').length === document.querySelectorAll('.correct').length){
                alert("Oyun Bitti TEBRİKLER:)");
            }

            //islemler bitti
            return
        }
    }
    
    if(activeBtns.length >=2 ){
        for(const btn of activeBtns){
            btn.classList.remove('active');
        }
    }
    this.classList.add('active');

   
}
function renderGameScreen() {
    for(const game of games) {
        gameBox.innerHTML += `<li>${game}</li>`;
    }
    
    const gameBtns = document.querySelectorAll('.gameBox li');
    
    for (const btn of gameBtns) {
        btn.addEventListener('click', handleGameBtn);
    }
}

function init() {
    createGameArray();
    renderGameScreen();
}

init();

//yeni oyun acma
function resetGame(){
    gameBox.innerHTML = "";
    games = [1, 2, 3, 4, 5, 6, 7, 8];
    createGameArray();
    renderGameScreen();
}

newBtn.addEventListener('click',function(){
    resetGame()
})