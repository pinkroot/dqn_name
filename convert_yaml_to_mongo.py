import pymongo
import yaml

db = pymongo.Connection().kirakira;

f = open("dqn-db.yml", "r");
ya = yaml.Loader(f);

while not ya.eof:
    data = ya.get_data();
    db.problems.insert({
        "_id": db.problems.count(),
        "kanji": data[":kanji"],
        "yomi_hiragana": data[":yomi"],
        "yomi_roma": data[":yomi_romaji"],
    });


