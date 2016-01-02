var React = require('react');

var BookItem = React.createClass({
    render : function(){
        var b = this.props.book;

        return (
            <tr>
                <td>{ b.name }</td>
                <td>{ b.status == 0 ? '未完成':'已完成' }</td>
                <td>{ b.date_created }</td>
                <td>
                    <button className="btn btn-primary">已借阅</button>
                    <button className="btn btn-danger">未借阅</button>
                    <button className="btn btn-danger">删除</button>
                </td>
            </tr>
        )
    }
});

module.exports = BookItem;
