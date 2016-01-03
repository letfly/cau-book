var React = require('react');
var BookForm = require('./BookForm.js')
var BookTable = require('./BookTable.js')


var Book = React.createClass({
    getInitialState : function () {
        return{
            books : [],
            randNum : '',
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
    updateBook : function(id, status){
        $.ajax({
            type : 'post',
            url : '/update',
            data : {id: id, status: status}
        }).done(function (resp){
            if(resp.status == 'success'){
                this.listBook();
            }
        }.bind(this))
    },
    deleteBook : function(id){
        $.ajax({
            type : 'get',
            url : '/delete/'+id,
        }).done(function (resp){
            if(resp.status == 'success'){
                this.listBook();
            }
        }.bind(this))
    },
    rand : function(){
        $.ajax({
            type : 'get',
            url : '/rand',
        }).done(function(resp){
            if(resp.status == 'success'){
                this.setState({randNum:resp.randNum});
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
                <BookTable books = {this.state.books} updateBook = {this.updateBook} deleteBook = {this.deleteBook}/>
                <p>{this.state.randNum}</p><button onClick={this.rand}>获取随机数</button>
            </div>
        )
    }
});


module.exports = Book;
