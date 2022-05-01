// Copyright (c) 2022, sammish and contributors
// For license information, please see license.txt

frappe.ui.form.on('Petty Cash Request', {
    claim_amount: function(frm) {
	    cur_frm.doc.agent_outstanding_amount = cur_frm.doc.claim_amount
        cur_frm.refresh_field("agent_outstanding_amount")
    },
	refresh: function(frm) {
        document.querySelectorAll("[data-doctype='Journal Entry']")[1].style.display ="none";

	    var show = false
        frappe.call({
            method: "hydrotech_uae.hydrotech_uae.doctype.petty_cash_request.petty_cash_request.get_jv",
            args:{
                name: cur_frm.doc.name
            },
            async: false,
            callback: function (r) {
                show = r.message
                console.log(r.message)
            }
        })
        console.log(show)
	    if(cur_frm.doc.docstatus && !show){
	         frm.add_custom_button(__("Journal Entry"), () => {
                    cur_frm.call({
                        doc: cur_frm.doc,
                        method: 'generate_journal_entry',
                        args: {},
                        freeze: true,
                        freeze_message: "Generating Journal Entry...",
                        callback: (r) => {
                            cur_frm.reload_doc()
                                frappe.set_route("Form", "Journal Entry", r.message);
                        }
                })
            }, "Generate")
        }


	}
});