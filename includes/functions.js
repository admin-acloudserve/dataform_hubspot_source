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

function get_contact_columns() {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "INT64"},
        {"name": "property_email", "datatype": "STRING"},
        {"name": "property_company", "datatype": "STRING"},
        {"name": "property_firstname", "datatype": "STRING"},
        {"name": "property_lastname", "datatype": "STRING"},
        {"name": "property_createdate", "datatype": "TIMESTAMP"},
        {"name": "property_jobtitle", "datatype": "STRING"},
        {"name": "property_annualrevenue", "datatype": "INT64"}
    ]

    columns = fivetran_utils.add_pass_through_columns(columns, constants.hubspot__contact_pass_through_columns)    
    return columns
}

function get_contact_list_columns () {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "created_at", "datatype": "TIMESTAMP"},
        {"name": "deleteable", "datatype": "boolean"},
        {"name": "dynamic", "datatype": "boolean"},
        {"name": "id", "datatype": "INT64"},
        {"name": "metadata_error", "datatype": "STRING"},
        {"name": "metadata_last_processing_state_change_at", "datatype": "TIMESTAMP"},
        {"name": "metadata_last_size_change_at", "datatype": "TIMESTAMP"},
        {"name": "metadata_processing", "datatype": "STRING"},
        {"name": "metadata_size", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "portal_id", "datatype": "INT64"},
        {"name": "updated_at", "datatype": "TIMESTAMP"}
    ]
    return columns
}


function get_contact_list_member_columns () {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "added_at", "datatype": "TIMESTAMP"},
        {"name": "contact_id", "datatype": "INT64"},
        {"name": "contact_list_id", "datatype": "INT64"}
    ]
    return columns
}


function get_contact_merge_audit_columns () {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "canonical_vid", "datatype": "INT64"},
        {"name": "contact_id", "datatype": "INT64"},
        {"name": "entity_id", "datatype": "STRING"},
        {"name": "first_name", "datatype": "STRING"},
        {"name": "last_name", "datatype": "STRING"},
        {"name": "num_properties_moved", "datatype": "INT64"},
        {"name": "timestamp", "datatype": "TIMESTAMP"},
        {"name": "user_id", "datatype": "INT64"},
        {"name": "vid_to_merge", "datatype": "INT64"}
    ]
    return columns
}

function get_contact_property_history_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "contact_id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "timestamp", "datatype": "TIMESTAMP", "alias": "change_timestamp"},
        {"name": "value", "datatype": "STRING"}
    ]
    return columns
}

function get_deal_columns () {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "deal_pipeline_id", "datatype": "STRING"},
        {"name": "deal_pipeline_stage_id", "datatype": "STRING"},
        {"name": "is_deleted", "datatype": "boolean"},
        {"name": "owner_id", "datatype": "INT64"},
        {"name": "portal_id", "datatype": "INT64"},
        {"name": "property_dealname", "datatype": "STRING"},
        {"name": "property_description", "datatype": "STRING"},
        {"name": "property_amount", "datatype": "INT64"},
        {"name": "property_closedate", "datatype": "TIMESTAMP"},
        {"name": "property_createdate", "datatype": "TIMESTAMP"}
    ]
    columns = fivetran_utils.add_pass_through_columns(columns, constants.hubspot__deal_pass_through_columns)    
    return columns
}

function get_deal_company_columns() {
    columns = [
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "company_id", "datatype": "INT64"}

    ]
    return columns
}

function get_deal_contact_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "contact_id", "datatype": "INT64"}

    ]
    return columns
}

function get_deal_pipeline_columns() {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "active", "datatype": "boolean"},
        {"name": "display_order", "datatype": "INT64"},
        {"name": "label", "datatype": "STRING"},
        {"name": "pipeline_id", "datatype": "STRING"}

    ]
    return columns
}

function get_deal_pipeline_stage_columns() {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "active", "datatype": "boolean"},
        {"name": "closed_won", "datatype": "boolean"},
        {"name": "display_order", "datatype": "INT64"},
        {"name": "label", "datatype": "STRING"},
        {"name": "pipeline_id", "datatype": "STRING"},
        {"name": "probability", "datatype": "FLOAT64"},
        {"name": "stage_id", "datatype": "STRING"}

    ]
    return columns
}

function get_deal_property_history_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "timestamp", "datatype": "TIMESTAMP", "alias": "change_timestamp"},
        {"name": "value", "datatype": "STRING"}

    ]
    return columns
}

