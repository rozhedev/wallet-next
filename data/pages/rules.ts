export const rulesContent = {
    effectiveAsDate: "October 12, 2022",
    address: "62 New Cavendish Street, London, England, W1G 8TA",
    registryCode: "13696609",
    projectDomain: "flennovation.pro",
    mailHref: "mailto:support@flennovation.pro",
    mailLabel: "support@flennovation.pro",
    getProjectLink() {
        return `https://${this.projectDomain}`;
    },
    withdrawalTime: "6 hours",
};
