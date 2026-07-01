from extract import extract_data
from transform import transform_apod_data
from load import load_apod_data

def etl_process():
    # Extract
    apod_data = extract_data()

    # Transform
    transformed_data = transform_apod_data(apod_data)

    # Load
    load_apod_data(transformed_data)

if __name__ == "__main__":
    etl_process()