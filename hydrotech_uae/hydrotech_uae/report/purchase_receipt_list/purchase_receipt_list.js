// Copyright (c) 2022, sammish and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Purchase Receipt List"] = {
	"filters": [
		{
			fieldname: "from_date",
            label: __("From Date"),
            fieldtype: "Date",
			"reqd": 1,
		},
		{
			fieldname: "to_date",
            label: __("To Date"),
            fieldtype: "Date",
			"reqd": 1,
		},
	]
};