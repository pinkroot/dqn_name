from flask import *
from yaml_to_json import yaml_to_list
import random
import pymongo
from settings import *

app = Flask(__name__);

"""
formatter = logging.Formatter(
    '%(asctime)s %(levelname)s: %(message)s '
    '[in %(pathname)s:%(lineno)d]'
)
error_log = os.path.join(app.root_path, 'logs/error.log')
error_file_handler = RotatingFileHandler(
    error_log, maxBytes=100000, backupCount=10
)    
error_file_handler.setLevel(logging.ERROR)
error_file_handler.setFormatter(formatter)
app.logger.addHandler(error_file_handler)
"""

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/quiz")
def quiz():
    return render_template("quiz.html");

@app.route("/get-quiz")
def get_quiz():
    l = yaml_to_list();

    data = l[random.randint(0, len(l) - 1)];

    print data
    result = {
        "_id": 0,
        "kanji": data[":kanji"],
        "yomi_hiragana": data[":yomi"],
        "yomi_roma": data[":yomi_romaji"],
    };

    return (json.dumps(result));

@app.route("/problem/answer", methods=["POST",])
def problem_ansewer():
    id = int(request.form["id"]);
    state = int(request.form["state"]);

    if (state == 0):
        g.db.problems.update({"_id": id}, {"$inc": {"accept" : 1}} , False, False);
    else:
        g.db.problems.update({"_id": id}, {"$inc": {"wrong" : 1}} , False, False);

    return "OK";


@app.before_request
def before_request():
    g.conn = pymongo.Connection(host=DB_HOST);
    g.db = g.conn[DB_NAME]; 

@app.teardown_request
def teardown_request(exception):
    g.conn.disconnect();
    g.db = None;

"""
@app.route("/twitter/callback")
@twitter_callback
def callback():
"""

if __name__ == "__main__":
    app.debug = True;
    app.run();

