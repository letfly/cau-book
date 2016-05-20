## Dev environment
### Front-end

```
cd book/static/js
npm install
webpack
```

### Back-end

dependencies

```
mkvirtualenv book
pip install -r requirements.txt
```

run

```
python manage.py server
```

db

```
sudo -u postgres psql -c "CREATE USER book WITH PASSWORD 'book';"
sudo -u postgres psql -c "CREATE DATABASE book OWNER book;"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE book to book;"
```

migrate

```
python manage.py db upgrade
```
