var React = require('react');
var BookItem = require('./BookItem');

var BookTable = React.createClass({
    render : function(){
        var books = this.props.books.map(function(item){
                return <BookItem key={item.id} book={item} updateBook = {this.props.updateBook}/>
            }.bind(this));
        return (
            <div>
                <h2>图书名单</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>书名</th>
                            <th>借阅状态</th>
                            <th>添加时间</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books}
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = BookTable;
