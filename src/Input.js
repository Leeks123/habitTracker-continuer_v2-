
class Input {
    constructor({$app, state }) {
        this.state = state;
        this.$target = document.createElement('div');
        this.$target.className = 'input';
        $app.appendChild(this.$target);
        this.render();
    }


    setState(nextState) {
        this.state = {...nextState};
        console.log('input state settup',this.state);
        this.render();
    }

    render() {
        this.$target.innerHTML = this.state.isActive ?`
            <div class="input__fab">+</div>
            <div class="input__toast active">dfjkdfj</div>
        `:`
            <div class="input__fab active">+</div>
            <div class="input__toast">dfjkdfj</div>
        `;

        document
            .querySelector('.input__fab')
            .addEventListener('click',(e) => {
                console.log('fab click',this.state.isActive);
                
                this.setState({
                    isActive: !this.state.isActive
                });
            });
        document
            .querySelector('.input__toast')
            .addEventListener('click',() => {
                console.log('toast click');
                this.setState({
                    isActive: !this.state.isActive
                });
            });
    }
}

export default Input;