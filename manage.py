from flask.ext.migrate import MigrateCommand
from flask.ext.script import Manager, Server

from book import app as web


app = web.create_app()
manager = Manager(app)

manager.add_command('server', Server(host='0.0.0.0', use_reloader=True))
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    manager.run()
