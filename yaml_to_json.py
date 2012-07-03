import yaml
import json

def yaml_to_list():
    f = open("dqn-db.yml", "r");

    ya = yaml.Loader(f);

    out = [];
    while not ya.eof:
        out.append(ya.get_data());

    return out;

