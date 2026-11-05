import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import Footer from "@/components/Footer";

const ScrollIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="#1E1E1E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-[48px] w-[48px]" aria-hidden="true">
        <path d="M16 10h30a6 6 0 0 1 6 6v34a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6z" fill="#fff" />
        <path d="M16 10a6 6 0 0 0-6 6v4h6" fill="#FFD335" />
        <path d="M23 21h22M23 28h22M23 35h15" strokeWidth={1.5} opacity={0.6} />
        <path d="M23 45c3-6 5 4 8-2s5 6 8 0" stroke="#6B34C4" strokeWidth={2} />
        <circle cx="45" cy="46" r="7" fill="#F96FA4" />
        <path d="M42.4 46.2l1.8 1.8 3.6-3.8" stroke="#fff" strokeWidth={2.2} />
    </svg>
);

const intro: string[] = [
    "These Terms and Conditions (“Terms”) govern your access to and use of the website, products, and services offered by Kiddli Publishings (“Company,” “we,” “our,” or “us”).",
    "Kiddli Publishings offers creative and publishing services, including children’s book development, illustration and design, animation, character development, marketing, and international publishing.",
    "By visiting our website, submitting an inquiry, requesting a quote, purchasing services, or entering into a project agreement, you (“Client,” “Customer,” “you,” or “your”) acknowledge that you have read, understood, and accepted these Terms, along with applicable service agreements, proposals, and referenced policies.",
    "If you do not accept these Terms, please stop using our website and services."
];

