
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
                <ul class="dateview__weekly">
                    <li><small>월</small>1</li>
                    <li><small>월</small>2</li>
                    <li><small>월</small>3</li>
                    <li><small>월</small>4</li>
                    <li><small>월</small>5</li>
                    <li><small>월</small>6</li>
                    <li><small>월</small>7</li>
                </ul>
            </div>
        `;
    }
}

export default DateView;