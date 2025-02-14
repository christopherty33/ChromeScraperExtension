from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/save_data", methods=["POST"])
def save_data():
    data = request.json.get("data")
    conn = sqlite3.connect("database/db.sqlite")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO scraped_data (content) VALUES (?)", (data,))
    conn.commit()
    conn.close()
    return jsonify({"message": "Data saved successfully"}), 200

if __name__ == "__main__":
    app.run(debug=True, port=5000)