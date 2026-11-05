import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import Footer from "@/components/Footer";

const RefundIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="#1E1E1E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-[48px] w-[48px]" aria-hidden="true">
        <circle cx="32" cy="33" r="21" fill="#FFD335" />
        <circle cx="32" cy="33" r="15" fill="#fff" strokeWidth={1.5} />
        <path d="M32 24v18M36 27.5c-1-1.6-8-2-8 1 0 3.4 8 1.8 8 5.4 0 3-7 3-8.4.6" strokeWidth={2} />
        <path d="M12 14a26 26 0 0 1 14-6" stroke="#fff" strokeWidth={2.6} />
        <path d="M9 9l3 5.5 5.5-2.5" stroke="#fff" strokeWidth={2.6} />
    </svg>
);

const intro: string[] = [
    "This Refund and Cancellation Policy (“Policy”) explains the conditions that apply to refund requests, project cancellations, and related financial matters for services provided by Kiddli Publishings (“Company,” “we,” “our,” or “us”).",
    "By ordering, purchasing, or engaging our services, the client (“Client,” “you,” or “your”) acknowledges that they have read and understood this Policy and accept its provisions, subject to applicable laws and contractual rights."
];

const sections: LegalSection[] = [
    {
        "id": "general-refund-eligibility",
        "title": "General Refund Eligibility",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "1.1",
                        "text": "Payments made to Kiddli Publishings are subject to this Policy and the applicable service agreement."
                    },
                    {
                        "num": "1.2",
                        "text": "When determining refund eligibility, we consider the reason for cancellation, the time since project onboarding, the stage of completion, work already performed, and expenses or financial commitments made for the project."
                    },
                    {
                        "num": "1.3",
                        "text": "Circumstances in which a refund may be considered include:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Cancellation requested before project work begins, subject to the relevant cancellation conditions.",
                    "Our inability to provide services expressly agreed upon with the Client.",
                    "An incorrect or duplicate payment.",
                    "A refund obligation arising under the service agreement or applicable law."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "1.4",
                        "text": "Each request will be assessed individually according to this Policy, the relevant contractual provisions, and applicable legal requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "change-of-mind-cancellations",
        "title": "Change-of-Mind Cancellations",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "2.1",
                        "text": "A change-of-mind cancellation occurs when a Client voluntarily ends a new or ongoing project for personal reasons unrelated to any failure by the Company to meet its contractual obligations."
                    },
                    {
                        "num": "2.2",
                        "text": "The following conditions apply to change-of-mind cancellations:"
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.2.1. Cancellation Within Twenty-Four (24) Hours of Project Onboarding",
                "blocks": [
                    {
                        "type": "p",
                        "text": "If we receive a written cancellation request within twenty-four (24) hours of the official project onboarding date and time, the Client will be eligible for a refund of thirty percent (30%) of the total amount received by Kiddli Publishings for that project."
                    },
                    {
                        "type": "p",
                        "text": "The Company will retain the remaining seventy percent (70%) as a project cancellation charge, subject to applicable law and the agreed service terms."
                    },
                    {
                        "type": "p",
                        "text": "Where legally permitted, applicable taxes, statutory deductions, and mandatory adjustments will be deducted from the refundable amount before payment."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.2.2. Cancellation After Twenty-Four (24) Hours of Project Onboarding",
                "blocks": [
                    {
                        "type": "p",
                        "text": "Once the initial twenty-four (24) hours have passed, a project will not qualify for a refund solely because the Client has changed their mind."
                    },
                    {
                        "type": "p",
                        "text": "Kiddli Publishings will therefore have no contractual obligation to issue a refund merely because the Client decides to discontinue the project after this period."
                    },
                    {
                        "type": "p",
                        "text": "This condition remains subject to applicable consumer protection laws, statutory refund rights, and our obligations under the relevant service agreement."
                    }
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "2.3",
                        "text": "The cancellation period begins at the official onboarding date and time recorded or communicated to the Client by Kiddli Publishings."
                    },
                    {
                        "num": "2.4",
                        "text": "This section does not restrict the Client’s right to seek a refund or compensation where we materially breach the agreement, fail to provide agreed services, or are otherwise legally required to offer a remedy."
                    }
                ]
            }
        ]
    },
    {
        "id": "completed-services-and-non-refundable-work",
        "title": "Completed Services and Non-Refundable Work",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "3.1",
                        "text": "Subject to applicable law and the service agreement, payments for services already performed, completed, delivered, or approved by the Client will generally be non-refundable."
                    },
                    {
                        "num": "3.2",
                        "text": "This includes, without limitation:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Completed or delivered children’s book writing, story development, manuscript preparation, editing, and proofreading.",
                    "Completed cover designs, interior illustrations, character artwork, graphic designs, page layouts, and other visual materials.",
                    "Character development, character illustrations, visual identities, and customized creative concepts already produced.",
                    "Completed animation development, character animation, video production, and other multimedia work.",
                    "Marketing strategies, promotional campaigns, advertising placements, and promotional expenses already incurred.",
                    "Publishing preparation, ISBN registration, distribution arrangements, printing, platform setup, and other external publishing services for which costs or financial commitments have already been incurred."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "3.3",
                        "text": "These conditions do not remove any rights or remedies available to the Client under applicable law."
                    }
                ]
            }
        ]
    },
    {
        "id": "delayed-incomplete-or-undelivered-services",
        "title": "Delayed, Incomplete, or Undelivered Services",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "4.1",
                        "text": "If Kiddli Publishings cannot provide an agreed service because of circumstances within its reasonable control, we will review the situation and determine an appropriate resolution under the relevant service agreement."
                    },
                    {
                        "num": "4.2",
                        "text": "Depending on the circumstances, a resolution may involve:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Completing and delivering the remaining work.",
                    "Offering an alternative service or another mutually accepted adjustment.",
                    "Providing a partial or full refund corresponding to the undelivered portion of the services, where appropriate."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "4.3",
                        "text": "Requests concerning delayed, incomplete, or undelivered services will be assessed separately from the change-of-mind cancellations described in Section 2."
                    },
                    {
                        "num": "4.4",
                        "text": "Nothing in this Policy releases us from our contractual obligations to provide expressly agreed services."
                    }
                ]
            }
        ]
    },
    {
        "id": "how-to-cancel-a-project",
        "title": "How to Cancel a Project",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "5.1",
                        "text": "Clients wishing to cancel must submit a formal written request through Kiddli Publishings’ official support or communication channels."
                    },
                    {
                        "num": "5.2",
                        "text": "The request must identify the project and clearly state the Client’s intention to discontinue the services."
                    },
                    {
                        "num": "5.3",
                        "text": "When reviewing a cancellation, we will consider:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "The recorded project onboarding date and time.",
                    "When the cancellation request was received.",
                    "Work started, performed, or completed before cancellation.",
                    "Deliverables, creative materials, or project components already supplied to or approved by the Client.",
                    "Third-party payments, committed expenses, and non-recoverable project costs."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "5.4",
                        "text": "Any refund will be calculated according to this Policy, the applicable service agreement, and relevant law."
                    }
                ]
            }
        ]
    },
    {
        "id": "revisions-dissatisfaction-and-service-disputes",
        "title": "Revisions, Dissatisfaction, and Service Disputes",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "6.1",
                        "text": "Kiddli Publishings aims to deliver creative and publishing services that meet the specifications, requirements, and deliverables agreed upon with each Client."
                    },
                    {
                        "num": "6.2",
                        "text": "If you have concerns about submitted or completed work, please notify us in writing and identify the specific issues requiring correction or attention."
                    },
                    {
                        "num": "6.3",
                        "text": "Revisions included in the purchased package will be provided within the agreed revision allowance, scope, and limitations."
                    },
                    {
                        "num": "6.4",
                        "text": "Dissatisfaction with completed work, a change in personal preferences, or a decision to take a different creative direction does not automatically qualify a Client for a refund."
                    },
                    {
                        "num": "6.5",
                        "text": "Genuine service disputes will be reviewed fairly and addressed according to the service agreement, this Policy, and applicable legal obligations."
                    }
                ]
            }
        ]
    },
    {
        "id": "taxes-statutory-deductions-and-adjustments",
        "title": "Taxes, Statutory Deductions, and Adjustments",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "7.1",
                        "text": "Approved refunds are subject to applicable tax rules, statutory deductions, and legally required financial adjustments."
                    },
                    {
                        "num": "7.2",
                        "text": "Where permitted by law, relevant taxes, non-recoverable tax amounts, and mandatory statutory deductions will be subtracted before the refund is issued."
                    },
                    {
                        "num": "7.3",
                        "text": "These lawful deductions may reduce the amount ultimately received by the Client below the initially calculated refundable amount."
                    },
                    {
                        "num": "7.4",
                        "text": "All deductions and adjustments will follow applicable tax laws and regulations. We will not impose deductions prohibited by mandatory legal requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "third-party-costs-and-external-providers",
        "title": "Third-Party Costs and External Providers",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "8.1",
                        "text": "Some services involve independent providers, including publishing platforms, international distributors, printing companies, advertising agencies, registration authorities, and other vendors."
                    },
                    {
                        "num": "8.2",
                        "text": "Payments already made or expenses incurred with these providers may be non-recoverable and, subject to applicable law, may be excluded from a refund."
                    },
                    {
                        "num": "8.3",
                        "text": "We will consider these costs when assessing cancellation and refund requests. Upon reasonable request, we may provide details of relevant third-party expenses and deductions."
                    }
                ]
            }
        ]
    },
    {
        "id": "refund-assessment-and-processing",
        "title": "Refund Assessment and Processing",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "9.1",
                        "text": "Kiddli Publishings will review and approve refund requests according to this Policy and applicable law."
                    },
                    {
                        "num": "9.2",
                        "text": "Where reasonably possible, approved refunds will be returned using the Client’s original payment method."
                    },
                    {
                        "num": "9.3",
                        "text": "Processing times may differ depending on the payment provider, bank, transaction method, and required verification procedures."
                    },
                    {
                        "num": "9.4",
                        "text": "We will notify the Client of the decision, including any approved refund amount and applicable deductions."
                    },
                    {
                        "num": "9.5",
                        "text": "Once we have properly initiated an approved refund, we are not responsible for delays caused solely by banks, payment processors, or other external payment providers."
                    }
                ]
            }
        ]
    },
    {
        "id": "information-required-for-refund-requests",
        "title": "Information Required for Refund Requests",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "10.1",
                        "text": "Refund requests must be submitted in writing through the official support or communication channels designated by Kiddli Publishings."
                    },
                    {
                        "num": "10.2",
                        "text": "To help us verify and assess the request, please provide:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Your full name and valid contact details.",
                    "The order number or project reference, if available.",
                    "A description of the services purchased.",
                    "The official onboarding date, if available.",
                    "A clear explanation of the cancellation or refund request.",
                    "A payment receipt, confirmation, or transaction reference."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "10.3",
                        "text": "We may request additional information or documents reasonably needed to verify the payment and evaluate the request."
                    }
                ]
            }
        ]
    },
    {
        "id": "policy-changes",
        "title": "Policy Changes",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "11.1",
                        "text": "Kiddli Publishings may revise this Policy to reflect changes in business operations, services, contractual arrangements, or legal requirements."
                    },
                    {
                        "num": "11.2",
                        "text": "Updated versions will be published on our official website with the relevant effective or revision date."
                    },
                    {
                        "num": "11.3",
                        "text": "Changes will not retroactively remove or invalidate rights and obligations established under an existing service agreement or applicable law."
                    },
                    {
                        "num": "11.4",
                        "text": "The version applicable to a particular engagement will be determined by the relevant contractual provisions and legal requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "governing-law-and-legal-requirements",
        "title": "Governing Law and Legal Requirements",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "12.1",
                        "text": "This Policy must be read and applied alongside the relevant service agreement and the laws governing the transaction."
                    },
                    {
                        "num": "12.2",
                        "text": "If a provision conflicts with mandatory statutory requirements or applicable consumer protection laws, those legal requirements will take precedence."
                    },
                    {
                        "num": "12.3",
                        "text": "If any provision is found invalid or unenforceable, the remaining provisions will continue to apply to the fullest extent permitted by law."
                    }
                ]
            }
        ]
    },
    {
        "id": "contact-information",
        "title": "Contact Information",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "13.1",
                        "text": "For questions, clarification, cancellation requests, or refund assistance, please contact Kiddli Publishings using the official contact details published on our website."
                    }
                ]
            },
            {
                "type": "contact",
                "rows": [
                    {
                        "label": "Company Name",
                        "value": "Kiddli Publishings"
                    },
                    {
                        "label": "Website",
                        "value": "kiddlipublishings.com",
                        "href": "https://kiddlipublishings.com"
                    },
                    {
                        "label": "Email Address",
                        "value": "support@kiddlipublishings.com",
                        "href": "mailto:support@kiddlipublishings.com"
                    },
                    {
                        "label": "Contact Number",
                        "value": "(760) 478-6269",
                        "href": "tel:+17604786269"
                    },
                    {
                        "label": "Business Address",
                        "value": "11113 Kernville Rd, Kernville, CA 93238"
                    }
                ]
            }
        ]
    }
];

const outro = {
    "title": "Acknowledgment and Acceptance",
    "text": [
        "By purchasing, authorizing, or engaging Kiddli Publishings’ services, the Client acknowledges that they have had an opportunity to review this Refund and Cancellation Policy and understand its conditions concerning cancellations, refunds, completed work, and applicable deductions.",
        "Acceptance remains subject to the relevant service agreement and all rights and protections provided by applicable law."
    ]
};

export default function RefundPolicyPage() {
    return (
        <main>
            <LegalPage
                title="Refund and Cancellation Policy"
                subtitle="Clear, fair rules for cancellations, refunds, and completed work, so you always know where you stand."
                icon={<RefundIcon />}
                intro={intro}
                sections={sections}
                outro={outro}
            />
            <Footer />
        </main>
    );
}