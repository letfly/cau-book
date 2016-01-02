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
    componentDidMount : function(){
        this.listBook();
    },
    render : function(){
        return (
            <div>
                <BookForm/>
                <BookTable books = {this.state.books}/>
            </div>
        )
    }
});


module.exports = Book;
