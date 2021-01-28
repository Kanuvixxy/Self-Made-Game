class Form
{
    constructor(){
        this.greeting = createElement('h2');

        this.nameInput = createInput("");
        this.nameInput.style('width', '160px');

        this.emailInput = createInput("");
        this.emailInput.style('width', '160px');

        this.submit = createButton('SUBMIT');
        this.submit.style('width', '100px');
        this.submit.style('height', '50px');
        this.submit.style('background', 'white');

        this.title = createElement('h1');

        this.name = createElement('h3');

        this.email = createElement('h3');

        this.feedback = createElement('h3', "Feedbacks:");

        this.description = createInput("Feedback Here");
        this.description.style('width', '420px');
        this.description.style('height', '100px');

        this.reset = createButton('RESET');
        this.reset.style('width', '100px');
        this.reset.style('height', '50px');
        this.reset.style('background', 'white');

        this.q1 = createElement('h3', "1. Do you use online shopping apps?");
        this.radio1 = createRadio('h4');
        this.radio1.option('YES');
        this.radio1.option('NO');
        this.radio1.style('width', '60px');

        this.q2 = createElement('h3', "2. Do you buy most of your products online?");
        this.radio2 = createRadio('h4');
        this.radio2.option('YES');
        this.radio2.option('NO');
        this.radio2.style('width', '60px');

        this.q3 = createElement('h3', "3. Do you think online shopping is as reliable as window shopping?");
        this.radio3 = createRadio('h4');
        this.radio3.option('YES');
        this.radio3.option('NO');
        this.radio3.style('width', '60px');

        this.q4 = createElement('h3', "4. Do you prefer online shopping over window shopping?");
        this.radio4 = createRadio('h4');
        this.radio4.option('YES');
        this.radio4.option('NO');
        this.radio4.style('width', '60px');

        this.q5 = createElement('h3', "5. Do you think online shopping can get better?");
        this.radio5 = createRadio('h4');
        this.radio5.option('YES');
        this.radio5.option('NO');
        this.radio5.style('width', '60px');

        this.q6 = createElement('h3', "6. Is selling groceries and perishable items online a good idea?");
        this.radio6 = createRadio('h4');
        this.radio6.option('YES');
        this.radio6.option('NO');
        this.radio6.style('width', '60px');
    }

    display(){
        this.title.html('Online Shopping Survey');
        this.title.position(displayWidth / 2 + 50, 20);

        this.name.html("Name");
        this.name.position(displayWidth / 2 - 100, 125);

        this.email.html("Email");
        this.email.position(displayWidth / 2 - 100, 155);

        this.nameInput.position(displayWidth / 2 - 40, 145);

        this.emailInput.position(displayWidth / 2 - 40, 175);

        this.submit.position(displayWidth / 2 + 50, displayHeight - 140);

        this.reset.position(displayWidth / 2 + 250, displayHeight - 140);

        this.feedback.position(displayWidth / 2 - 100, 830);
        
        this.description.position(displayWidth / 2 - 5, 810);
        this.description.style('color', 'blue');
        this.description.style('fontSize', '20px');

        this.q1.position(displayWidth / 2 - 100, 220);
        this.radio1.position(displayWidth / 2 - 105, 260);

        this.q2.position(displayWidth / 2 - 100, 320);
        this.radio2.position(displayWidth / 2 - 105, 360);

        this.q3.position(displayWidth / 2 - 100, 420);
        this.radio3.position(displayWidth / 2 - 105, 460);

        this.q4.position(displayWidth / 2 - 100, 520);
        this.radio4.position(displayWidth / 2 - 105, 560);

        this.q5.position(displayWidth / 2 - 100, 620);
        this.radio5.position(displayWidth / 2 - 105, 660);

        this.q6.position(displayWidth / 2 - 100, 720);
        this.radio6.position(displayWidth / 2 - 105, 760);

        this.submit.mousePressed(() => {
            this.description.hide()
            this.feedback.hide()

            this.greeting.html("Thank for Completing the Survey")
            this.greeting.position(displayWidth / 2 - 30, 810);
            this.greeting.style('width', '500px')
            this.greeting.style('height', '500px')
            this.greeting.style('background', 'white')

            user.nameInput = this.nameInput.value()
            user.emailInput = this.emailInput.value()

            user.radio1 = this.radio1.value()
            user.radio2 = this.radio2.value()
            user.radio3 = this.radio3.value()
            user.radio4 = this.radio4.value()
            user.radio5 = this.radio5.value()
            user.radio6 = this.radio6.value()

            playerCount += 1
            user.index = playerCount

            user.update()
            user.updateCount(playerCount)
        });
    }
}