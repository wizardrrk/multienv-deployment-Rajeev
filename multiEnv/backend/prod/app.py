from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route("/prod")
def prod_endpoint():
    return jsonify({
        "environment": "production",
        "message": "Hello from the Production Backend!"
    })

if __name__ == "__main__":
    port = int(os.getenv("PORT", 3002))
    app.run(host="0.0.0.0", port=port)