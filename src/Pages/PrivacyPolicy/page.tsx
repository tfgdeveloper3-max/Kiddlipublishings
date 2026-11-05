import LegalPage, { type LegalSection } from "@/components/legal/LegalPage";
import Footer from "@/components/Footer";

const ShieldIcon = () => (
    <svg viewBox="0 0 64 64" fill="none" stroke="#1E1E1E" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-[48px] w-[48px]" aria-hidden="true">
        <path d="M32 5l21 7.5V27c0 13.5-8.8 22.8-21 28-12.2-5.2-21-14.5-21-28V12.5z" fill="#FFD335" />
        <path d="M32 11l15 5.4V27c0 9.6-6.2 16.5-15 20.7-8.8-4.2-15-11.1-15-20.7V16.4z" fill="#fff" strokeWidth={1.4} />
        <rect x="24.5" y="27" width="15" height="12" rx="2.5" fill="#6B34C4" />
        <path d="M27.5 27v-3a4.5 4.5 0 0 1 9 0v3" strokeWidth={2} />
        <circle cx="32" cy="33" r="1.6" fill="#fff" stroke="none" />
    </svg>
);

const sections: LegalSection[] = [
    {
        id: "introduction",
        title: "Introduction",
        blocks: [
            { type: "p", text: "Kiddli Publishings (“Company,” “we,” “our,” or “us”) respects your privacy and is committed to safeguarding the personal information of website visitors, clients, authors, parents, legal guardians, and business partners." },
            { type: "p", text: "Our services include children’s book development, illustration and design, animation, marketing, character development, and worldwide publishing. To deliver these services, we may collect and process personal information, creative submissions, and details relating to individual projects." },
            { type: "p", text: "This Privacy Policy describes how we collect, use, retain, protect, and share information when you browse our website, contact our team, submit an inquiry, purchase services, or otherwise interact with Kiddli Publishings." },
            { type: "p", text: "By using our website or services, you acknowledge that you have read and understood this Policy. Applicable service agreements and relevant privacy and data protection laws also govern your relationship with us." },
        ],
    },
    {
        id: "information-we-collect",
        title: "Information We Collect",
        blocks: [
            { type: "p", text: "The information we collect depends on your interactions with our website, team, and services." },
            {
                type: "sub",
                title: "2.1. Personal and Contact Information",
                blocks: [
                    { type: "p", text: "When you make an inquiry, arrange a consultation, or purchase our services, we may collect:" },
                    {
                        type: "ul",
                        items: [
                            "Your full name.",
                            "Email address.",
                            "Telephone or mobile number.",
                            "Residential or business address, when needed.",
                            "Parent or legal guardian contact details, where relevant.",
                            "Billing details and transaction information, where applicable.",
                            "Additional information you choose to provide through our website or other communication channels.",
                        ],
                    },
                ],
            },
            {
                type: "sub",
                title: "2.2. Book and Project Information",
                blocks: [
                    { type: "p", text: "To assess your requirements and complete publishing or creative work, we may collect:" },
                    {
                        type: "ul",
                        items: [
                            "Book titles, manuscripts, and story ideas.",
                            "Character descriptions and development requirements.",
                            "Plot summaries, scripts, and other written materials.",
                            "Children’s book themes and educational content.",
                            "Illustration references, sketches, and artwork.",
                            "Photographs and other visual references.",
                            "Animation ideas, scripts, and production directions.",
                            "Branding and promotional requirements.",
                            "Publishing preferences and distribution instructions.",
                            "Other creative submissions associated with your project.",
                        ],
                    },
                ],
            },
            {
                type: "sub",
                title: "2.3. Technical and Website Usage Information",
                blocks: [
                    { type: "p", text: "Depending on the technologies used on our website, we may automatically collect certain technical and browsing information, including:" },
                    {
                        type: "ul",
                        items: [
                            "IP address.",
                            "Browser type and version.",
                            "Device type and operating system.",
                            "Pages viewed and browsing activity.",
                            "Dates and times of visits.",
                            "Referring websites or traffic sources.",
                            "Information about website interactions and performance.",
                        ],
                    },
                    { type: "p", text: "We may use this information to keep our website functioning properly, improve the browsing experience, assess performance, and detect or prevent unauthorized activity." },
                ],
            },
        ],
    },
    {
        id: "how-we-use-your-information",
        title: "How We Use Your Information",
        blocks: [
            { type: "p", text: "Kiddli Publishings uses collected information for legitimate business activities, including:" },
            {
                type: "ol",
                items: [
                    "Answering inquiries and responding to service requests.",
                    "Communicating with clients about publishing and creative projects.",
                    "Developing children’s books according to client specifications.",
                    "Producing illustrations, covers, page layouts, and other design assets.",
                    "Creating animations, characters, scripts, and related materials.",
                    "Providing character-building and character-development services.",
                    "Organizing and carrying out marketing and promotional campaigns.",
                    "Coordinating publishing services and international book distribution.",
                    "Preparing proposals, quotations, invoices, and service contracts.",
                    "Maintaining client accounts, tracking projects, and delivering services.",
                    "Improving our website, services, internal processes, and client experience.",
                    "Keeping appropriate financial, business, and project records.",
                    "Preventing fraud, safeguarding our business interests, and meeting legal obligations.",
                ],
            },
            { type: "p", text: "We will not knowingly use personal information for purposes materially different from those described in this Policy without giving appropriate notice or obtaining consent when required by law." },
        ],
    },
    {
        id: "childrens-privacy",
        title: "Children’s Privacy and Parental Consent",
        blocks: [
            { type: "p", text: "Kiddli Publishings understands the importance of protecting children’s personal information, especially when working with children’s stories, illustrations, characters, and animated content." },
            { type: "p", text: "Our website and services are primarily designed for adults, including parents, legal guardians, authors, educators, and organizations seeking children’s publishing and creative services." },
            { type: "p", text: "We do not knowingly request personal information directly from children under 13 without obtaining legally required parental consent. Parents or legal guardians should submit inquiries and information on a child’s behalf." },
            { type: "p", text: "If a project includes a child’s name, photograph, likeness, personal experiences, voice recording, or other identifying information, the submitting client is expected to obtain the necessary parental or guardian authorization and any additional permissions required by law." },
            { type: "p", text: "We do not seek to collect more information about children than is needed for the relevant purpose." },
            { type: "p", text: "If we discover that information has been collected directly from a child without required parental consent, we will take reasonable steps to investigate and, where appropriate, delete it." },
            { type: "p", text: "Parents and legal guardians may contact us to request information about, access to, or deletion of their child’s personal information, subject to applicable legal requirements." },
            { type: "p", text: "Where applicable, we will follow relevant children’s privacy requirements, including the Children’s Online Privacy Protection Act (COPPA) and other applicable data protection laws." },
        ],
    },
    {
        id: "creative-submissions",
        title: "Manuscripts, Creative Submissions, and Intellectual Property",
        blocks: [
            { type: "p", text: "Clients may submit unpublished manuscripts, story concepts, artwork, character ideas, photographs, scripts, animation references, and other creative materials while using our services." },
            { type: "p", text: "We recognize that these submissions may include confidential, proprietary, or commercially sensitive information. Accordingly:" },
            {
                type: "ol",
                items: [
                    "We will use submitted materials to assess, develop, produce, manage, and deliver the services requested by the client.",
                    "We will apply reasonable safeguards to protect unpublished content and other creative submissions from unauthorized access or disclosure.",
                    "We will not knowingly publish, distribute, or publicly exhibit unpublished client materials without appropriate permission, unless disclosure is required by law.",
                    "Submitting creative materials does not automatically transfer ownership of the client’s intellectual property to Kiddli Publishings.",
                    "Ownership, licensing, permitted uses, and other intellectual property matters will be determined by the relevant service contract or another written agreement.",
                    "Clients must ensure that they have the rights and permissions needed to submit third-party content, including photographs, artwork, music, scripts, and reference images.",
                    "Clients must obtain appropriate authorization before submitting or approving the use of materials that identify children or other individuals.",
                ],
            },
        ],
    },
    {
        id: "cookies",
        title: "Cookies and Tracking Technologies",
        blocks: [
            { type: "p", text: "Our website may use cookies and related technologies to support functionality, measure traffic, understand visitor activity, and improve the browsing experience." },
            { type: "p", text: "Depending on the tools implemented, we may use:" },
            {
                type: "ul",
                items: [
                    "Essential cookies: Enable core website features, navigation, and security.",
                    "Analytics cookies: Provide information about traffic, visitor interactions, and website performance.",
                    "Preference cookies: Remember selected settings and browsing preferences.",
                    "Marketing cookies: Help evaluate advertising results and support relevant promotional activities.",
                ],
            },
            { type: "p", text: "You can manage or disable cookies through your browser settings. Disabling some cookies may limit certain website features." },
            { type: "p", text: "Where legally required, we will request consent before activating non-essential cookies or similar tracking technologies." },
        ],
    },
    {
        id: "sharing-and-disclosure",
        title: "Sharing and Disclosure of Information",
        blocks: [
            { type: "p", text: "Kiddli Publishings does not sell personal information to third parties. However, we may disclose relevant information in the circumstances described below." },
            {
                type: "sub",
                title: "7.1. Service Providers and Business Partners",
                blocks: [
                    { type: "p", text: "We may share information with trusted providers and partners who support our operations and service delivery, including:" },
                    {
                        type: "ul",
                        items: [
                            "Website hosting and technical support providers.",
                            "Cloud storage and file management services.",
                            "Illustration, animation, and production partners.",
                            "Publishing platforms and distribution partners.",
                            "Printing and manufacturing providers.",
                            "Marketing and advertising agencies.",
                            "Payment processors and financial service providers.",
                            "Communication and customer support platforms.",
                        ],
                    },
                    { type: "p", text: "These parties will receive only the information reasonably needed to perform their assigned functions, subject to suitable contractual protections or other safeguards." },
                ],
            },
            {
                type: "sub",
                title: "7.2. Legal and Regulatory Disclosures",
                blocks: [
                    { type: "p", text: "We may disclose information when reasonably necessary to:" },
                    {
                        type: "ul",
                        items: [
                            "Meet legal or regulatory obligations.",
                            "Respond to valid legal demands or court orders.",
                            "Defend our legal rights and business interests.",
                            "Investigate suspected fraud or unlawful conduct.",
                            "Protect the safety and security of clients, employees, or other individuals.",
                        ],
                    },
                ],
            },
            {
                type: "sub",
                title: "7.3. Business Transfers",
                blocks: [
                    { type: "p", text: "If our business undergoes a merger, acquisition, restructuring, or sale of assets, personal information may be transferred as part of that transaction, subject to applicable privacy requirements and appropriate protections." },
                ],
            },
        ],
    },
    {
        id: "international-transfers",
        title: "Global Publishing and International Data Transfers",
        blocks: [
            { type: "p", text: "Because Kiddli Publishings offers worldwide publishing services, we may share certain client information and project materials with publishing platforms, distributors, printers, and service partners located in other countries." },
            { type: "p", text: "As a result, your information may be stored or processed outside the country where it was originally collected." },
            { type: "p", text: "When international transfers take place, we will take reasonable steps to meet applicable data protection requirements and put appropriate safeguards in place." },
            { type: "p", text: "International publishing and distribution may require us to provide relevant partners with book-related information, including titles, author details, publication information, cover artwork, and manuscript content." },
        ],
    },
    {
        id: "marketing",
        title: "Marketing and Promotional Communications",
        blocks: [
            { type: "p", text: "We may use your contact details to send information about:" },
            {
                type: "ul",
                items: [
                    "Requested services and ongoing projects.",
                    "Publishing opportunities and announcements.",
                    "New publishing and creative services.",
                    "Relevant company updates.",
                    "Promotional offers and marketing campaigns.",
                ],
            },
            { type: "p", text: "We will send promotional messages where permitted by law and obtain consent when required." },
            { type: "p", text: "You may stop receiving promotional communications by using the available unsubscribe option or contacting our team." },
            { type: "p", text: "Unsubscribing from marketing messages does not prevent us from sending necessary communications about active projects, payments, contracts, or other essential business matters." },
        ],
    },
    {
        id: "data-security",
        title: "Data Security",
        blocks: [
            { type: "p", text: "We maintain reasonable technical, administrative, and organizational measures intended to protect personal information and creative submissions from unauthorized access, disclosure, alteration, misuse, loss, or destruction." },
            { type: "p", text: "These safeguards may include:" },
            {
                type: "ul",
                items: [
                    "Limiting access to personal and project information.",
                    "Using appropriate account security and access controls.",
                    "Maintaining secure website and hosting settings.",
                    "Applying reasonable file storage and management procedures.",
                    "Reviewing and maintaining website security measures.",
                ],
            },
            { type: "p", text: "Although we take reasonable steps to safeguard information, no website, electronic transmission, or storage method is entirely secure. We therefore cannot guarantee protection against every possible security incident." },
        ],
    },
    {
        id: "data-retention",
        title: "Data Retention and Deletion",
        blocks: [
            { type: "p", text: "We keep personal information and project materials for as long as reasonably needed to fulfill the purposes for which they were collected." },
            { type: "p", text: "The length of time we retain information may depend on:" },
            {
                type: "ol",
                items: [
                    "The duration of our relationship with the client.",
                    "The progress, status, and requirements of the relevant project.",
                    "Contractual obligations and financial recordkeeping needs.",
                    "Applicable legal and regulatory requirements.",
                    "The need to settle disputes or enforce contractual rights.",
                ],
            },
            { type: "p", text: "When information is no longer needed, we will take reasonable steps to delete it, dispose of it securely, or anonymize it, subject to applicable retention requirements." },
            { type: "p", text: "Clients may request deletion of their personal information. Such requests remain subject to relevant legal, contractual, and operational requirements." },
        ],
    },
    {
        id: "your-privacy-rights",
        title: "Your Privacy Rights",
        blocks: [
            { type: "p", text: "Your rights regarding personal information may vary according to your location and the laws that apply." },
            { type: "p", text: "These rights may include:" },
            {
                type: "ul",
                items: [
                    "Access: Request access to the personal information we hold about you.",
                    "Correction: Ask us to correct inaccurate or incomplete information.",
                    "Deletion: Request removal of personal information where applicable.",
                    "Restriction: Ask us to limit certain uses of your information.",
                    "Withdrawal of consent: Withdraw consent when it is the basis for processing.",
                    "Objection: Object to certain processing activities where legally permitted.",
                    "Data portability: Request your personal information in a commonly used format where applicable.",
                ],
            },
            { type: "p", text: "Parents and legal guardians may exercise applicable rights on behalf of their children." },
            { type: "p", text: "To make a privacy request, contact us using the details in this Policy. We may require reasonable verification of your identity before fulfilling certain requests." },
        ],
    },
    {
        id: "third-party-websites",
        title: "Third-Party Websites and Platforms",
        blocks: [
            { type: "p", text: "Our website and services may include links to, or integrations with, external websites, publishing platforms, social media networks, payment services, and other third-party resources." },
            { type: "p", text: "These independent providers may maintain their own privacy policies, terms, and information collection practices." },
            { type: "p", text: "Kiddli Publishings does not control the privacy practices of independent third parties and is not responsible for how they handle personal information." },
            { type: "p", text: "Please review the relevant third party’s privacy policy before sharing information or using its services." },
        ],
    },
    {
        id: "changes-to-this-policy",
        title: "Changes to This Privacy Policy",
        blocks: [
            { type: "p", text: "Kiddli Publishings may revise this Privacy Policy to reflect changes in our operations, services, website technologies, or legal obligations." },
            { type: "p", text: "Updated versions will appear on this page with a revised effective date or last-updated date." },
            { type: "p", text: "We encourage you to check this Policy periodically to stay informed about how we handle and protect information." },
        ],
    },
    {
        id: "contact-us",
        title: "Contact Us",
        blocks: [
            { type: "p", text: "For questions, concerns, or requests concerning this Privacy Policy, our handling of personal information, or the protection of creative submissions, please contact us through our official communication channels." },
            {
                type: "contact",
                rows: [
                    { label: "Company Name", value: "Kiddli Publishings" },
                    { label: "Website", value: "kiddlipublishings.com", href: "https://kiddlipublishings.com" },
                    { label: "Email Address", value: "support@kiddlipublishings.com", href: "mailto:support@kiddlipublishings.com" },
                    { label: "Contact Number", value: "(760) 478-6269", href: "tel:+17604786269" },
                    { label: "Business Address", value: "11113 Kernville Rd, Kernville, CA 93238" },
                ],
            },
            { type: "p", text: "We will make reasonable efforts to review and respond to privacy inquiries in accordance with applicable legal requirements." },
        ],
    },
];

export default function PrivacyPolicyPage() {
    return (
        <main>
            <LegalPage
                title="Privacy Policy"
                subtitle="How Kiddli Publishings collects, uses, and protects your information, your creative work, and your children’s privacy."
                icon={<ShieldIcon />}
                sections={sections}
            />
            <Footer />
        </main>
    );
}