def transform_apod_data(apod_data):
    """
    Transforms the APOD data into a more usable format.

    Parameters:
    apod_data (dict): The raw APOD data.

    Returns:
    dict: The transformed APOD data.
    """
    url = apod_data.get("url")
    hdurl = apod_data.get("hdurl")

    if hdurl is None:
            hdurl = url
    else:
            hdurl = hdurl

    transformed_data = {
        "title": apod_data.get("title"),
        "date": apod_data.get("date"),
        "explanation": apod_data.get("explanation"),
        "url": url,
        "media_type": apod_data.get("media_type"),
        "hdurl": hdurl
}
    return transformed_data