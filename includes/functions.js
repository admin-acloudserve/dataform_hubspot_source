function get_company_columns() {
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
    columns = fivetran_utils.add_pass_through_columns(columns, constants.hubspot__company_pass_through_columns)
    return columns
}


function get_company_property_history_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "company_id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "timestamp", "datatype": "TIMESTAMP", "alias": "change_timestamp"},
        {"name": "value", "datatype": "STRING"}
    ]
    return columns
}

module.exports = { 
     get_company_columns,
     get_company_property_history_columns
};


