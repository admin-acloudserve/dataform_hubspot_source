function get_company_column() {

    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "INT64"},
        {"name": "is_deleted", "datatype": "boolean"},
        {"name": "property_name", "datatype": "STRING"},
        {"name": "property_description", "datatype": "STRING"},
        {"name": "property_createdate", "datatype": "TIMESTAMP"},
        {"name": "property_industry", "datatype": "STRING"},
        {"name": "property_address", "datatype": "STRING"},
        {"name": "property_address_2", "datatype": "STRING"},
        {"name": "property_city", "datatype": "STRING"},
        {"name": "property_state", "datatype": "STRING"},
        {"name": "property_country", "datatype": "STRING"},
        {"name": "property_annualrevenue", "datatype": "INT64"}
    ]


    return columns
}