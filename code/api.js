//setState
var Counter = React.createClass({
    getInitialState: function () {
        return {clickCount: 0}
    },
    handleClick: function () {
        this
            .setState({
                n: this.props.n + 1
            }, function () {
                console.log("replaceState 回调2")
                console.log(this.state, this.props)
            })
    },
    render: function () {
        console.log("Counter render")
        return (
            <h1 onClick={this.handleClick}>点我，点我次数为：{this.state.clickCount}</h1>
        );
    }
})
ReactDOM.render(
    <Counter n={1}/>, document.getElementById("example"));