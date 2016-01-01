## node npm webpack
参见http://letflysite.com/blog/185/
npm install -g npm
npm install
npm install -g webpack
webpack

## Dev environment

Install dependencies.

```
mkvirtualenv book
pip install -r requirements/prod.txt
```

Run.

```
python manage.py server
```

Test.

```
python manage.py test
```

db.

```
sudo - u postgres psql -c "CREATE USER book WITH PASSWORD 'bbbb';"
sudo - u postgres psql -c "CREATE DATABASE book OWNER book;"
sudo - u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE book to book;"
```
