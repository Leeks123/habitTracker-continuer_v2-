
class DateView {
    constructor({$app, state}) {
        this.state = state;
        this.$target = document.createElement('div');
        this.$target.className = 'dateview';
        $app.appendChild(this.$target);
        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$target.innerHTML = `
            <div class="dateview__container">
                tetas
            </div>
        `;
    }
}

export default DateView;