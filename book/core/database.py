from .extensions import db


class CRUDMixin(object):
    """
    Mixin that adds convenience methods for CRUD (create, read,
    update, delete) operations.
    """
    def save(self):
        """Save the record."""
        db.session.add(self)
        db.session.commit()
        return self

    def delete(self):
        """Delete the record from the database"""
        db.session.delete(self)
        db.session.commit()
        return self


class Model(CRUDMixin, db.Model):

    __abstract__ = True


class SurrogatePK(object):
    """
    A Mixin that adds a surrogate integer 'primary key' column named
    ``id`` to any declarative-mapped class.
    """
    id = db.Column(db.Integer, primary_key=True)
