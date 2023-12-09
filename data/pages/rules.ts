export const privacyPolicyContent = {
    effectiveAsDate: "October 12, 2021",
    address: "62 New Cavendish Street, London, England, W1G 8TA",
    registryCode: "13696609",
    mailHref: "mailto:support@flemwallet.io",
    mailLabel: "support@flemwallet.io",
    projectDomain: "flemwallet.io",
    getProjectLink() {
        return `https://${this.projectDomain}`;
    }
}