//React state（状态）
var LinkButton = React.createClass({
    getInitialState: function () {
        return { liked: false }
    },
    handleClick: function (event) {
        this.setState({ liked: !this.state.liked });
        console.log("改变状态")
    },
    render: function () {
        var text = this.state.liked ? "喜欢" : "不喜欢";
        return (
            <p onClick={this.handleClick}>
                你<b>{text}</b>我，点我切换状态
            </p>
        )
    }
})
ReactDOM.render(
    <LinkButton />,
    document.getElementById('example')
)