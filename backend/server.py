from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

def search_google_cse(query):
    api_key = 'AIzaSyDX4QWPHmsjG6lWEhW4oRdY7XwZq_gMfHA'
    cse_id = 'e38fc14889fbc44cc'
    url = f'https://www.googleapis.com/customsearch/v1?q=recipes: {query}&cx={cse_id}&key={api_key}'
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if 'items' in data:
            return data['items']
    return []

@app.route('/scrape_recipes', methods=['POST'])
def scrape_recipes():
    data = request.json
    query = ' '.join(data.values())  # Assuming data is a dictionary with search query values
    recipes = search_google_cse(query)
    return jsonify(recipes)

if __name__ == '__main__':
    app.run(debug=True)  # Run the Flask app in debug mode
