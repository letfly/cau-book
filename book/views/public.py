from flask import Blueprint, render_template, request, jsonify
from book.models import Book
from datetime import datetime

blueprint = Blueprint('index', __name__)


@blueprint.route('/')
def index():
    return render_template('index.html')


@blueprint.route('/add', methods=['POST'])
def add():
    form = request.form
    name = form.get('name')
    author = form.get('author')
    book = Book(name=name, author=author, date_created=datetime.now())
    book.save()
    return jsonify(status="success")


@blueprint.route('/delete/<string:book_id>')
def delete(book_id):
    pass


@blueprint.route('/update', methods=['POST'])
def update():
    pass


@blueprint.route('/list')
def list():
    pass
