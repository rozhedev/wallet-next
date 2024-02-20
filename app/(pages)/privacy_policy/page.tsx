import Link from "next/link";
import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import { projectNames } from "@/data/initial";
import { rulesContent } from "@/data/pages/rules";

export default function PrivacyPolicy() {
    return (
        <SectionLayout id="privacy-policy">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Privacy policy"
            />
            <div className="page-inner">
                <p>
                    <i>Effective as of {rulesContent.effectiveAsDate}</i>
                </p>
                <br />
                <p>
                    This Privacy Policy informs and explains to you how we collect, store, and process any information that directly, indirectly, or in connection with other information — including a
                    personal identification number — allows for your identification or identifiability (hereinafter the “Personal Data”) at {projectNames.defWalletLtd} (hereinafter - “
                    {projectNames.def}”, “we”, “our”). Privacy and data protection are core principles on which we have our website {rulesContent.getProjectLink()} and any of our Windows, MacAppStore,
                    AppStore or Google Play applications “{projectNames.defWallet}” (hereinafter the “Application”).
                </p>
                <br />
                <p>
                    We have implemented various technical and organizational measures to be compliant with applicable personal data, privacy, and data security legislation in the countries where we
                    operate or where the applicable law applies to us.
                </p>
                <br />
                <p>
                    This Privacy Policy sets forth the basic rules and principles by which we process your Personal Data, and mentions our responsibilities while processing your Personal Data
                    according to transparency obligations. We do not intend to collect personal data of children or persons under the age of 18 (eighteen) years old.
                </p>
                <br />
                <h4 className="h4">Contact details and Questions</h4>
                <br />
                <p>
                    Any questions about this Privacy Policy, the processing of Personal Data or data subject’s requests shall be directed to:{" "}
                    <u>
                        {projectNames.defWalletLtd} (registry code {rulesContent.registryCode})
                    </u>
                </p>
                <br />
                Address:
                <address>{rulesContent.address}</address>
                <br />
                <p>
                    Email:&nbsp;
                    <Link
                        href={rulesContent.mailHref}
                        className="link"
                        scroll={false}
                    >
                        {rulesContent.mailLabel}
                    </Link>
                </p>
                <br />
                <h4 className="h4">1. Principles</h4>
                <br />
                <p>Our Application is based on principles relating to the processing of the Personal Data and we commit to the following principles relating to the processing of the Personal Data:</p>
                <br />
                <ul className="unordered-list">
                    <li>
                        we process your Personal Data lawfully, fairly and in a transparent manner by providing this Privacy Policy and showing legal bases for the processing of your Personal Data;
                    </li>
                    <li>we collect the Personal Data for specified, explicit and legitimate purposes mentioned in this Privacy Policy;</li>
                    <li>
                        we process Personal Data that is adequate, relevant and limited to what is necessary in relation to the purposes for which it is processed, especially we don’t require you to
                        register or log in, we don’t have access to your funds (private keys), we don’t require your name or email address;
                    </li>
                    <li>we collect accurate and, where necessary, kept up to date Personal Data when applicable and relevant;</li>
                    <li>we store your Personal Data for no longer than is necessary for the purposes for which the Personal Data are processed;</li>
                    <li>we use and ensure appropriate security of the Personal Data;</li>
                </ul>
                <br />
                <h4 className="h4">2. Private Keys Stay on Device</h4>
                <br />
                <p>Your private keys will stay on your device.</p>
                <br />
                <h4 className="h4">3. Categories of Collected Personal Data</h4>
                <br />
                <p>We collect the following categories of your Personal Data:</p>
                <ul className="unordered-list">
                    <li>
                        Your identification information necessary for your identification such as nickname and email. This information is necessary for your identification when you subscribe to our
                        newsletters or leave a comment on the Application.
                    </li>
                    <li>
                        Device Information. We may collect information about the device you use to access our Application, including the hardware model, operating system and version, unique device
                        identifiers, and mobile network information. This information will never be communicated to third parties unless you provide prior specific consent.
                    </li>
                    <li>Analytical Information that includes information about how you use the Application.</li>
                    <li>
                        Information you may provide to us. Your email address, virtual currency addresses, and any other information you choose to provide will never be communicated to third parties
                        unless you provide prior specific consent.
                    </li>
                </ul>
                <br />
                <h4 className="h4">4. Processed Personal Data</h4>
                <br />
                <p>We process personal data when you interact with the Application or use our services, especially when:</p>
                <ul className="unordered-list">
                    <li>you use our services;</li>
                    <li>you browse any page or section of the Application;</li>
                    <li>you communicate with us or leave a query;</li>
                    <li>you leave a comment on the Website;</li>
                    <li>you subscribe to our newsletters/updates;</li>
                    <li>you receive notification from us;</li>
                    <li>we need to share your personal data with the authorized third-parties to provide the services;</li>
                    <li>we measure or analyze the Application’s traffic.</li>
                </ul>
                <br />
                <h4 className="h4">5. Purposes and Legal bases for the Processing of Your Personal Data</h4>
                <br />
                <p>We process your Personal Data for the following purposes:</p>
                <ul className="unordered-list">
                    <li>Providing services. We need to provide services via the Application. Legal basis: contract.</li>
                    <li>Performing transactions. Legal basis: contract.</li>
                    <li>Providing newsletters/offers/updates which may be interesting to you. Legal basis: consent for newsletters; legitimate interests for offers and updates.</li>
                    <li>Compliance with applicable regulatory rules. Legal basis: legal obligation.</li>
                    <li>Keeping the Application running (managing your requests, remembering your settings, hosting, and back-end infrastructure). Legal basis: legitimate interests.</li>
                    <li>
                        Preventing frauds, illegal activity, or any violation of the terms or Privacy Policy. We may disable access to the Application, erase or correct personal data in some cases.
                        Legal basis: legitimate interests.
                    </li>
                    <li>
                        Improving the Application (testing features, interacting with feedback platforms, managing landing pages, heat mapping the Application, traffic optimization, and data analysis
                        and research, including profiling and the use of machine learning and other techniques over your Personal Data and in some cases using third parties to do this). Legal basis:
                        legitimate interests.
                    </li>
                    <li>Customer support (notifying you of any changes to the Application, services, solving issues, any bug fixing). Legal basis: legitimate interests.</li>
                </ul>
                <br />
                <h4 className="h4">6. Blockchain Transactions</h4>
                <br />
                <p>Your blockchain transactions may be relayed through servers or nodes and will be publicly visible due to the public nature of distributed ledger systems.</p>
                <br />
                <h4 className="h4">7. Secure Communication with our Servers, Confidentiality, and Security Measures</h4>
                <br />
                <p>
                    We have security and organizational measures and procedures to secure the data collected and stored and to prevent it from being accidentally lost, used, altered, disclosed, or
                    accessed without authorization. All of our servers support HTTPS. We allow disclosure of your personal data only to those employees and companies who have a business need to know
                    such data. They will process the Personal Data on our instructions and they are obliged to do it confidentially under confidentiality agreements.
                </p>
                <p>
                    You acknowledge that no data transmission is guaranteed to be 100% secure and there may be risks. You are responsible for your login information and password. You shall keep them
                    confidential. In case if your privacy has been breached, please contact us immediately. We have procedures in place to handle any potential data breach and we will inform a
                    regulator of a breach if we are legally required to do so.
                </p>
                <br />
                <h4 className="h4">8. Communication with Third-Party Servers</h4>
                <br />
                <p>
                    Exchange rates, balances, transactions, and other blockchain information may be read from or related to third-party servers. We cannot guarantee the privacy of your Internet
                    connection.
                </p>
                <br />
                <h4 className="h4">9. Location of the Processing of Personal Data and Third-Party Services</h4>
                <br />
                <p>The Personal Data is collected and processed by the company incorporated in United Kingdom.</p>
                <p>
                    The Application contains links to third-party sites. The Privacy Policy does not cover the privacy practices of such third parties. These third parties have their own privacy
                    policies and we do not accept any responsibility or liability for their sites, features or policies. Please read their privacy policies before you submit any data to them.
                </p>
                <br />
                <p>There are the following third parties:</p>
                <ul className="unordered-list">
                    <li>third parties providing exchanges services such as Changelly, ChangeNOW, and Simplex;</li>
                    <li>email service providers to notify you and for direct marketing purposes such as Kickoff and SendGrid;</li>
                    <li>website analytics companies to analyze data and improve our services and the Application such as Yandex Metrics and Google Analytics;</li>
                    <li>platforms which we use for the support services such as WhatsApp, Snapchat, Facebook Messenger, Telegram;</li>
                    <li>social media companies to promote and be present in social media such as Twitter, YouTube, Telegram, GitHub, Medium.</li>
                </ul>
                <br />
                <h4 className="h4">10. Aggregate Usage Statistics</h4>
                <br />
                <p>
                    We may collect {projectNames.def} services usage information in order to improve function or UI, but will only use this information in an aggregated, anonymized fashion, and never
                    in association with your name, email, or other personal data.
                </p>
                <br />
                <h4 className="h4">11. Optional Extra Personal Data</h4>
                <br />
                <p>
                    You may choose to provide us with the Personal Data in order to participate in certain programs, activate features, or obtain other benefits but you will always be able to use the
                    basic features of {projectNames.def} without providing personal data. If you provide us with the Personal Data then, notwithstanding any part of this Privacy Policy, we may use
                    that ihnformation in order to provide you with services or to improve the functioning or UI of {projectNames.def}.
                </p>
                <br />
                <h4 className="h4">12. Your Rights as Data Subject</h4>
                <br />
                <p>You can exercise the following rights by contacting us.</p>
                <p>You have the right to access information about you, especially:</p>
                <ul className="unordered-list">
                    <li>the categories of Personal Data;</li>
                    <li>the purposes of the processing of the Personal Data;</li>
                    <li>how long the Personal Data will be retained and the criteria used to determine that period;</li>
                    <li>other rights regarding the use of your Personal Data.</li>
                </ul>
                <br />
                <p>You have the right to make us correct any inaccurate Personal Data about you.</p>
                <p>
                    You can object to using your Personal Data for profiling you or making automated decisions about you. We may use your Personal Data to determine whether we should let you know the
                    information that might be relevant to you.
                </p>
                <br />
                <p>
                    You have the right to the data portability of your Personal Data to another service or website. We will give you a copy of your Personal Data in a readable format so that you can
                    provide it to another service. If you ask us and it is technically possible, we will directly transfer the Personal Data to the other service for you.
                </p>
                <p>
                    You have the right to be “forgotten”. You may ask to erase the Personal Data about you if it is no longer necessary for us to store the data for purposes of your use of the
                    Application.
                </p>
                <br />
                <p>
                    You have the right to lodge a complaint regarding the use of your Personal Data. You can address a complaint to your national regulator (the list of the regulators are accessible
                    via https://edpb.europa.eu/about-edpb/board/members_en).
                </p>
                <p>
                    Once we receive any of your requests we will consider and decide on it within one month unless there is a justified requirement to provide such information faster. This term may be
                    extended according to the applicable law.
                </p>
                <br />
                <p>
                    We may request specific information from you to confirm your identity when necessary and reasonable. This is a security measure to ensure that the Personal Data is not disclosed to
                    any person who has no right to receive it.
                </p>
                <p>
                    You do not need to pay a fee to access information or other rights but we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive or refuse to
                    comply with your request in these circumstances.
                </p>
                <br />
                <h4 className="h4">13. Support Requests</h4>
                <br />
                <p>
                    If you contact support then as part of the support request we may incidentally collect your personal data but we will endeavor to keep that information secure and confidential.
                    Support information may be managed using a third-party service and further terms of that service may apply to your support request.
                </p>
                <p>You have the right to make us correct any inaccurate Personal Data about you.</p>
                <br />
                <p>
                    You can object to using your Personal Data for profiling you or making automated decisions about you. We may use your Personal Data to determine whether we should let you know the
                    information that might be relevant to you.
                </p>
                <p>
                    You have the right to the data portability of your Personal Data to another service or website. We will give you a copy of your Personal Data in a readable format so that you can
                    provide it to another service. If you ask us and it is technically possible, we will directly transfer the Personal Data to the other service for you.
                </p>
                <br />
                <p>
                    You have the right to be “forgotten” . You may ask to erase the Personal Data about you if it is no longer necessary for us to store the data for purposes of your use of the
                    Application.
                </p>
                <p>
                    You have the right to lodge a complaint regarding the use of your Personal Data. You can address a complaint to your national regulator (the list of the regulators are accessible
                    via https://edpb.europa.eu/about-edpb/board/members_en).
                </p>
                <br />
                <p>
                    Once we receive any of your requests we will consider and decide on it within one month unless there is a justified requirement to provide such information faster. This term may be
                    extended according to the applicable law.
                </p>
                <p>
                    We may request specific information from you to confirm your identity when necessary and reasonable. This is a security measure to ensure that the Personal Data is not disclosed to
                    any person who has no right to receive it.
                </p>
                <br />
                <p>
                    You do not need to pay a fee to access information or other rights but we may charge a reasonable fee if your request is clearly unfounded, repetitive, or excessive or refuse to
                    comply with your request in these circumstances.
                </p>
                <br />
                <h4 className="h4">14. Retention Policy</h4>
                <br />
                <p>
                    We store the Personal Data as long as we need it and the retention practice depends on the type of data we collect, regulatory burden, and how we use the Personal Data. The
                    retention period is based on criteria that include legally mandated retention periods, pending or potential litigation, tax and accounting laws, intellectual property or ownership
                    rights, contract requirements, operational directives or needs, and historical archiving.
                </p>
                <p>
                    In some circumstances, we may anonymize your Personal Data for research or statistical purposes in which case we may use this information indefinitely without further notice to
                    you.
                </p>
                <br />
                <h4 className="h4">15. Changes to the Privacy Policy</h4>
                <br />
                <p>{projectNames.def} reserves the right to change this Privacy Policy at any time. We will inform you about the changes when it is possible.</p>
                <br />
            </div>
        </SectionLayout>
    );
}
