from flask import Flask

app = Flask(__name__)

@app.route("/")
def krstozborci():
    return "<p>Hello, Krstozborci!</p>"

app.run(debug=True)