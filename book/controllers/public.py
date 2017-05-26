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
    return jsonify(status='success')


@blueprint.route('/delete/<int:book_id>')
def delete(book_id):
    book = Book.query.get(book_id)
    book.delete()
    return jsonify(status='success')


@blueprint.route('/update', methods=['POST'])
def update():
    form = request.form
    book_id = form.get('id')
    status = form.get('status')
    book = Book.query.get(book_id)
    book.status = status
    book.save()
    return jsonify(status='success')


@blueprint.route('/list')
def list():
    books = Book.query.order_by('date_created')
    return jsonify(status='success', books=[b.as_dict() for b in books])
