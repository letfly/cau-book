var React = require('react');

var BookItem = React.createClass({
    handleUpdate : function(id,status){
        this.props.updateBook(id,status);
    },
    render : function(){
        var b = this.props.book;
        var updateBtn;

        if(b.status == 0){
            updateBtn = <button onClick={this.handleUpdate.bind(this,b.id,1)} className="btn btn-primary">已借阅</button>
        }else{
            updateBtn = <button onClick={this.handleUpdate.bind(this,b.id,0)} className="btn btn-danger">未借阅</button>
        }

        return (
            <tr>
                <td>{ b.name }</td>
                <td>{ b.status == 0 ? '未借阅':'已借阅' }</td>
                <td>{ b.date_created }</td>
                <td>
                    {updateBtn}
                    <button className="btn btn-danger">删除</button>
                </td>
            </tr>
        )
    }
});

module.exports = BookItem;
