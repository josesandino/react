class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 5, title: "Hello World"};
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

    render() {
        console.log("RENDERING");
        const {count, title} = this.state;

        return (
            <section className="site-wrap">
                <h1>Header: {title}!</h1>
                <p>The counter is: {count}</p>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <button onClick={this.increment}>+</button>
                </div>
            </section>
        );
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1,
            title: "INC"
          }));
    }

    decrement() {
        this.setState(state => ({
            count: state.count - 1,
            title: "DEC"
          }));
    }
}

ReactDOM.render(
    <AppComponent></AppComponent>,
    document.getElementById("application"));

