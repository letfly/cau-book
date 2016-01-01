# -*- coding: utf-8 -*-
from book.core.database import SurrogatePK, Model
from book.core.extensions import db

all = [
    'Book'
]

class Book(SurrogatePK, Model):

    name = db.Column(db.String(64), nullable=False)
    author = db.Column(db.String(64), nullable=False)
    status = db.Column(db.String(64), nullable=False, server_default=u'未借阅')
    date_created = db.Column(db.DateTime(timezone=True), nullable=False,
                             server_default=db.func.current_timestamp())
