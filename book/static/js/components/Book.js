var React = require('react');
var BookForm = require('./BookForm.js')
var BookTable = require('./BookTable.js')


var Book = React.createClass({
    getInitialState : function () {
        return{
            books : []
        }
    },
    listBook : function () {
        $.ajax({
            type : 'get',
            url : '/list'
        }).done(function(resp){
            if(resp.status == 'success'){
                this.setState({books:resp.books});
            }
        }.bind(this))
    },
    addBook : function(name, author){
        $.ajax({
            type : 'post',
            url : '/add',
            data : {name:name, author:author}
        }).done(function (resp){
            if(resp.status == 'success'){
                this.listBook();
            }
        }.bind(this))
    },
    componentDidMount : function(){
        this.listBook();
    },
    render : function(){
        return (
            <div>
                <BookForm addBook = {this.addBook}/>
                <BookTable books = {this.state.books}/>
            </div>
        )
    }
});


module.exports = Book;
