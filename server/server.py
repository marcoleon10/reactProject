from flask import Flask
import json
from data import catalog
from flask_cors import CORS

app = Flask(__name__)
CORS(app) # This will enable CORS for all routes

@app.get("/")
def home():
    return "Hello, from flask"

@app.get("/test")
def test():
    return "This is another page"


@app.get("/api/products")
def get_products():
    return json.dumps(catalog)
 

app.run(debug=True) 