function get_deal_stage_columns() {
    columns = [
        {"name": "_fivetran_active", "datatype": "boolean"},
        {"name": "_fivetran_end", "datatype": "TIMESTAMP"},
        {"name": "_fivetran_start", "datatype": "TIMESTAMP"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "date_entered", "datatype": "TIMESTAMP"},
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "value", "datatype": "STRING"}

    ]
    return columns
}

function get_email_campaign_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "app_id", "datatype": "INT64"},
        {"name": "app_name", "datatype": "STRING"},
        {"name": "content_id", "datatype": "INT64"},
        {"name": "id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "num_included", "datatype": "INT64"},
        {"name": "num_queued", "datatype": "INT64"},
        {"name": "sub_type", "datatype": "STRING"},
        {"name": "subject", "datatype": "STRING"},
        {"name": "type", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_bounce_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "category", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "response", "datatype": "STRING"},
        {"name": "status", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_click_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "browser", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "ip_address", "datatype": "STRING"},
        {"name": "location", "datatype": "STRING"},
        {"name": "referer", "datatype": "STRING"},
        {"name": "url", "datatype": "STRING"},
        {"name": "user_agent", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "app_id", "datatype": "INT64"},
        {"name": "caused_by_created", "datatype": "TIMESTAMP"},
        {"name": "caused_by_id", "datatype": "STRING"},
        {"name": "created", "datatype": "TIMESTAMP"},
        {"name": "email_campaign_id", "datatype": "INT64"},
        {"name": "filtered_event", "datatype": "boolean"},
        {"name": "id", "datatype": "STRING"},
        {"name": "obsoleted_by_created", "datatype": "TIMESTAMP"},
        {"name": "obsoleted_by_id", "datatype": "STRING"},
        {"name": "portal_id", "datatype": "INT64"},
        {"name": "recipient", "datatype": "STRING"},
        {"name": "sent_by_created", "datatype": "TIMESTAMP"},
        {"name": "sent_by_id", "datatype": "STRING"},
        {"name": "type", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_deferred_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "attempt", "datatype": "INT64"},
        {"name": "id", "datatype": "STRING"},
        {"name": "response", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_delivered_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "STRING"},
        {"name": "response", "datatype": "STRING"},
        {"name": "smtp_id", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_dropped_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "bcc", "datatype": "STRING"},
        {"name": "cc", "datatype": "STRING"},
        {"name": "drop_message", "datatype": "STRING"},
        {"name": "drop_reason", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "reply_to", "datatype": "STRING"},
        {"name": "subject", "datatype": "STRING"},
        {"name": "from", "datatype": "STRING", "alias": "from_email", "quote": True,}

    ]
    return columns
}

function get_email_event_forward_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "browser", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "ip_address", "datatype": "STRING"},
        {"name": "location", "datatype": "STRING"},
        {"name": "user_agent", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_open_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "browser", "datatype": "STRING"},
        {"name": "duration", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "ip_address", "datatype": "STRING"},
        {"name": "location", "datatype": "STRING"},
        {"name": "user_agent", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_print_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "browser", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "ip_address", "datatype": "STRING"},
        {"name": "location", "datatype": "STRING"},
        {"name": "user_agent", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_sent_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "bcc", "datatype": "STRING"},
        {"name": "cc", "datatype": "STRING"},
        {"name": "id", "datatype": "STRING"},
        {"name": "reply_to", "datatype": "STRING"},
        {"name": "subject", "datatype": "STRING"},
        {"name": "from", "datatype": "STRING", "alias": "from_email", "quote": True,}

    ]
    return columns
}

function get_email_event_spam_report_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "STRING"},
        {"name": "ip_address", "datatype": "STRING"},
        {"name": "user_agent", "datatype": "STRING"}

    ]
    return columns
}

function get_email_event_status_change_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "bounced", "datatype": "boolean"},
        {"name": "id", "datatype": "STRING"},
        {"name": "portal_subscription_status", "datatype": "STRING"},
        {"name": "requested_by", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "subscriptions", "datatype": "STRING"}

    ]
    return columns
}

function get_engagement_call_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "body", "datatype": "STRING"},
        {"name": "callee_object_id", "datatype": "INT64"},
        {"name": "callee_object_type", "datatype": "STRING"},
        {"name": "disposition", "datatype": "STRING"},
        {"name": "duration_milliseconds", "datatype": "INT64"},
        {"name": "engagement_id", "datatype": "INT64"},
        {"name": "external_account_id", "datatype": "STRING"},
        {"name": "external_id", "datatype": "STRING"},
        {"name": "from_number", "datatype": "STRING"},
        {"name": "recording_url", "datatype": "STRING"},
        {"name": "status", "datatype": "STRING"},
        {"name": "to_number", "datatype": "STRING"},
        {"name": "transcription_id", "datatype": "INT64"},
        {"name": "unknown_visitor_conversation", "datatype": "boolean"}

    ]
    return columns
}

