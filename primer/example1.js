class AppComponent extends React.Component {
    render() {
        return (
            <section className="site-wrap">
                <h1>Header</h1>
                <p>Lorum</p>
            </section>
        );
    }
}

ReactDOM.render(
    <AppComponent></AppComponent>,
    document.getElementById("application"));

