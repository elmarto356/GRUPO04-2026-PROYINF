FROM python:3.11-slim

WORKDIR /tests

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "-m", "unittest", "discover", "-s", ".", "-v"]