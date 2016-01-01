from os import environ


class Config(object):

    DEBUG = True
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = 'postgresql://%s:%s@%s:%s/%s' % (
        environ.get('PG_USER', 'book'),
        environ.get('PG_PASSWORD', 'bbbb'),
        environ.get('PG_HOST', 'localhost'),
        environ.get('PG_PORT', '5432'),
        environ.get('PG_DATABASE', 'book'))
