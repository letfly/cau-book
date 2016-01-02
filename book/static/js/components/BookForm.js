var React = require('react');

var BookForm = React.createClass({
    render : function(){
        return (
            <form className="input-group">
                <input ref="content" className="form-control" id="content"/>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Add</button>
                </span>
            </form>
        )
    }
});

module.exports = BookForm;
