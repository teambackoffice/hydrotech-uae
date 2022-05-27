# Copyright (c) 2022, sammish and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

def execute(filters=None):
	columns, data = [], []
	conditions = ""

	if filters.get("from_date") and filters.get("to_date"):
		conditions += " and posting_date BETWEEN '{0}' and '{1}'".format(filters.get("from_date"),filters.get("to_date"))

	if filters.get("supplier_name"):
		conditions += " and supplier_name='{0}' ".format(filters.get("supplier_name"))

	if filters.get("purchase_receipt"):
		conditions += " and purchase_receipt='{0}' ".format(filters.get("purchase_receipt"))

	if filters.get("status"):
		conditions += " and status='{0}' ".format(filters.get("status"))

	columns = [
		{"label": "Posting Date", "fieldname": "posting_date", "fieldtype": "Data", "width": "100"},
		{"label": "Suppler Name", "fieldname": "supplier_name", "fieldtype": "Link", "options": "Supplier", "width": "300"},
		{"label": "Purchase Receipt No", "fieldname": "name", "fieldtype": "Link", "options": "Purchase Receipt", "width": "180"},
		{"label": "Net Amount", "fieldname": "net_total", "fieldtype": "Currency", "options": "Currency",  "width": "150"},
		{"label": "Tax Amount", "fieldname": "total_taxes_and_charges", "fieldtype": "Currency", "options": "Currency",  "width": "200"},
		{"label": "Grand Total", "fieldname": "grand_total", "fieldtype": "Currency", "options": "Currency", "width": "150"},
		{"label": "Document Status", "fieldname": "status", "fieldtype": "Data", "width": "150"},

	]
	query = """ SELECT * FROM `tabPurchase Receipt` WHERE status=0 {0}""".format(conditions)
	data = frappe.db.sql(query, as_dict=1)

	return columns, data