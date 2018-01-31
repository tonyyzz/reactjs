var HelloMessage = React.createClass({
    getInitialState: function () {
        return {value: "hello world"}
    },

    render: function () {
        return (
            <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <h1>{this.state.value}</h1>
            </div>
        );
    },
    handleChange: function (event) {
        this.setState({value: event.target.value})
    }
});
ReactDOM.render(
    <HelloMessage/>, document.getElementById("example"))