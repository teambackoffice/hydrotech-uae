// Copyright (c) 2022, sammish and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["PC Report"] = {
	"filters": [
		{
			"fieldname":"company",
			"label": __("Company"),
			"fieldtype": "Link",
			"options": "Company",
			"default": frappe.defaults.get_user_default("Company"),
			"reqd": 1
		},
		{
			"fieldname":"group_by",
			"label": __("Group by"),
			"fieldtype": "Select",
			"options": ["", __("Group by Voucher"), __("Group by Voucher (Consolidated)"),
				__("Group by Account"), __("Group by Party")],
			"default": __("Group by Voucher (Consolidated)")
		},
		{
			"fieldname":"from_date",
			"label": __("From Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"to_date",
			"label": __("To Date"),
			"fieldtype": "Date",
			"default": frappe.datetime.get_today(),
			"reqd": 1,
			"width": "60px"
		},
		{
			"fieldname":"account",
			"label": __("Account"),
			"fieldtype": "Select",
			"options" : "\n1110 - Cash - HT\n1111 - Cash Suspense - HT\n1112 - Petty Cash - HT\n1113 - Petty Cash Mathew - HT\n1114 - Petty Cash John - HT",
			"reqd": 1
		},
		{
			"fieldname": "show_opening_entries",
			"label": __("Show Opening Entries"),
			"fieldtype": "Check"
		},
	]
}