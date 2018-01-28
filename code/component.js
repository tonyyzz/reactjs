//复合组件
var Name = React.createClass({
    render: function () {
        return (
            <h1>{this.props.name}</h1>
        );
    }
})
var Link = React.createClass({
    render: function () {
        return (
            <a href={this.props.site}>
                {this.props.site}
            </a>
        );
    }
})
var WebSite = React.createClass({
    render: function () {
        return (
            <div>
                <Name name={this.props.name} />
                <Link site={this.props.site} />
            </div>
        );
    }
})
ReactDOM.render(
    <WebSite name="菜鸟教程" site="http://www.baidu.com" ></WebSite>,
    document.getElementById("example")
)