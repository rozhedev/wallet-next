import SectionLayout from "@/modules/layout/SectionLayout";
import PageBreadcrumb from "@/modules/layout/PageBreadcrumb";
import { projectNames } from "@/data/pages/initial";
import { rulesContent } from "@/data/pages/rules";

export default function Terms() {
    return (
        <SectionLayout id="terms">
            <PageBreadcrumb
                // * Don't add space between slash and &nbsp;
                separator={<span>&nbsp;/&nbsp;</span>}
                activeClass="breadcrumb-active"
                pageTitle="Terms and Conditions"
            />
            <div className="page-inner">
                <p>
                    <i>Effective as of {rulesContent.effectiveAsDate}</i>
                </p>
                <br />
                <h4 className="h4">1. General Conditions</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy1">
                    <li>This document has been prepared in accordance with UK law and generally accepted asset management practices.</li>
                    <li>The {rulesContent.projectDomain} website is available for use only by registered users.</li>
                    <li>To use {rulesContent.projectDomain} you must be an adult, 18 years or older.</li>
                    <li>
                        By registering on the {rulesContent.projectDomain} website managed by {projectNames.defWalletLtd} based in London, you agree and fully accept the following Terms and
                        Conditions and the Privacy Policy.
                    </li>
                </ol>
                <br />

                <h4 className="h4">2. Investment Conditions</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy2">
                    <li>The deposit is a private agreement between London based {projectNames.defWalletLtd} and the user.</li>
                    <li>The user makes an investment in which assets are delegated to management with full awareness and bearing all risks.</li>
                    <li>The amount and duration of the investment depends on the sole decision of the user.</li>
                    <li>User can cancel his deposit after first 6 hours.</li>
                    <li>
                        To make a deposit, the user can use any payment system accepted by {rulesContent.projectDomain}, user can open several accounts for their own use. However, they cannot use them
                        to get a referral commission for registering next accounts as previous downlines.
                    </li>
                    <li>Any attempt to unfairly influence the operation of the deposit system or earn referral commission may result in the closure of all user accounts.</li>
                </ol>
                <br />

                <h4 className="h4">3. Withdrawal Conditions</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy3">
                    <li>The waiting time for withdrawal does not exceed {rulesContent.withdrawalTime} on all days of the year (including weekends and holidays).</li>
                    <li>The withdrawal by {rulesContent.projectDomain} is understood as the time of sending the transfer to the user&apos;s wallet / account.</li>
                    <li>
                        {projectNames.defWalletLtd} has no influence on the operation of the blockchain network responsible for the speed of cryptocurrency transfer, as well as on factors from third
                        parties.
                    </li>
                    <li>
                        {projectNames.defWalletLtd} is not responsible for withdrawals ordered to the user&apos;s account, which is subject to additional verification or the amount does not meet the
                        credit requirements (e.g. cryptocurrency exchanges with a specified incoming minimum).
                    </li>
                    <li>{projectNames.defWalletLtd} is also not responsible for an incorrectly entered withdrawal account or cryptocurrency wallet address.</li>
                    <li>
                        {projectNames.defWalletLtd} in special circumstances reserves the right to extend the withdrawal time in the event of detected fraud, attempts to take over another user&apos;s
                        account or in cases requiring individual contact with the user.
                    </li>
                </ol>
                <br />

                <h4 className="h4">4. Anti-Spam Terms</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy4">
                    <li>Spam is commercial e-mail or unsolicited bulk e-mail, including &quot;spam/junk mail&quot;, which has not been requested by the recipient.</li>
                    <li>It is intrusive and often irrelevant or offensive, and it wastes valuable resources.</li>
                    <li>Inappropriate newsgroup activities, consisting of excessive posting of the same materials to several newsgroups, are also deemed to be spam.</li>
                    <li>We don’t accept unsolicited e-mails of any kind in connection with the marketing of the services provided by {projectNames.defWalletLtd}.</li>
                    <li>
                        If any law enforcement agency, internet provider, web hosting provider or other person or entity provide us with notice that you may have engaged in transmission of unsolicited
                        e-mails or may have engaged in otherwise unlawful conduct or conduct in violation of an internet service provider&apos;s terms or any such policies regulations, we will reserve
                        the right to cooperate in any investigation relating to your activities including disclosure of your account information.
                    </li>
                    <li>
                        If you didn&apos;t receive messages from {projectNames.defWalletLtd}, please check your SPAM / JUNK folder because some email providers can mark our email as SPAM at first
                        time. Add email: noreply@{rulesContent.projectDomain} to your white-list.
                    </li>
                </ol>
                <br />

                <h4 className="h4">5. Account Security Terms</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy5">
                    <li>Each user is responsible for maintaining the security of their account.</li>
                    <li>The user should not share the username and secret phrase combination (alternatively named passphrase) with anyone or write it down in an easily accessible place.</li>
                </ol>
                <br />

                <h4 className="h4">6. Procedure of amending the present rules</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy6">
                    <li>Administration of {projectNames.defWalletLtd} reserves the right to make changes to the current document without the consent of users.</li>
                    <li>
                        Administration of {projectNames.defWalletLtd} will inform users about changes by publishing notice on the one of company’s social media account (Facebook, Instagram, Telegram,
                        Twitter, YouTube).
                    </li>
                    <li>Terms and Conditions changes come into force since the date of publishing information on the site / social media.</li>
                </ol>
                <br />

                <h4 className="h4">7. Customer Service and Support</h4>
                <br />
                <ol className="ordered-list ordered-list--privacy7">
                    <li>Each user can contact our support 24 hours, 7 days a week via Live Chat or email messages.</li>
                    <li>The user is obliged to follow the instructions of our support team to solve the possible problem.</li>
                </ol>
            </div>
        </SectionLayout>
    );
}
