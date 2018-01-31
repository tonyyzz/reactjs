var MyComponent = React.createClass({
    render: function () {
        return (
            <div>
                <input type="text" ref="myInput"/>
                <input type="button" value="点我聚焦" onClick={this.handleClick}/>
            </div>
        );
    },
    handleClick: function () {
        this
            .refs
            .myInput
            .focus();
    }
})
ReactDOM.render(
    <MyComponent/>, document.getElementById("example"))