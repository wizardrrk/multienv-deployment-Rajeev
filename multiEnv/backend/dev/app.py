from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/dev")
def dev_endpoint():
    return jsonify({
        "environment": "development",
        "message": "Hello from the Development Backend!"
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", 3001))
    app.run(host="0.0.0.0", port=port, debug=True)