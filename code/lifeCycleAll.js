var Button = React.createClass({
    getInitialState: function () {
        return {data: 0}
    },
    setNewNumber: function () {
        console.log(this.state.data)
        this.setState({
            data: this.state.data + 1
        })
    },
    render: function () {
        return (
            <div>
                <button onClick={this.setNewNumber}>Increment</button>
                <Content myNumber={this.state.data}/>
            </div>
        );
    }
})
var Content = React.createClass({
    componentWillMount: function () {
        console.log("component will mount")
    },
    componentDidMount: function () {
        console.log("component did mount");
    },
    componentWillReceiveProps: function () {
        console.log("component will receive props");
    },
    shouldComponentUpdate: function () {
        return true;
    },
    componentWillUpdate: function () {
        console.log("component will update");
    },
    componentDidUpdate: function () {
        console.log("component did update")
    },
    componentWillUnmount: function () {
        console.log("component will unmount")
    },
    render: function () {
        return (
            <h1>{this.props.myNumber}</h1>
        );
    }
})
ReactDOM.render(
    <div>
    <Button/>
</div>, document.getElementById("example"))