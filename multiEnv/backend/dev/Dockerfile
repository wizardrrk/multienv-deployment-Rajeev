# Base image (OS)
FROM python:3.14-slim
# Working directory
WORKDIR /app
# Copy src code to container
COPY . .
# Run the build commands
RUN pip install -r requirements.txt
# expose port 3001
EXPOSE 3001
# serve the app / run the app (keep it running)
CMD ["python","app.py"]