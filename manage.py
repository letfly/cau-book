from flask.ext.migrate import MigrateCommand
from flask.ext.script import Manager, Server

from book import app as web


PORT = 5000
app = web.create_app()
manager = Manager(app)

manager.add_command('server', Server(host='0.0.0.0', use_reloader=True, port=5000))
manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    print "app started at port "+str(PORT)+"..."
    manager.run()
