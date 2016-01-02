var React = require('react');
var BookItem = require('./BookItem');

var BookTable = React.createClass({
    render : function(){
        return (
            <div>
                <h2>Book List</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>status</th>
                            <th>date_created</th>
                            <th>operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        tbody:show book
                    </tbody>
                </table>
            </div>
        )
    }
});

module.exports = BookTable;
