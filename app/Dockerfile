FROM python:alpine3.8

WORKDIR /app/main
COPY main/ /app/main
COPY requirement.txt /app/main
RUN pip install -r requirement.txt

RUN ls -al

EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]