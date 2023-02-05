{% macro get_engagement_task_columns() %}

{% set columns = [
    {"name": "_fivetran_synced", "datatype": dbt.type_timestamp()},
    {"name": "body", "datatype": dbt.type_string()},
    {"name": "completion_date", "datatype": dbt.type_string()},
    {"name": "engagement_id", "datatype": dbt.type_int()},
    {"name": "for_object_type", "datatype": dbt.type_string()},
    {"name": "is_all_day", "datatype": "boolean"},
    {"name": "priority", "datatype": dbt.type_string()},
    {"name": "probability_to_complete", "datatype": dbt.type_float()},
    {"name": "status", "datatype": dbt.type_string()},
    {"name": "subject", "datatype": dbt.type_string()},
    {"name": "task_type", "datatype": dbt.type_string()}
] %}

{{ return(columns) }}

{% endmacro %}
