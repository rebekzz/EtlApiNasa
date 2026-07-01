import json


def load_apod_data(transformed_data):
    with open("apod_data.json", "w") as file:
        json.dump(transformed_data, file, indent=4)
        