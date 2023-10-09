from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://127.0.0.1:5500"}})  # Only allow requests from trusted source

@app.route('/your-endpoint', methods=['POST', 'GET'])  # Specify the allowed HTTP methods
def submit():
    try: 
        if request.method == 'GET':
            method = 'GET'
        elif request.method == 'POST':
            method = 'POST'
        else:
            raise ValueError("Error defining HTTP method")
    except ValueError as e:
        print(e)

    # You can access other parts of the request data as well
    data = request.get_json()

    # Do something with the method and data
    response_data = {
        'method': method,
        'data': data,
    }

    return jsonify(response_data)

if __name__ == '__main__':
    app.run(port=8000)

