## Description

[Django](https://www.djangoproject.com/start/overview/) was invented to meet fast-moving newsroom deadlines, while satisfying the tough requirements of experienced Web developers.

<b>Do not forget to change the database settings in the project!</b>

<b>Swagger UI</b>: `http://localhost:8000/swagger/`

## Installation

```bash
$ pip install -r requirements.txt
```

## Running the app

```bash
# migration
$ python manage.py migrate

# creating a super user
$ python manage.py createsuperuser

# run server
$ python manage.py runserver
```