function get_engagement_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "active", "datatype": "boolean"},
        {"name": "activity_type", "datatype": "STRING"},
        {"name": "created_at", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "INT64"},
        {"name": "last_updated", "datatype": "TIMESTAMP"},
        {"name": "owner_id", "datatype": "INT64"},
        {"name": "portal_id", "datatype": "INT64"},
        {"name": "timestamp", "datatype": "TIMESTAMP", "alias": "occurred_timestamp"},
        {"name": "type", "datatype": "STRING", "alias": "engagement_type"}

    ]
    return columns
}

function get_engagement_company_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "company_id", "datatype": "INT64"},
        {"name": "engagement_id", "datatype": "INT64"}

    ]
    return columns
}

function get_engagement_contact_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "contact_id", "datatype": "INT64"},
        {"name": "engagement_id", "datatype": "INT64"}

    ]
    return columns
}

function get_engagement_deal_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "deal_id", "datatype": "INT64"},
        {"name": "engagement_id", "datatype": "INT64"}

    ]
    return columns
}

function get_engagement_email_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "attached_video_id", "datatype": "STRING"},
        {"name": "attached_video_opened", "datatype": "boolean"},
        {"name": "attached_video_watched", "datatype": "boolean"},
        {"name": "email_send_event_id_created", "datatype": "TIMESTAMP"},
        {"name": "email_send_event_id_id", "datatype": "STRING"},
        {"name": "engagement_id", "datatype": "INT64"},
        {"name": "error_message", "datatype": "STRING"},
        {"name": "facsimile_send_id", "datatype": "STRING"},
        {"name": "from_email", "datatype": "STRING"},
        {"name": "from_first_name", "datatype": "STRING"},
        {"name": "from_last_name", "datatype": "STRING"},
        {"name": "html", "datatype": "STRING"},
        {"name": "logged_from", "datatype": "STRING"},
        {"name": "media_processing_status", "datatype": "STRING"},
        {"name": "member_of_forwarded_subthread", "datatype": "boolean"},
        {"name": "message_id", "datatype": "STRING"},
        {"name": "post_send_status", "datatype": "STRING"},
        {"name": "recipient_drop_reasons", "datatype": "STRING"},
        {"name": "sent_via", "datatype": "STRING"},
        {"name": "status", "datatype": "STRING"},
        {"name": "subject", "datatype": "STRING"},
        {"name": "text", "datatype": "STRING"},
        {"name": "thread_id", "datatype": "STRING"},
        {"name": "tracker_key", "datatype": "STRING"},
        {"name": "validation_skipped", "datatype": "STRING"}

    ]
    return columns
}

function get_engagement_meeting_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "body", "datatype": "STRING"},
        {"name": "created_from_link_id", "datatype": "INT64"},
        {"name": "end_time", "datatype": "TIMESTAMP"},
        {"name": "engagement_id", "datatype": "INT64"},
        {"name": "external_url", "datatype": "STRING"},
        {"name": "location", "datatype": "STRING"},
        {"name": "meeting_outcome", "datatype": "STRING"},
        {"name": "pre_meeting_prospect_reminders", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "start_time", "datatype": "TIMESTAMP"},
        {"name": "title", "datatype": "STRING"},
        {"name": "web_conference_meeting_id", "datatype": "STRING"}

    ]
    return columns
}

function get_engagement_note_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "body", "datatype": "STRING"},
        {"name": "engagement_id", "datatype": "INT64"}

    ]
    return columns
}

function get_engagement_task_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "body", "datatype": "STRING"},
        {"name": "completion_date", "datatype": "STRING"},
        {"name": "engagement_id", "datatype": "INT64"},
        {"name": "for_object_type", "datatype": "STRING"},
        {"name": "is_all_day", "datatype": "boolean"},
        {"name": "priority", "datatype": "STRING"},
        {"name": "probability_to_complete", "datatype": "FLOAT64"},
        {"name": "status", "datatype": "STRING"},
        {"name": "subject", "datatype": "STRING"},
        {"name": "task_type", "datatype": "STRING"}

    ]
    return columns
}

function get_owner_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "created_at", "datatype": "TIMESTAMP"},
        {"name": "email", "datatype": "STRING"},
        {"name": "first_name", "datatype": "STRING"},
        {"name": "last_name", "datatype": "STRING"},
        {"name": "owner_id", "datatype": "INT64"},
        {"name": "portal_id", "datatype": "INT64"},
        {"name": "type", "datatype": "STRING"},
        {"name": "updated_at", "datatype": "TIMESTAMP"}

    ]
    return columns
}

