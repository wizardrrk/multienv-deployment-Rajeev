FROM python:3.10-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt --no-cache-dir
COPY . .
ENV FLASK_ENV=production
EXPOSE 3002
CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:3002", "app:app"]