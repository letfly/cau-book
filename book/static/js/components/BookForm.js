var React = require('react');

var BookForm = React.createClass({
    getInitialState: function() {
        return {
            name: '',
            author: ''
        };
    },
    changeName: function(ev) {
        this.setState({
            name: ev.target.value
        });
    },
    changeAuthor: function(ev) {
        this.setState({
            author: ev.target.value
        });
    },
    addBook : function(ev){
        ev.preventDefault();

        this.props.addBook(this.state.name,this.state.author);

        this.setState({
            name: '',
            author: '',
        })
    },
    render : function(){
        return (
            <form className="input-group" onSubmit={this.addBook}>
                <p>书名:<input className="form-control" id="name" value={this.state.name} onChange={this.changeName} /></p>
                <p>作者:<input className="form-control" id="author" value={this.state.author} onChange={this.changeAuthor} /></p>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">添加图书</button>
                </span>
            </form>
        )
    }
});

module.exports = BookForm;