function get_ticket_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "id", "datatype": "INT64"},
        {"name": "is_deleted", "datatype": "boolean"},
        {"name": "property_closed_date", "datatype": "TIMESTAMP"},
        {"name": "property_createdate", "datatype": "TIMESTAMP"},
        {"name": "property_first_agent_reply_date", "datatype": "TIMESTAMP"},
        {"name": "property_hs_pipeline", "datatype": "STRING"},
        {"name": "property_hs_pipeline_stage", "datatype": "STRING"},
        {"name": "property_hs_ticket_category", "datatype": "STRING"},
        {"name": "property_hs_ticket_priority", "datatype": "STRING"},
        {"name": "property_hubspot_owner_id", "datatype": "INT64"},
        {"name": "property_subject", "datatype": "STRING"},
        {"name": "property_content", "datatype": "STRING"}  

    ]
    columns = fivetran_utils.add_pass_through_columns(columns, constants.hubspot__ticket_pass_through_columns)
    return columns
}

function get_ticket_company_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "ticket_id", "datatype": "INT64"},
        {"name": "company_id", "datatype": "INT64"}

    ]
    return columns
}

function get_ticket_contact_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "ticket_id", "datatype": "INT64"},
        {"name": "contact_id", "datatype": "INT64"}

    ]
    return columns
}

function get_ticket_deal_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "ticket_id", "datatype": "INT64"},
        {"name": "deal_id", "datatype": "INT64"}

    ]
    return columns
}

function get_ticket_engagement_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "ticket_id", "datatype": "INT64"},
        {"name": "engagement_id", "datatype": "INT64"}

    ]
    return columns
}

function get_ticket_pipeline_columns() {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "active", "datatype": "boolean"},
        {"name": "display_order", "datatype": "INT64"},
        {"name": "label", "datatype": "STRING"},
        {"name": "object_type_id", "datatype": "STRING"},
        {"name": "pipeline_id", "datatype": "STRING"}

    ]
    return columns
}

function get_ticket_pipeline_stage_columns() {
    columns = [
        {"name": "_fivetran_deleted", "datatype": "boolean"},
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "active", "datatype": "boolean"},
        {"name": "display_order", "datatype": "INT64"},
        {"name": "is_closed", "datatype": "boolean"},
        {"name": "label", "datatype": "STRING"},
        {"name": "pipeline_id", "datatype": "STRING"},
        {"name": "stage_id", "datatype": "STRING"},
        {"name": "ticket_state", "datatype": "STRING"}

    ]
    return columns
}

function get_ticket_property_history_columns() {
    columns = [
        {"name": "_fivetran_synced", "datatype": "TIMESTAMP"},
        {"name": "ticket_id", "datatype": "INT64"},
        {"name": "name", "datatype": "STRING"},
        {"name": "source", "datatype": "STRING"},
        {"name": "source_id", "datatype": "STRING"},
        {"name": "timestamp_instant", "datatype": "TIMESTAMP"},
        {"name": "value", "datatype": "STRING"}

    ]
    return columns
}



module.exports = { 
    get_company_columns,
    get_company_property_history_columns,
    get_contact_columns,
    get_contact_list_columns,
    get_contact_list_member_columns,
    get_contact_merge_audit_columns,
    get_contact_property_history_columns,
    get_deal_columns,
    get_deal_company_columns,
    get_deal_contact_columns,
    get_deal_pipeline_columns,
    get_deal_pipeline_stage_columns,
    get_deal_property_history_columns,
    get_deal_stage_columns,
    get_email_campaign_columns,
    get_email_event_bounce_columns,
    get_email_event_click_columns,
    get_email_event_columns,
    get_email_event_deferred_columns,
    get_email_event_delivered_columns,
    get_email_event_dropped_columns,
    get_email_event_forward_columns,
    get_email_event_open_columns,
    get_email_event_print_columns,
    get_email_event_sent_columns,
    get_email_event_spam_report_columns,
    get_email_event_status_change_columns,
    get_engagement_call_columns,
    get_engagement_columns,
    get_engagement_company_columns,
    get_engagement_contact_columns,
    get_engagement_deal_columns,
    get_engagement_email_columns,
    get_engagement_meeting_columns,
    get_engagement_note_columns,
    get_engagement_task_columns,
    get_owner_columns,
    get_ticket_columns,
    get_ticket_company_columns,
    get_ticket_contact_columns,
    get_ticket_deal_columns,
    get_ticket_engagement_columns,
    get_ticket_pipeline_columns,
    get_ticket_pipeline_stage_columns,
    get_ticket_property_history_columns,
};