const sections: LegalSection[] = [
    {
        "id": "definitions",
        "title": "Definitions",
        "blocks": [
            {
                "type": "p",
                "text": "The following definitions apply throughout these Terms:"
            },
            {
                "type": "ul",
                "items": [
                    "Company: Kiddli Publishings, including its authorized representatives and service providers.",
                    "Client: Any individual, author, parent, legal guardian, business, organization, or other entity that engages our services.",
                    "Services: Children’s book creation, manuscript development, illustration, graphic design, animation, character development, marketing, global publishing, and other services offered by the Company.",
                    "Project: A particular assignment, order, or engagement the Company carries out for a Client.",
                    "Deliverables: The completed materials, files, designs, illustrations, animations, manuscripts, or other outputs agreed upon for a Project.",
                    "Client Materials: Manuscripts, photographs, artwork, scripts, concepts, character references, written content, and other materials supplied by the Client.",
                    "Service Agreement: A written proposal, quotation, project contract, invoice, or other document setting out the agreed services, prices, deliverables, and responsibilities."
                ]
            }
        ]
    },
    {
        "id": "scope-of-services",
        "title": "Scope of Services",
        "blocks": [
            {
                "type": "p",
                "text": "Kiddli Publishings offers creative, production, and publishing services that may include the following:"
            },
            {
                "type": "sub",
                "title": "2.1. Children’s Book Creation",
                "blocks": [
                    {
                        "type": "p",
                        "text": "We may provide story planning, manuscript writing, editing, proofreading, narrative structuring, book development, and related services for children’s books."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.2. Illustration and Design",
                "blocks": [
                    {
                        "type": "p",
                        "text": "Our services may include character artwork, cover designs, interior illustrations, page layouts, graphic design, and other visual materials for children’s publications."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.3. Animation",
                "blocks": [
                    {
                        "type": "p",
                        "text": "We may create character animations, animated scenes, visual stories, promotional videos, and other multimedia content specified in the project agreement."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.4. Character Development",
                "blocks": [
                    {
                        "type": "p",
                        "text": "We may help Clients create original characters by developing their appearance, personality, background, descriptions, visual identity, and other defining features."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.5. Marketing and Promotion",
                "blocks": [
                    {
                        "type": "p",
                        "text": "We may provide promotional planning, marketing assets, digital campaigns, advertising coordination, author branding, and other agreed promotional services."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "2.6. Global Publishing",
                "blocks": [
                    {
                        "type": "p",
                        "text": "We may assist with publication preparation, book production, publishing platform coordination, distribution arrangements, and related services for domestic and international markets."
                    }
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "2.7",
                        "text": "Each Project’s exact scope, requirements, schedule, pricing, and deliverables will be set out in the applicable Service Agreement."
                    },
                    {
                        "num": "2.8",
                        "text": "Work not expressly included in the agreed package or Service Agreement will be considered an additional service and may require separate fees and written authorization."
                    }
                ]
            }
        ]
    },
    {
        "id": "client-eligibility-and-authority",
        "title": "Client Eligibility and Authority",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "3.1",
                        "text": "Anyone purchasing our services must have the legal capacity to enter into a binding contract under applicable law."
                    },
                    {
                        "num": "3.2",
                        "text": "If a Client has not reached the legal age of majority, a parent or legal guardian must review and accept the relevant terms and take responsibility for the engagement."
                    },
                    {
                        "num": "3.3",
                        "text": "Anyone submitting a child’s information, photographs, manuscripts, or other materials confirms that they are the child’s parent or legal guardian or have obtained the necessary permission."
                    },
                    {
                        "num": "3.4",
                        "text": "A person acting for a business, organization, author, or another individual confirms that they have authority to enter into the agreement and approve the requested services."
                    }
                ]
            }
        ]
    },
    {
        "id": "project-commencement-and-approval",
        "title": "Project Commencement and Approval",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "4.1",
                        "text": "A Project officially begins once the Client accepts the relevant proposal or Service Agreement and satisfies the required onboarding and payment conditions."
                    },
                    {
                        "num": "4.2",
                        "text": "Onboarding may involve gathering manuscripts, creative instructions, reference images, character descriptions, publishing preferences, and other necessary information."
                    },
                    {
                        "num": "4.3",
                        "text": "The Client must provide accurate, complete information within the required timeframe."
                    },
                    {
                        "num": "4.4",
                        "text": "Incomplete instructions, late submissions, outstanding approvals, or Client-requested changes may extend the project schedule."
                    },
                    {
                        "num": "4.5",
                        "text": "We may request clarification or additional materials when reasonably needed to complete the Project according to the agreed requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "prices-payments-and-financial-responsibilities",
        "title": "Prices, Payments, and Financial Responsibilities",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "5.1",
                        "text": "Prices, payment deadlines, installment arrangements, and applicable charges will be provided in the relevant quotation, invoice, proposal, or Service Agreement."
                    },
                    {
                        "num": "5.2",
                        "text": "The Client agrees to pay according to the approved schedule and contractual terms."
                    },
                    {
                        "num": "5.3",
                        "text": "Certain services may require a deposit, advance payment, or full payment before work begins."
                    },
                    {
                        "num": "5.4",
                        "text": "Expanded requirements, additional deliverables, extra revisions, or other work outside the original scope may incur further charges."
                    },
                    {
                        "num": "5.5",
                        "text": "Unless otherwise agreed, we will communicate additional charges and obtain the Client’s approval before performing the extra work."
                    },
                    {
                        "num": "5.6",
                        "text": "We may pause or postpone services when payments are overdue, subject to applicable contractual obligations and law."
                    },
                    {
                        "num": "5.7",
                        "text": "Taxes, transaction fees, currency conversion costs, and other legally required charges may be added to the quoted price or included in the final invoice."
                    }
                ]
            }
        ]
    },
    {
        "id": "refunds-and-project-cancellations",
        "title": "Refunds and Project Cancellations",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "6.1",
                        "text": "Refunds and cancellations are subject to our separate Refund and Cancellation Policy, which forms part of the applicable service terms."
                    },
                    {
                        "num": "6.2",
                        "text": "Different refund conditions may apply to change-of-mind cancellations, completed work, third-party expenses, and services that have not been delivered."
                    },
                    {
                        "num": "6.3",
                        "text": "Clients are responsible for reading the Refund and Cancellation Policy before purchasing services."
                    },
                    {
                        "num": "6.4",
                        "text": "This section does not affect refund rights provided by mandatory consumer protection laws or other applicable legal requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "project-schedules-and-delivery",
        "title": "Project Schedules and Delivery",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "7.1",
                        "text": "Estimated completion times will depend on the type, complexity, and scope of the requested services."
                    },
                    {
                        "num": "7.2",
                        "text": "Delivery dates are estimates unless we expressly confirm a particular deadline in writing as a binding commitment."
                    },
                    {
                        "num": "7.3",
                        "text": "We will make reasonable efforts to deliver the agreed work within the communicated schedule."
                    },
                    {
                        "num": "7.4",
                        "text": "Completion times may be affected by:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Late receipt of Client Materials or approvals.",
                    "Changes to the original requirements.",
                    "Additional revisions or services.",
                    "Technical issues or production difficulties.",
                    "Delays involving publishing platforms, distributors, printers, or other external providers.",
                    "Circumstances outside our reasonable control."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "7.5",
                        "text": "If a substantial delay arises, we will make reasonable efforts to keep the Client informed."
                    }
                ]
            }
        ]
    },
    {
        "id": "revisions-and-creative-approvals",
        "title": "Revisions and Creative Approvals",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "8.1",
                        "text": "The applicable proposal or Service Agreement will describe revision allowances, feedback procedures, and approval stages."
                    },
                    {
                        "num": "8.2",
                        "text": "Clients must review drafts, illustrations, designs, animation samples, and other submissions within the agreed review period."
                    },
                    {
                        "num": "8.3",
                        "text": "Requested revisions must remain reasonably consistent with the approved brief and project scope."
                    },
                    {
                        "num": "8.4",
                        "text": "Major changes to a concept, storyline, character design, illustration style, animation requirements, or other specifications may be treated as additional work and charged separately."
                    },
                    {
                        "num": "8.5",
                        "text": "We are not responsible for delays caused by late Client feedback or approvals."
                    },
                    {
                        "num": "8.6",
                        "text": "Changes requested after the Client has approved a deliverable in writing may be considered additional services."
                    }
                ]
            }
        ]
    },
    {
        "id": "intellectual-property-and-copyright",
        "title": "Intellectual Property and Copyright",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "9.1",
                        "text": "We recognize the importance of intellectual property rights in creative work and publishing."
                    },
                    {
                        "num": "9.2",
                        "text": "Ownership and permitted use of Client Materials remain subject to the Client’s existing rights and any applicable third-party rights."
                    },
                    {
                        "num": "9.3",
                        "text": "By submitting materials, the Client gives us limited, non-exclusive permission to access, copy, modify, and use them only as reasonably necessary to perform the agreed services."
                    },
                    {
                        "num": "9.4",
                        "text": "This permission does not automatically transfer ownership of manuscripts, original story concepts, photographs, or other pre-existing Client intellectual property to Kiddli Publishings."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "9.5. Ownership of Commissioned Deliverables",
                "blocks": [
                    {
                        "type": "p",
                        "text": "The applicable Service Agreement will determine ownership of commissioned work, including illustrations, character designs, manuscripts, animations, and cover artwork."
                    },
                    {
                        "type": "p",
                        "text": "If a written agreement provides for an assignment or transfer of intellectual property rights, that transfer will occur according to its stated conditions, including any payment requirements."
                    },
                    {
                        "type": "p",
                        "text": "If no express assignment or transfer has been agreed upon, the Company and relevant creators retain their rights under applicable law, subject to any usage license expressly granted to the Client."
                    }
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "9.6",
                        "text": "Payment for services does not automatically transfer every copyright, editable file, source file, commercial usage right, or third-party license connected with a deliverable."
                    },
                    {
                        "num": "9.7",
                        "text": "Uses beyond the agreed license or contractual scope may require further written permission."
                    }
                ]
            },
            {
                "type": "sub",
                "title": "9.8. Company-Owned Materials",
                "blocks": [
                    {
                        "type": "p",
                        "text": "Our website, business name, logo, branding, proprietary templates, internal processes, production methods, and pre-existing creative resources remain the property of their respective rights holders."
                    },
                    {
                        "type": "p",
                        "text": "Purchasing services does not transfer ownership of these materials to the Client."
                    }
                ]
            }
        ]
    },
    {
        "id": "client-representations-and-warranties",
        "title": "Client Representations and Warranties",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "10.1",
                        "text": "The Client confirms that they own, or have obtained, all rights, permissions, and authorizations necessary to submit materials to us."
                    },
                    {
                        "num": "10.2",
                        "text": "The Client must ensure that submitted content does not knowingly:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Infringe copyright, trademarks, or other intellectual property rights.",
                    "Violate privacy, publicity, or image rights.",
                    "Include unlawful, defamatory, fraudulent, or misleading material.",
                    "Contain unauthorized photographs or personal information relating to children.",
                    "Breach applicable laws or contractual duties owed to third parties."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "10.3",
                        "text": "The Client is responsible for confirming that reference images, photographs, characters, music, scripts, and other third-party content can legally be used for the intended Project."
                    },
                    {
                        "num": "10.4",
                        "text": "We may reject or request replacements for materials that reasonably appear to breach these requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "childrens-content-and-age-suitability",
        "title": "Children’s Content and Age Suitability",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "11.1",
                        "text": "Because our services focus on children’s publishing, Clients are expected to provide instructions and materials suitable for the intended audience."
                    },
                    {
                        "num": "11.2",
                        "text": "We may review, refuse, or request changes to content that is unlawful, exploitative, abusive, sexually explicit, discriminatory, or otherwise unsuitable for children’s publishing."
                    },
                    {
                        "num": "11.3",
                        "text": "Clients submitting children’s names, photographs, personal experiences, voice recordings, or other identifying information must obtain the required parental or legal guardian authorization."
                    },
                    {
                        "num": "11.4",
                        "text": "Personal information will be handled according to our Privacy Policy and applicable data protection requirements."
                    },
                    {
                        "num": "11.5",
                        "text": "We cannot guarantee that every story, character, illustration, or creative interpretation will suit all age groups or educational environments. Clients must review and approve final materials for their intended audience."
                    }
                ]
            }
        ]
    },
    {
        "id": "animation-and-creative-production",
        "title": "Animation and Creative Production",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "12.1",
                        "text": "Animation and multimedia services will follow the specifications in the applicable Service Agreement."
                    },
                    {
                        "num": "12.2",
                        "text": "Where required, the Client must supply scripts, references, voice recordings, visual directions, and approvals."
                    },
                    {
                        "num": "12.3",
                        "text": "Final animation outputs may be subject to technical constraints involving resolution, format, duration, rendering, and platform compatibility."
                    },
                    {
                        "num": "12.4",
                        "text": "Editable project files, animation source files, raw footage, working files, and production assets are included only when expressly stated in the Service Agreement."
                    },
                    {
                        "num": "12.5",
                        "text": "Music, sound effects, fonts, stock footage, and other licensed resources may remain subject to their providers’ licensing terms."
                    }
                ]
            }
        ]
    },
    {
        "id": "global-publishing-and-distribution",
        "title": "Global Publishing and Distribution",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "13.1",
                        "text": "We may help Clients prepare and coordinate publication and distribution through external platforms, distributors, printers, and other providers."
                    },
                    {
                        "num": "13.2",
                        "text": "Service availability may depend on those providers’ requirements, approval procedures, technical standards, and commercial policies."
                    },
                    {
                        "num": "13.3",
                        "text": "Unless expressly agreed in writing, we do not guarantee a book’s acceptance, approval, or continuous availability on any particular platform."
                    },
                    {
                        "num": "13.4",
                        "text": "Relevant third-party providers may determine publication dates, available territories, printing options, royalties, pricing, and platform requirements."
                    },
                    {
                        "num": "13.5",
                        "text": "Clients must review and approve book titles, author details, descriptions, pricing information, metadata, and other publication information submitted on their behalf."
                    },
                    {
                        "num": "13.6",
                        "text": "Distribution charges, printing expenses, platform fees, registration costs, and other external expenses will be addressed in the applicable Service Agreement."
                    },
                    {
                        "num": "13.7",
                        "text": "We are not responsible for third-party policy changes, distribution restrictions, printing limitations, or other circumstances outside our reasonable control."
                    }
                ]
            }
        ]
    },
    {
        "id": "marketing-and-promotional-services",
        "title": "Marketing and Promotional Services",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "14.1",
                        "text": "Marketing work will follow the agreed strategy, deliverables, budget, and scope."
                    },
                    {
                        "num": "14.2",
                        "text": "Campaign results may be affected by the policies and decisions of advertising platforms, social networks, promotional publishers, and other external media providers."
                    },
                    {
                        "num": "14.3",
                        "text": "Unless a specific measurable outcome is expressly guaranteed in writing, we do not promise particular sales, readership levels, rankings, engagement, media coverage, advertising conversions, or financial returns."
                    },
                    {
                        "num": "14.4",
                        "text": "Advertising budgets, external promotional expenses, and other third-party charges will be identified separately where applicable."
                    },
                    {
                        "num": "14.5",
                        "text": "Clients must review and approve promotional copy, campaign details, author information, and advertising materials whenever approval is requested."
                    }
                ]
            }
        ]
    },
    {
        "id": "third-party-services-and-providers",
        "title": "Third-Party Services and Providers",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "15.1",
                        "text": "We may engage or coordinate with independent providers to support service delivery."
                    },
                    {
                        "num": "15.2",
                        "text": "These providers may include:"
                    }
                ]
            },
            {
                "type": "ul",
                "items": [
                    "Publishing and distribution platforms.",
                    "Printing and manufacturing companies.",
                    "Hosting and technology providers.",
                    "Payment processors.",
                    "Marketing and advertising platforms.",
                    "Animation and production specialists.",
                    "Suppliers of licensed images, music, and design resources."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "15.3",
                        "text": "External services may have their own terms, licensing conditions, and privacy policies."
                    },
                    {
                        "num": "15.4",
                        "text": "We are not responsible for independent provider decisions, platform outages, policy changes, or service failures beyond our reasonable control."
                    },
                    {
                        "num": "15.5",
                        "text": "Any third-party services or costs included in a Client’s package will be explained in the relevant Service Agreement."
                    }
                ]
            }
        ]
    },
    {
        "id": "confidentiality",
        "title": "Confidentiality",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "16.1",
                        "text": "We understand that Clients may share unpublished manuscripts, original concepts, business details, personal information, and other confidential materials."
                    },
                    {
                        "num": "16.2",
                        "text": "We will take reasonable steps to protect confidential information received while providing our services."
                    },
                    {
                        "num": "16.3",
                        "text": "We will not knowingly disclose confidential information to unauthorized parties, except when:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Disclosure is necessary to perform the agreed services.",
                    "The Client has authorized disclosure.",
                    "Disclosure is required by law or a valid legal order.",
                    "The information is already public through no breach of our obligations."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "16.4",
                        "text": "Clients must obtain appropriate authorization before submitting confidential information belonging to third parties."
                    }
                ]
            }
        ]
    },
    {
        "id": "website-use-and-prohibited-conduct",
        "title": "Website Use and Prohibited Conduct",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "17.1",
                        "text": "Visitors must use our website responsibly and lawfully."
                    },
                    {
                        "num": "17.2",
                        "text": "Users must not:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "Use the website for fraud, deception, or unlawful purposes.",
                    "Attempt unauthorized access to the website or connected systems.",
                    "Upload viruses, malware, or harmful code.",
                    "Copy, reproduce, or commercially exploit website content without permission.",
                    "Submit materials that infringe another party’s rights.",
                    "Disrupt website functionality or compromise security.",
                    "Use the website in violation of applicable laws or regulations."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "17.3",
                        "text": "We may restrict or suspend access when reasonably necessary to protect our website, users, or operations."
                    }
                ]
            }
        ]
    },
    {
        "id": "disclaimers-and-limitation-of-liability",
        "title": "Disclaimers and Limitation of Liability",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "18.1",
                        "text": "We will make reasonable efforts to perform services according to agreed requirements and relevant professional standards."
                    },
                    {
                        "num": "18.2",
                        "text": "Website content is provided for general information. We do not guarantee continuous availability, uninterrupted operation, error-free content, or compatibility with every browser or device."
                    },
                    {
                        "num": "18.3",
                        "text": "To the extent allowed by law, we will not be liable for indirect, incidental, special, or consequential losses arising from use of our website or services."
                    },
                    {
                        "num": "18.4",
                        "text": "We are not responsible for commercial results, platform decisions, market performance, sales, or promotional outcomes outside our reasonable control."
                    },
                    {
                        "num": "18.5",
                        "text": "These Terms do not exclude or restrict liability where doing so is prohibited by law, including liability for fraud, willful misconduct, or other legally protected matters."
                    },
                    {
                        "num": "18.6",
                        "text": "Where permitted by law, contractual liability limitations will be interpreted according to the relevant Service Agreement and applicable legal requirements."
                    }
                ]
            }
        ]
    },
    {
        "id": "indemnification",
        "title": "Indemnification",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "19.1",
                        "text": "To the extent permitted by law, the Client agrees to indemnify and hold harmless Kiddli Publishings, its authorized representatives, and service providers against third-party claims, damages, liabilities, and reasonable legal costs arising directly from:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "The Client’s infringement of third-party intellectual property rights.",
                    "Submission of unauthorized photographs, personal information, or other materials.",
                    "The Client’s breach of these Terms or the relevant Service Agreement.",
                    "Unlawful or unauthorized use of our deliverables by the Client."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "19.2",
                        "text": "This obligation does not apply to the extent a claim arises from the Company’s own breach, negligence, or unlawful conduct."
                    }
                ]
            }
        ]
    },
    {
        "id": "suspension-and-termination",
        "title": "Suspension and Termination",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "20.1",
                        "text": "We may suspend website access or discontinue a Project when reasonably necessary because of:"
                    }
                ]
            },
            {
                "type": "ol",
                "items": [
                    "A material breach of these Terms or the Service Agreement.",
                    "Fraudulent or unlawful conduct.",
                    "Unpaid amounts, subject to applicable contractual obligations.",
                    "Submission of unlawful or unauthorized materials.",
                    "Circumstances making continued performance unlawful or commercially impracticable."
                ]
            },
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "20.2",
                        "text": "Where appropriate, we will notify the Client and allow an opportunity to resolve the issue before terminating the engagement."
                    },
                    {
                        "num": "20.3",
                        "text": "Termination, outstanding balances, completed work, intellectual property rights, and refunds will be handled according to the applicable Service Agreement, Refund and Cancellation Policy, and law."
                    },
                    {
                        "num": "20.4",
                        "text": "Termination does not remove rights or obligations that arose before its effective date."
                    }
                ]
            }
        ]
    },
    {
        "id": "force-majeure",
        "title": "Force Majeure",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "21.1",
                        "text": "Neither party will be responsible for a failure or delay in performance to the extent it results from circumstances outside that party’s reasonable control."
                    },
                    {
                        "num": "21.2",
                        "text": "Such events may include natural disasters, extreme weather, government restrictions, public emergencies, war, civil unrest, widespread internet or infrastructure failures, labor disruptions, and significant third-party service interruptions."
                    },
                    {
                        "num": "21.3",
                        "text": "The affected party must make reasonable efforts to inform the other party and resume its obligations as soon as reasonably practicable."
                    },
                    {
                        "num": "21.4",
                        "text": "Related financial or contractual consequences will be determined under the applicable Service Agreement and law."
                    }
                ]
            }
        ]
    },
    {
        "id": "privacy-and-data-protection",
        "title": "Privacy and Data Protection",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "22.1",
                        "text": "Our Privacy Policy governs how we collect, process, store, and disclose personal information."
                    },
                    {
                        "num": "22.2",
                        "text": "By using our website or services, Clients acknowledge that their personal information may be processed for the purposes explained in that Policy, subject to applicable legal requirements."
                    },
                    {
                        "num": "22.3",
                        "text": "Clients should read the Privacy Policy before submitting personal details, photographs, manuscripts, or other project materials."
                    }
                ]
            }
        ]
    },
    {
        "id": "changes-to-these-terms",
        "title": "Changes to These Terms",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "23.1",
                        "text": "Kiddli Publishings may amend these Terms when necessary."
                    },
                    {
                        "num": "23.2",
                        "text": "Revised Terms will be posted on our website with an updated effective date or last-updated date."
                    },
                    {
                        "num": "23.3",
                        "text": "Revisions will not retroactively remove rights or obligations established under existing Service Agreements or applicable law."
                    },
                    {
                        "num": "23.4",
                        "text": "If a material revision affects an existing contractual relationship, we will provide notice or obtain agreement when legally required."
                    }
                ]
            }
        ]
    },
    {
        "id": "governing-law-and-dispute-resolution",
        "title": "Governing Law and Dispute Resolution",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "24.1",
                        "text": "These Terms are governed by the laws applicable to the contractual relationship between the Company and Client, subject to any mandatory protections available to the Client."
                    },
                    {
                        "num": "24.2",
                        "text": "Both parties will make reasonable efforts to resolve disagreements through good-faith communication and discussion."
                    },
                    {
                        "num": "24.3",
                        "text": "If a dispute cannot be settled amicably, either party may seek available remedies through a competent court or another legally recognized dispute-resolution process."
                    },
                    {
                        "num": "24.4",
                        "text": "Nothing in this section removes mandatory consumer rights or protections available under the laws of the Client’s country or place of residence."
                    }
                ]
            }
        ]
    },
    {
        "id": "severability",
        "title": "Severability",
        "blocks": [
            {
                "type": "p",
                "text": "If a provision of these Terms is found invalid, unlawful, or unenforceable, it will, where legally possible, be interpreted or limited only as much as necessary to make it enforceable."
            },
            {
                "type": "p",
                "text": "All remaining provisions will continue to apply to the extent permitted by law."
            }
        ]
    },
    {
        "id": "entire-agreement-and-contractual-priority",
        "title": "Entire Agreement and Contractual Priority",
        "blocks": [
            {
                "type": "clauses",
                "items": [
                    {
                        "num": "26.1",
                        "text": "These Terms, the Privacy Policy, the Refund and Cancellation Policy, and any applicable Service Agreement collectively form the contractual framework for our website and services."
                    },
                    {
                        "num": "26.2",
                        "text": "If project-specific provisions in a Service Agreement conflict with these general Terms, the project-specific provisions will take precedence for that Project to the extent of the conflict, unless otherwise agreed or prohibited by law."
                    },
                    {
                        "num": "26.3",
                        "text": "Changes to an individual Service Agreement must be documented in writing and accepted by the relevant parties to take effect."
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
                "type": "p",
                "text": "For questions, concerns, or requests about these Terms and Conditions, please contact Kiddli Publishings through our official communication channels."
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

export default function TermsAndConditionsPage() {
    return (
        <main>
            <LegalPage
                title="Terms and Conditions"
                subtitle="The rules that guide how we work together, from your first inquiry to your published book."
                icon={<ScrollIcon />}
                intro={intro}
                sections={sections}
            />
            <Footer />
        </main>
    );
}