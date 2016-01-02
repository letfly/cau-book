var React = require('react');

var BookItem = React.createClass({
    render : function(){
        var t = this.props.todo;

        return (
            <tr>
                <td>{ t.name }</td>
                <td>{ t.status == 0 ? '未完成':'已完成' }</td>
                <td>{ t.time }</td>
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
