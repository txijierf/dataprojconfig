module.exports = {
    database: "mongodb+srv://lemon:lemon123@mohapp-esups.mongodb.net/test?retryWrites=true&w=majority",
    testDatabase: "mongodb+srv://lester:lvds1995.@cluster0-mdsnv.mongodb.net/testdata?retryWrites=true",
    superSecret: "df;gjk3409tgpofdbvkw4gk-rwit24t,gdfpovoqeo[13- -3i -3 i-0ids-f-i-ak123-i 1--sH(*n( *y (*y(W#(*jhSD)*D)*SJ_(U#n_DXJ_ d",
    mailServer: { //smtp
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "lyulester@gmail.com",
            pass: "lvds1995."
        },
        sender: '"Lester Lyu" <lyulester@gmail.com>'
    },
    OPTS: {
        server: {
            url: 'ldap://HSCGIQDCAPWSA06:389',
            bindDN: 'cn=root',
            bindCredentials: 'passw0rd',
            searchBase: 'DC=HEALTHINFO,DC=MOH.GOV.ON.CA',
            searchFilter: '(uid={{username}})'
        }
    },
    serverHostname: "http://ec2-18-218-171-151.us-east-2.compute.amazonaws.com", //used for receive validation link
    permissions: {
        //FILL_WORKBOOK: 'fill-workbook', // not implemented, fow now, everyone can fill workbooks
        WORKBOOK_TEMPLATE_MANAGEMENT: 'CRUD-workbook-template',
        ATTRIBUTE_CATEGORY_MANAGEMENT: 'create-delete-attribute-category',
        USER_MANAGEMENT: 'user-management',
        SYSTEM_MANAGEMENT: 'system-management',
        WORKBOOK_QUERY: 'workbook-query',
		PACKAGE_MANAGEMENT: 'package-management'
    },
    constants: {
        categoryIdStartFrom: 1000000,
        attributeIdStartFrom: 3000000,
    },
    disableEmailValidation: true,
    disableLdap: true,
};
