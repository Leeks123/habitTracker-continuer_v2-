
class Habits {
    constructor({$app, state}) {
        this.state = state;
        this.$target = document.createElement('div');
        this.$target.className = 'habits';
        $app.appendChild(this.$target);
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$target.innerHTML = `
            ${this.state.map((habit) => {
                return `
                    <div class="habit">
                        ${habit}
                    </div>
                `;
            }).join('')}
        `;
    }
}

export default Habits;