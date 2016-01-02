var React = require('react');

var BookForm = React.createClass({
    addBook : function(){
        this.props.addBook(this.refs.name.value,this.refs.author.value);
    },
    render : function(){
        return (
            <form className="input-group">
                <p>书名:<input ref="name" className="form-control" id="name" /></p>
                <p>作者:<input ref="author" className="form-control" id="author" /></p>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.addBook}>添加图书</button>
                </span>
            </form>
        )
    }
});

module.exports = BookForm;
