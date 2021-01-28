class UserData
{
    constructor(){
        this.index = null;

        this.emailInput = null;
        this.nameInput = null;

        this.radio1 = null;
        this.radio2 = null;
        this.radio3 = null;
        this.radio4 = null;
        this.radio5 = null;
        this.radio6 = null;
    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val()
        });
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        });
    }

    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            nameInput: this.nameInput,
            emailInput: this.emailInput,

            radio1: this.radio1,
            radio2: this.radio2,
            radio3: this.radio3,
            radio4: this.radio4,
            radio5: this.radio5,
            radio6: this.radio6,
        });
    }
}