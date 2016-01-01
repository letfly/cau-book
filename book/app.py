from flask import Flask
from werkzeug.utils import import_string


blueprints = [
    'book.views.public:blueprint'
]
def create_app():
    app = Flask(__name__)
    register_blueprints(app)
    return app


def register_blueprints(app):
    for bp in blueprints:
        app.register_blueprint(import_string(bp))
