from flask import *;
from predict import predict

app = Flask(__name__);

@app.route('/croprequest',methods=["POST"])
def post():
    body = json.loads(request.data)
    response = predict(body)
    print(response)
    return jsonify({'crop':response})


if __name__ == '__main__':
    app.run(debug=True);