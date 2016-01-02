var React = require('react');
var BookForm = require('./BookForm.js')
var BookTable = require('./BookTable.js')


var Book = React.createClass({
    render : function(){
        return (
            <div>
                <BookForm/>
                <BookTable/>
            </div>
        )
    }
});


module.exports = Book;
