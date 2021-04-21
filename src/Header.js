
class Header {
    months = ["January", "February", "March", "April", "May", "June","July", 
              "August", "September", "October", "November", "December"];
    constructor({$app, state}) {
        this.state = state;
        this.$target = document.createElement('header');
        this.$target.className = 'header';
        $app.appendChild(this.$target);
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$target.innerHTML = `
            <div class="header__container">
                <div class="header__container--text">
                    <h1>${this.months[new Date().getMonth()]}</h1>
                    <small>${new Date().getFullYear()}</small>
                </div>
            </div>
        `;
    }
}

export default Header;