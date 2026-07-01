import requests
import os
from dotenv import load_dotenv

def extract_data():
    """
    Extracts data from the NASA APOD API.

    Returns:
    dict: The raw APOD data.
    """
    load_dotenv()
    api_key = os.getenv("NASA_API_KEY")
    url = os.getenv("URL_NASA")
    params = {
        "api_key": api_key
    }
    response = requests.get(url, params=params)
    response.raise_for_status()  # Raise an error for bad responses
    return response.json()


