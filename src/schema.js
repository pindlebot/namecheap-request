module.exports = {
  "schema": {
    "domains": {
      "getList": [
        {
          "name": "ListType",
          "type": "String",
          "maxLength": "10",
          "required": "No",
          "description": "Possible values are ALL, EXPIRING, or EXPIRED Default Value: ALL"
        },
        {
          "name": "SearchTerm",
          "type": "String",
          "maxLength": "70",
          "required": "No",
          "description": "Keyword to look for in the domain list"
        },
        {
          "name": "Page",
          "type": "Number",
          "maxLength": "10",
          "required": "No",
          "description": "Page to return Default Value: 1"
        },
        {
          "name": "PageSize",
          "type": "Number",
          "maxLength": "10",
          "required": "No",
          "description": "Number of domains to be listed on a page. Minimum value is 10, and maximum value is 100. Default Value: 20"
        },
        {
          "name": "SortBy",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Possible values are NAME, NAME_DESC, EXPIREDATE, EXPIREDATE_DESC, CREATEDATE, CREATEDATE_DESC"
        }
      ],
      "getContacts": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain to get contacts"
        }
      ],
      "create": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to register"
        },
        {
          "name": "Years",
          "type": "Number",
          "maxLength": "2",
          "required": "Yes",
          "description": "Number of years to register Default Value: 2"
        },
        {
          "name": "PromotionCode",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for the domain"
        },
        {
          "name": "RegistrantOrganizationName",
          "type": "String",
          "maxLength": "255",
          "required": "No ",
          "description": "Organization of the Registrant user"
        },
        {
          "name": "RegistrantJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Registrant user"
        },
        {
          "name": "RegistrantFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Registrant user"
        },
        {
          "name": "RegistrantLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the Registrant user"
        },
        {
          "name": "RegistrantAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Registrant user"
        },
        {
          "name": "RegistrantAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Registrant user"
        },
        {
          "name": "RegistrantCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Registrant user"
        },
        {
          "name": "RegistrantStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Registrant user "
        },
        {
          "name": "RegistrantStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Registrant user"
        },
        {
          "name": "RegistrantPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Registrant user"
        },
        {
          "name": "RegistrantCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Registrant user"
        },
        {
          "name": "RegistrantPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "RegistrantPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Registrant user"
        },
        {
          "name": "RegistrantFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "RegistrantEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Registrant user"
        },
        {
          "name": " TechOrganizationName ",
          "type": " String",
          "maxLength": "255",
          "required": "No ",
          "description": "Organization of the Tech user"
        },
        {
          "name": "TechJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Tech user"
        },
        {
          "name": "TechFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Tech user"
        },
        {
          "name": "TechLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the Tech user"
        },
        {
          "name": "TechAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Tech user"
        },
        {
          "name": "TechAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Tech user"
        },
        {
          "name": "TechCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Tech user"
        },
        {
          "name": "TechStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Tech user "
        },
        {
          "name": "TechStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Tech user"
        },
        {
          "name": "TechPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Tech user"
        },
        {
          "name": "TechCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Tech user"
        },
        {
          "name": "TechPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "TechPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Tech user"
        },
        {
          "name": "TechFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "TechEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Tech user"
        },
        {
          "name": " AdminOrganizationName",
          "type": " String",
          "maxLength": "255",
          "required": "No ",
          "description": "Organization of the Admin user"
        },
        {
          "name": "AdminJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Admin user"
        },
        {
          "name": "AdminFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Admin user"
        },
        {
          "name": "AdminLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes ",
          "description": "Second name of the Admin user"
        },
        {
          "name": "AdminAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Admin user"
        },
        {
          "name": "AdminAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Admin user"
        },
        {
          "name": "AdminCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Admin user"
        },
        {
          "name": "AdminStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Admin user "
        },
        {
          "name": "AdminStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Admin user"
        },
        {
          "name": "AdminPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Admin user"
        },
        {
          "name": "AdminCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Admin user"
        },
        {
          "name": "AdminPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AdminPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Admin user"
        },
        {
          "name": "AdminFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AdminEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Admin user"
        },
        {
          "name": "AuxBillingOrganizationName",
          "type": " String",
          "maxLength": "255",
          "required": "No ",
          "description": "Organization of the AuxBilling user"
        },
        {
          "name": "AuxBillingJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the AuxBilling user"
        },
        {
          "name": "AuxBillingFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the AuxBilling user"
        },
        {
          "name": "AuxBillingLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the AuxBilling user"
        },
        {
          "name": "AuxBillingAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the AuxBilling user"
        },
        {
          "name": "AuxBillingAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the AuxBilling user"
        },
        {
          "name": "AuxBillingCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the AuxBilling user"
        },
        {
          "name": "AuxBillingStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the AuxBilling user"
        },
        {
          "name": "AuxBillingStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the AuxBilling user"
        },
        {
          "name": "AuxBillingPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the AuxBilling user"
        },
        {
          "name": "AuxBillingCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the AuxBilling user"
        },
        {
          "name": "AuxBillingPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AuxBillingPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the AuxBilling user"
        },
        {
          "name": "AuxBillingFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AuxBillingEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the AuxBilling user"
        },
        {
          "name": "BillingFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "First name of the Billing user"
        },
        {
          "name": "BillingLastName",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Second name of the Billing user"
        },
        {
          "name": "BillingAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address1 of the Billing user"
        },
        {
          "name": "BillingAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Billing user"
        },
        {
          "name": "BillingCity",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "City of the Billing user"
        },
        {
          "name": "BillingStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "State/Province of the Billing user "
        },
        {
          "name": "BillingStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Billing user"
        },
        {
          "name": "BillingPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PostalCode of the Billing user"
        },
        {
          "name": "BillingCountry",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Country of the Billing user"
        },
        {
          "name": "BillingPhone",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "BillingPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Billing user"
        },
        {
          "name": "BillingFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "BillingEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Email address of the Billing user"
        },
        {
          "name": " IdnCode",
          "type": "String",
          "maxLength": "100",
          "required": "No",
          "description": "Code of Internationalized Domain Name (please refer to the note below)"
        },
        {
          "name": "Extended attributes",
          "type": "String",
          "maxLength": " No ",
          "required": "Yes",
          "description": "Required for .us, .eu, .ca, .co.uk, .org.uk, .me.uk, .nu , .asia, .com.au, .net.au, .org.au, .es, .nom.es, .com.es, .org.es, .de, .fr TLDs only"
        },
        {
          "name": "Nameservers",
          "type": "String",
          "maxLength": " No ",
          "required": "No",
          "description": "Comma-separated list of custom nameservers to be associated with the domain name"
        },
        {
          "name": "AddFreeWhoisguard",
          "type": "String",
          "maxLength": "10",
          "required": "No",
          "description": "Adds free WhoisGuard for the domain Default Value: no"
        },
        {
          "name": "WGEnabled",
          "type": "String",
          "maxLength": "10",
          "required": "No",
          "description": "Enables free WhoisGuard for the domain  Default Value: no"
        },
        {
          "name": "IsPremiumDomain",
          "type": "Boolean",
          "maxLength": "10",
          "required": "No",
          "description": "Indication if the domain name is premium"
        },
        {
          "name": "PremiumPrice",
          "type": "Currency",
          "maxLength": "20",
          "required": "No",
          "description": "Registration price for the premium domain"
        },
        {
          "name": "EapFee",
          "type": "Currency",
          "maxLength": "20",
          "required": "No",
          "description": "Purchase fee for the premium domain during Early Access Program (EAP)*"
        }
      ],
      "getTldList": [
        {
          "number": "2011166",
          "description": "UserName is invalid"
        },
        {
          "number": "3050900",
          "description": "Unknown response from provider"
        }
      ],
      "setContacts": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "The domain name to register"
        },
        {
          "name": "RegistrantOrganizationName",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Organization of the Registrant user  "
        },
        {
          "name": "RegistrantJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Registrant user"
        },
        {
          "name": "RegistrantFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Registrant user"
        },
        {
          "name": "RegistrantLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the Registrant user"
        },
        {
          "name": "RegistrantAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Registrant user"
        },
        {
          "name": "RegistrantAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Registrant user"
        },
        {
          "name": "RegistrantCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Registrant user"
        },
        {
          "name": "RegistrantStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Registrant user"
        },
        {
          "name": "RegistrantStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Registrant user"
        },
        {
          "name": "RegistrantPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Registrant user"
        },
        {
          "name": "RegistrantCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Registrant user"
        },
        {
          "name": "RegistrantPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "RegistrantPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Registrant user"
        },
        {
          "name": "RegistrantFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "RegistrantEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Registrant user"
        },
        {
          "name": "TechOrganizationName",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Organization of the Tech user  "
        },
        {
          "name": "TechJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Tech user"
        },
        {
          "name": "TechFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Tech user"
        },
        {
          "name": "TechLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the Tech user"
        },
        {
          "name": "TechAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Tech user"
        },
        {
          "name": "TechAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Tech user"
        },
        {
          "name": "TechCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Tech user"
        },
        {
          "name": "TechStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Tech user "
        },
        {
          "name": "TechStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Tech user"
        },
        {
          "name": "TechPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Tech user"
        },
        {
          "name": "TechCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Tech user"
        },
        {
          "name": "TechPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "TechPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Tech user"
        },
        {
          "name": "TechFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "TechEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Tech user"
        },
        {
          "name": "AdminOrganizationName",
          "type": " String",
          "maxLength": "255",
          "required": "No",
          "description": "Organization of the Admin user  "
        },
        {
          "name": "AdminJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the Admin user"
        },
        {
          "name": "AdminFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the Admin user"
        },
        {
          "name": "AdminLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the Admin user"
        },
        {
          "name": "AdminAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the Admin user"
        },
        {
          "name": "AdminAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the Admin user"
        },
        {
          "name": "AdminCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the Admin user"
        },
        {
          "name": "AdminStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the Admin user "
        },
        {
          "name": "AdminStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the Admin user"
        },
        {
          "name": "AdminPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the Admin user"
        },
        {
          "name": "AdminCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the Admin user"
        },
        {
          "name": "AdminPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AdminPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the Admin user"
        },
        {
          "name": "AdminFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AdminEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the Admin user"
        },
        {
          "name": "AuxBillingOrganizationName",
          "type": " String",
          "maxLength": "255",
          "required": "No",
          "description": "Organization of the AuxBilling user "
        },
        {
          "name": "AuxBillingJobTitle",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Job title of the AuxBilling user"
        },
        {
          "name": "AuxBillingFirstName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "First name of the AuxBilling user"
        },
        {
          "name": "AuxBillingLastName",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Second name of the AuxBilling user"
        },
        {
          "name": "AuxBillingAddress1",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Address1 of the AuxBilling user"
        },
        {
          "name": "AuxBillingAddress2",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Address2 of the AuxBilling user"
        },
        {
          "name": "AuxBillingCity",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "City of the AuxBilling user"
        },
        {
          "name": "AuxBillingStateProvince",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "State/Province of the AuxBilling user "
        },
        {
          "name": "AuxBillingStateProvinceChoice",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "StateProvinceChoice of the AuxBilling user"
        },
        {
          "name": "AuxBillingPostalCode",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "PostalCode of the AuxBilling user"
        },
        {
          "name": "AuxBillingCountry",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Country of the AuxBilling user"
        },
        {
          "name": "AuxBillingPhone",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Phone number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AuxBillingPhoneExt",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "PhoneExt of the AuxBilling user"
        },
        {
          "name": "AuxBillingFax",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Fax number in the format +NNN.NNNNNNNNNN"
        },
        {
          "name": "AuxBillingEmailAddress",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address of the AuxBilling user"
        },
        {
          "name": "Extended attributes",
          "type": "String",
          "maxLength": " No ",
          "required": "Yes",
          "description": "Required for .us, .eu, .ca, .co.uk, .org.uk, .me.uk, .nu , .asia, .com.au, .net.au, .org.au, .es, .nom.es, .com.es, .org.es, .de, .fr TLDs only"
        }
      ],
      "check": [
        {
          "name": "DomainList",
          "type": "String",
          "maxLength": " No ",
          "required": "Yes",
          "description": "Comma-separated list of domains to check  "
        }
      ],
      "reactivate": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to reactivate"
        },
        {
          "name": "PromotionCode",
          "type": "String",
          "maxLength": "70",
          "required": "No",
          "description": "Promotional (coupon) code for reactivating the domain"
        },
        {
          "name": "YearsToAdd",
          "type": "Number",
          "maxLength": "2",
          "required": "No",
          "description": "Number of years after expiry"
        },
        {
          "name": "IsPremiumDomain",
          "type": "Boolean",
          "maxLength": "10",
          "required": "No",
          "description": "Indication if the domain name is premium"
        },
        {
          "name": "PremiumPrice",
          "type": "Currency",
          "maxLength": "20",
          "required": "No",
          "description": "Reactivation price for the premium domain"
        }
      ],
      "renew": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to renew"
        },
        {
          "name": "Years",
          "type": "Number",
          "maxLength": "2",
          "required": "Yes",
          "description": "Number of years to renew"
        },
        {
          "name": "PromotionCode",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for renewing the domain"
        },
        {
          "name": "IsPremiumDomain",
          "type": "Boolean",
          "maxLength": "10",
          "required": "No",
          "description": "Indication if the domain name is premium"
        },
        {
          "name": "PremiumPrice",
          "type": "Currency",
          "maxLength": "20",
          "required": "No",
          "description": "Renewal price for the premium domain"
        }
      ],
      "getRegistrarLock": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to get status for"
        }
      ],
      "setRegistrarLock": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to set status for"
        },
        {
          "name": "LockAction",
          "type": "String",
          "maxLength": "70",
          "required": "No",
          "description": "Possible values: LOCK, UNLOCK. Default Value: LOCK."
        }
      ],
      "getInfo": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name for which domain information needs to be requested"
        },
        {
          "name": "HostName",
          "type": "String",
          "maxLength": "255",
          "required": "No",
          "description": "Hosted domain name for which domain information needs to be requested"
        }
      ],
      "dns": {
        "setDefault": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName"
          },
          {
            "name": "TLD ",
            "type": "String",
            "maxLength": "10",
            "required": "Yes",
            "description": "TLD of the DomainName"
          }
        ],
        "setCustom": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName"
          },
          {
            "name": "TLD ",
            "type": "String",
            "maxLength": "10 ",
            "required": "Yes ",
            "description": "TLD of the DomainName"
          },
          {
            "name": "Nameservers ",
            "type": "String",
            "maxLength": "1200",
            "required": "Yes",
            "description": "A comma-separated list of name servers to be associated with this domain"
          }
        ],
        "getList": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName"
          },
          {
            "name": "TLD ",
            "type": "String",
            "maxLength": "10",
            "required": "Yes",
            "description": "TLD of the DomainName"
          }
        ],
        "getHosts": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the domain to getHosts"
          },
          {
            "name": "TLD",
            "type": "String",
            "maxLength": "10",
            "required": "Yes",
            "description": "TLD of the domain to getHosts"
          }
        ],
        "getEmailForwarding": [
          {
            "name": "DomainName",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "Domain name to get settings"
          }
        ],
        "setEmailForwarding": [
          {
            "name": "DomainName",
            "type": "String",
            "maxLength": " 70",
            "required": "Yes",
            "description": "Domain name to set settings"
          },
          {
            "name": "MailBox[1..n]",
            "type": "String",
            "maxLength": "No",
            "required": "Yes",
            "description": "MailBox for which you wish to set email forwarding. For example:example@namecheap.com"
          },
          {
            "name": "ForwardTo[1..n]",
            "type": "String",
            "maxLength": "No",
            "required": "Yes",
            "description": "Email address to forwardto.For example:example@gmail.com"
          }
        ],
        "setHosts": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70 ",
            "required": "Yes",
            "description": "SLD of the domain to setHosts  "
          },
          {
            "name": "TLD ",
            "type": "String ",
            "maxLength": "10 ",
            "required": "Yes ",
            "description": "TLD of the domain to setHosts "
          },
          {
            "name": "HostName[1..n]",
            "type": "String ",
            "maxLength": "No",
            "required": "Yes",
            "description": "Sub-domain/hostname to create the record for"
          },
          {
            "name": "RecordType[1..n]",
            "type": "String",
            "maxLength": "No",
            "required": "Yes",
            "description": "Possible values A, AAAA, CNAME, MX, MXE, TXT, URL,URL301, FRAME"
          },
          {
            "name": "Address[1..n]",
            "type": "String",
            "maxLength": "No",
            "required": "Yes",
            "description": "Possible values are URL or IP address. The value for this parameter is based on RecordType."
          },
          {
            "name": "MXPref[1..n]",
            "type": "String",
            "maxLength": "No",
            "required": "Yes",
            "description": "MX preference for host. Applicable for MX records only."
          },
          {
            "name": "EmailType ",
            "type": "String ",
            "maxLength": "No",
            "required": "No ",
            "description": "Possible values are MXE, MX, FWD, OX\n            "
          },
          {
            "name": "TTL[1..n] ",
            "type": "String ",
            "maxLength": "No",
            "required": "No ",
            "description": " Time to live for all record types.Possible values: any value between 60 to 60000 Default Value: 1800\n             "
          }
        ]
      },
      "ns": {
        "create": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName"
          },
          {
            "name": "TLD ",
            "type": "String ",
            "maxLength": "10 ",
            "required": "Yes ",
            "description": "TLD of the DomainName "
          },
          {
            "name": "Nameserver",
            "type": "String",
            "maxLength": "150",
            "required": "Yes",
            "description": "Nameserver to create"
          },
          {
            "name": "IP ",
            "type": "String ",
            "maxLength": "15 ",
            "required": "Yes ",
            "description": "Nameserver IP address "
          }
        ],
        "delete": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName"
          },
          {
            "name": "TLD ",
            "type": "String ",
            "maxLength": "10",
            "required": "Yes",
            "description": "TLD of the DomainName"
          },
          {
            "name": "Nameserver",
            "type": "String",
            "maxLength": "150",
            "required": "Yes",
            "description": "Nameserver to delete"
          }
        ],
        "getInfo": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the DomainName  "
          },
          {
            "name": "TLD ",
            "type": "String ",
            "maxLength": "10 ",
            "required": "Yes ",
            "description": "TLD of the DomainName "
          },
          {
            "name": "Nameserver",
            "type": "String",
            "maxLength": "150",
            "required": "Yes",
            "description": "Nameserver"
          }
        ],
        "update": [
          {
            "name": "SLD",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "SLD of the Domain Name"
          },
          {
            "name": "TLD",
            "type": "String",
            "maxLength": "10",
            "required": "Yes",
            "description": "TLD of the Domain Name"
          },
          {
            "name": "Nameserver",
            "type": "String",
            "maxLength": "150",
            "required": "Yes",
            "description": "Nameserver"
          },
          {
            "name": "OldIP",
            "type": "String",
            "maxLength": "15",
            "required": "Yes",
            "description": "Existing IP address"
          },
          {
            "name": "IP",
            "type": "String",
            "maxLength": "15",
            "required": "Yes",
            "description": "New IP address"
          }
        ]
      },
      "transfer": {
        "create": [
          {
            "name": "DomainName",
            "type": "String",
            "maxLength": "70",
            "required": "Yes",
            "description": "Domain name to transfer"
          },
          {
            "name": "Years",
            "type": "String",
            "maxLength": "10",
            "required": "Yes",
            "description": "Number of years to renew after a successful transfer"
          },
          {
            "name": "EPPCode",
            "type": "String",
            "maxLength": "20",
            "required": "Yes",
            "description": "The EPPCode is required for transferring .biz, .ca, .cc, .co, .com, .com.pe, .in, .info, .me, .mobi, .net, net.pe, .org, .org.pe, .pe, .tv, .us domains only."
          },
          {
            "name": "PromotionCode ",
            "type": "String ",
            "maxLength": "20",
            "required": "No ",
            "description": "Promotional (coupon) code for transfer"
          },
          {
            "name": "AddFreeWhoisguard\n            ",
            "type": "String",
            "maxLength": "3",
            "required": "No\n            ",
            "description": "Adds free Whoisguard for the domain Default Value: Yes"
          },
          {
            "name": "WGenable ",
            "type": "String",
            "maxLength": "3",
            "required": "No",
            "description": "Enables free WhoisGuard for the domain Default Value: No"
          }
        ],
        "getStatus": [
          {
            "name": "TransferID",
            "type": "Number",
            "maxLength": "10",
            "required": "Yes",
            "description": "The unique Transfer ID which you get after placing a transfer request  "
          }
        ],
        "updateStatus": [
          {
            "name": "TransferID",
            "type": "Number",
            "maxLength": "10",
            "required": "Yes",
            "description": "The unique Transfer ID which you get after placing a transfer request"
          },
          {
            "name": "Resubmit",
            "type": "String",
            "maxLength": "5",
            "required": "Yes",
            "description": "The value 'true' resubmits the transfer"
          }
        ],
        "getList": [
          {
            "name": "ListType",
            "type": "String",
            "maxLength": "10",
            "required": "No",
            "description": "Possible values are ALL,INPROGRESS, CANCELLED,COMPLETED Default Value: ALL"
          },
          {
            "name": "SearchTerm",
            "type": "String",
            "maxLength": "70",
            "required": "No",
            "description": "The keyword should be a domain name."
          },
          {
            "name": "Page",
            "type": "Number",
            "maxLength": "10",
            "required": "No",
            "description": "Page to return Default Value: 1"
          },
          {
            "name": "PageSize",
            "type": "Number",
            "maxLength": "10",
            "required": "No",
            "description": "Number of transfer to be listed on a page. Minimum value: 10; Maximum value: 100 Default Value: 10"
          },
          {
            "name": "SortBy",
            "type": "String",
            "maxLength": "50",
            "required": "No",
            "description": "Possible values are DOMAINNAME, DOMAINNAME_DESC,TRANSFERDATE, TRANSFERDATE_DESC,STATUSDATE, STATUSDATE_DESC Default Value: DOMAINNAME"
          }
        ]
      }
    },
    "ssl": {
      "activate": [
        {
          "name": "CertificateID",
          "type": "number",
          "maxLength": "10",
          "required": "Yes",
          "description": "Unique identifier of SSL certificate to be activated"
        },
        {
          "name": "CSR",
          "type": "string",
          "maxLength": "32767\n            ",
          "required": "Yes",
          "description": "Certificate Signing Request (CSR)"
        },
        {
          "name": "AdminEmailAddress",
          "type": "string",
          "maxLength": "255",
          "required": "Yes",
          "description": "Email address to send signed SSL certificate file to"
        },
        {
          "name": "WebServerType",
          "type": "string",
          "maxLength": "50",
          "required": "No",
          "description": "Server software where SSL will be installed. Defines SSL certificate file format (PEM or PKCS7). Allowed values: apacheopenssl, apachessl, apacheraven, apachessleay, apache2, apacheapachessl, tomcat, cpanel, ipswitch, plesk, weblogic, website, webstar, nginx, iis, iis4, iis5, c2net, ibmhttp, iplanet, domino, dominogo4625, dominogo4626, netscape, zeusv3, cobaltseries, ensim, hsphere, other"
        }
      ],
      "getInfo": [
        {
          "name": "CertificateID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "Unique ID of the SSL certificate"
        }
      ],
      "parseCSR": [
        {
          "name": "csr",
          "type": "String",
          "maxLength": "2000",
          "required": "Yes",
          "description": "Certificate Signing Request"
        },
        {
          "name": "CertificateType",
          "type": "String ",
          "maxLength": "50 ",
          "required": "No*",
          "description": "Type of SSL Certificate"
        }
      ],
      "getApproverEmailList": [
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain name to get the list"
        },
        {
          "name": "CertificateType",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Type of SSL certificate"
        }
      ],
      "getList": [
        {
          "name": "ListType",
          "type": "String",
          "maxLength": "50",
          "required": "No",
          "description": "Possible values are ALL,Processing,EmailSent,TechnicalProblem,InProgress, Completed,Deactivated,Active,Cancelled,NewPurchase, NewRenewal.\n             Default Value: All\n            "
        },
        {
          "name": "SearchTerm",
          "type": "String",
          "maxLength": "70",
          "required": "No",
          "description": "Keyword to look for on the SSL list  "
        },
        {
          "name": "Page",
          "type": "Number",
          "maxLength": "10",
          "required": "No",
          "description": "Page to return Default Value: 1"
        },
        {
          "name": "PageSize",
          "type": "Number",
          "maxLength": "100",
          "required": "No",
          "description": "Total number of SSL certificates to display in a page. Minimum value is 10 and maximum value is 100.  Default Value: 20"
        },
        {
          "name": "SortBy",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Possible values are PURCHASEDATE, PURCHASEDATE_DESC, SSLTYPE, SSLTYPE_DESC, EXPIREDATETIME, EXPIREDATETIME_DESC,Host_Name, Host_Name_DESC.  "
        }
      ],
      "create": [
        {
          "parameter": "Years",
          "dataType": "Number",
          "maxLength": "1",
          "required": "Yes",
          "description": "Number of years SSL will be issued for\n            Allowed values: 1,2 "
        },
        {
          "parameter": "Type",
          "dataType": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "SSL product name. See \"Possible values for Type parameter\" below this table."
        },
        {
          "parameter": "SANStoADD",
          "dataType": "Number",
          "maxLength": "2",
          "required": "No",
          "description": "Defines number of add-on domains to be purchased in addition to the default number of domains included into a multi-domain certificate.  "
        },
        {
          "parameter": "PromotionCode",
          "dataType": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for the certificate"
        }
      ],
      "renew": [
        {
          "parameter": "CertificateID",
          "dataType": "Number",
          "maxLength": "9",
          "required": "Yes",
          "description": "Unique ID of the SSL certificate you wish to renew"
        },
        {
          "parameter": "Years",
          "dataType": "Number",
          "maxLength": "1",
          "required": "Yes",
          "description": "Number of years renewal SSL will be issued for\n            Allowed values: 1,2 "
        },
        {
          "parameter": "SSLType",
          "dataType": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "SSL product name. See \"Possible values for SSLType parameter\" below this table."
        },
        {
          "parameter": "PromotionCode",
          "dataType": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for the certificate"
        }
      ],
      "resendApproverEmail": [
        {
          "name": "CertificateID",
          "type": "String",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique certificate ID that you get after calling ssl.create command"
        }
      ],
      "resendfulfillmentemail": [
        {
          "name": "CertificateID",
          "type": "String",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique certificate ID that you get after calling ssl.create command"
        }
      ],
      "reissue": [
        {
          "name": "CertificateID",
          "type": "number",
          "maxLength": "10",
          "required": "Yes",
          "description": "Unique identifier of SSL certificate to be reissued"
        },
        {
          "name": "CSR",
          "type": "string",
          "maxLength": "32767\n            ",
          "required": "Yes",
          "description": "Certificate Signing Request (CSR)"
        },
        {
          "name": "AdminEmailAddress",
          "type": "string",
          "maxLength": "255",
          "required": "No",
          "description": "Email address to send signed SSL certificate file to. It is not possible to change AdminEmailAddress in reissue due to limitation from Certificate Authority. SSL file will be sent to AdminEmailAddress used in the initial activate call."
        },
        {
          "name": "WebServerType",
          "type": "string",
          "maxLength": "50",
          "required": "No",
          "description": "Server software where SSL will be installed. Defines SSL certificate file format (PEM or PKCS7). Allowed values: apacheopenssl, apachessl, apacheraven, apachessleay, apache2, apacheapachessl, tomcat, cpanel, ipswitch, plesk, weblogic, website, webstar, nginx, iis, iis4, iis5, c2net, ibmhttp, iplanet, domino, dominogo4625, dominogo4626, netscape, zeusv3, cobaltseries, ensim, hsphere, other"
        }
      ],
      "purchasemoresans": [
        {
          "name": "CertificateID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "ID of the certificate for which you wish to purchase more add-on domains"
        },
        {
          "name": "NumberOfSANSToAdd",
          "type": "Number",
          "maxLength": "2",
          "required": "Yes",
          "description": "Number of add-on domains to be ordered"
        }
      ],
      "revokecertificate": [
        {
          "name": "CertificateID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "ID of the certificate for you wish to revoke Default Value: 1"
        },
        {
          "name": "CertificateType",
          "type": "String",
          "maxLength": "50",
          "required": "Yes",
          "description": "Type of SSL Certificate"
        }
      ],
      "editDCVMethod": [
        {
          "name": "CertificateID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "Unique ID of the SSL certificate to set new DCV method for"
        },
        {
          "name": "DCVMethod*",
          "type": "String",
          "maxLength": "255",
          "required": "Yes",
          "description": "DCV method to validate domain control with"
        },
        {
          "name": "DNSNames**",
          "type": "String",
          "maxLength": "3500",
          "required": "Yes",
          "description": "Comma-separated list of domain names to set new DCV method for"
        },
        {
          "name": " DCVMethods**",
          "type": " String",
          "maxLength": "3500",
          "required": "Yes",
          "description": "Comma-separated list of DCV methods to validate domain control with"
        }
      ]
    },
    "users": {
      "getPricing": [
        {
          "name": "ProductType",
          "type": "String",
          "maxLength": "20",
          "required": "Yes",
          "description": "Product Type to get pricing information "
        },
        {
          "name": "ProductCategory ",
          "type": "String",
          "maxLength": "20",
          "required": "No ",
          "description": " Specific category within a product type"
        },
        {
          "name": "PromotionCode ",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for the user "
        },
        {
          "name": "ActionName ",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "Specific action within a product type"
        },
        {
          "name": "ProductName ",
          "type": "String",
          "maxLength": "20",
          "required": "No",
          "description": "The name of the product within a product type"
        }
      ],
      "getBalances": [
        {
          "number": "4022312",
          "description": "Balance information is not available"
        }
      ],
      "changePassword": [
        {
          "name": " OldPassword ",
          "type": " String ",
          "maxLength": " 20 ",
          "required": " Yes ",
          "description": " Old password of the user  "
        },
        {
          "name": "NewPassword ",
          "type": "String",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "New password of the user  "
        }
      ],
      "update": [
        {
          "name": "FirstName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "First name of the user"
        },
        {
          "name": "LastName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Last name of the user"
        },
        {
          "name": "JobTitle ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "Job designation of the user "
        },
        {
          "name": "Organization ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "Organization of the user "
        },
        {
          "name": "Address1 ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "StreetAddress1 of the user"
        },
        {
          "name": "Address2 ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "StreetAddress2 of the user "
        },
        {
          "name": "City ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "City  of the user"
        },
        {
          "name": "StateProvince",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "State/Province of the user"
        },
        {
          "name": "Zip",
          "type": "String ",
          "maxLength": "15 ",
          "required": "Yes ",
          "description": "Zip/Postal code of the user"
        },
        {
          "name": "Country",
          "type": "String ",
          "maxLength": "2 ",
          "required": "Yes ",
          "description": "Two letter country code of the user"
        },
        {
          "name": "EmailAddress ",
          "type": "String ",
          "maxLength": "255 ",
          "required": "Yes ",
          "description": "Email address of the user "
        },
        {
          "name": "Phone",
          "type": "String ",
          "maxLength": "20",
          "required": "Yes ",
          "description": "Phone number in the format +NNN.NNNNNNNNNN "
        },
        {
          "name": "PhoneExt ",
          "type": "String ",
          "maxLength": "10 ",
          "required": "No ",
          "description": "PhoneExt of the user  "
        },
        {
          "name": "Fax ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "No ",
          "description": "Fax number in the format +NNN.NNNNNNNNNN "
        }
      ],
      "createaddfundsrequest": [
        {
          "name": "Username ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "Username to add funds to  "
        },
        {
          "name": "PaymentType ",
          "type": "String ",
          "maxLength": "30 ",
          "required": "Yes ",
          "description": "Allowed payment value: Creditcard  "
        },
        {
          "name": "Amount ",
          "type": "Number ",
          "maxLength": "10 ",
          "required": "Yes ",
          "description": "Amount to add  "
        },
        {
          "name": "ReturnUrl",
          "type": "String ",
          "maxLength": "300 ",
          "required": "Yes ",
          "description": "A valid URL to which the user should be redirected once payment is complete"
        }
      ],
      "getAddFundsStatus": [
        {
          "name": "TokenId ",
          "type": "String ",
          "maxLength": "100 ",
          "required": "Yes ",
          "description": "The Unique ID that you received after calling\n            namecheap.users.createaddfundsrequest method  "
        }
      ],
      "create": [
        {
          "name": "NewUserName",
          "type": "String",
          "maxLength": "20",
          "required": "Yes",
          "description": "Username for the new user account"
        },
        {
          "name": "NewUserPassword",
          "type": "String ",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "Password for the new user account "
        },
        {
          "name": "EmailAddress",
          "type": "String ",
          "maxLength": "128 ",
          "required": "Yes ",
          "description": "Email address of the user"
        },
        {
          "name": "IgnoreDuplicateEmailAddress",
          "type": "String ",
          "maxLength": "10 ",
          "required": "No ",
          "description": "By default, it ignores to check if the email address is already in use.  Default Value:  Yes"
        },
        {
          "name": "FirstName ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "First name of the user"
        },
        {
          "name": "LastName",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "Last name of the user"
        },
        {
          "name": "AcceptTerms",
          "type": "Number",
          "maxLength": "1",
          "required": "Yes",
          "description": "Terms of agreement. The Value should be 1 for user account creation.  Default Value:  1"
        },
        {
          "name": "AcceptNews",
          "type": "Number",
          "maxLength": "1",
          "required": "No",
          "description": "Possible values are 0 and 1. Value should be 1 if the user wants to recieve newsletters else it should be 0. "
        },
        {
          "name": "JobTitle ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "Job designation of the user "
        },
        {
          "name": "Organization ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "Organization of the user "
        },
        {
          "name": "Address1 ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "StreetAddress1 of the user "
        },
        {
          "name": "Address2 ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "No ",
          "description": "StreetAddress2 of the user "
        },
        {
          "name": "City ",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "City  of the user "
        },
        {
          "name": "StateProvince",
          "type": "String ",
          "maxLength": "60 ",
          "required": "Yes ",
          "description": "State/Province of the user "
        },
        {
          "name": "Zip",
          "type": "String ",
          "maxLength": "15 ",
          "required": "Yes ",
          "description": "Zip/Postal code of the user "
        },
        {
          "name": "Country",
          "type": "String ",
          "maxLength": "2 ",
          "required": "Yes ",
          "description": "Two letter country code of the user"
        },
        {
          "name": "Phone",
          "type": "String ",
          "maxLength": "20",
          "required": "Yes ",
          "description": "Phone number in the format +NNN.NNNNNNNNNN "
        },
        {
          "name": "PhoneExt ",
          "type": "String ",
          "maxLength": "10 ",
          "required": "No ",
          "description": "PhoneExt of the user  "
        },
        {
          "name": "Fax ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "No ",
          "description": "Fax number in the format +NNN.NNNNNNNNNN "
        }
      ],
      "login": [
        {
          "name": "Password ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "Password of the user account  "
        }
      ],
      "resetPassword": [
        {
          "name": "FindBy ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "Possible values:EMAILADDRESS,\n            DOMAINNAME,USERNAME"
        },
        {
          "name": "FindByValue ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "Yes ",
          "description": "The username/email address/domain of the user"
        },
        {
          "name": "EmailFromName ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "No ",
          "description": "Enter a different value to overwrite the default value  Default Value:  namecheap.com "
        },
        {
          "name": "EmailFrom ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "No ",
          "description": "Enter a different value to overwrite the default value  Default Value:  support@namecheap.com "
        },
        {
          "name": "URLPattern ",
          "type": "String ",
          "maxLength": "20 ",
          "required": "No ",
          "description": "Enter a different URL to overwrite namecheap.com. Refer Example\n            Request#2  Default Value:  http://namecheap.com\n            [RESETCODE] "
        }
      ],
      "address": {
        "create": [
          {
            "name": "AddressName",
            "type": "String",
            "maxLength": "20",
            "required": "Yes",
            "description": "Address name to create"
          },
          {
            "name": "DefaultYN",
            "type": "Number ",
            "maxLength": "128 ",
            "required": "No ",
            "description": "Possible values are 0 and 1.If the value of this parameter is set to 1, the address is set as default address for the user. "
          },
          {
            "name": "EmailAddress ",
            "type": "String ",
            "maxLength": "128 ",
            "required": "Yes ",
            "description": "Email address of the user "
          },
          {
            "name": "FirstName ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "First name of the user  "
          },
          {
            "name": "LastName",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "Last name of the user  "
          },
          {
            "name": "JobTitle ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "Job designation of the user "
          },
          {
            "name": "Organization ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "Organization of the user "
          },
          {
            "name": "Address1 ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "StreetAddress1 of the user  "
          },
          {
            "name": "Address2 ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "StreetAddress2 of the user "
          },
          {
            "name": "City ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "City  of the user  "
          },
          {
            "name": "StateProvince",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "State/Province of the user  "
          },
          {
            "name": "StateProvinceChoice",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "State/Province choice of the user  "
          },
          {
            "name": "Zip",
            "type": "String ",
            "maxLength": "15 ",
            "required": "Yes ",
            "description": "Zip/Postal code of the user  "
          },
          {
            "name": "Country",
            "type": "String ",
            "maxLength": "2 ",
            "required": "Yes ",
            "description": "Two letter country code of the user"
          },
          {
            "name": "Phone",
            "type": "String ",
            "maxLength": "20",
            "required": "Yes ",
            "description": "Phone number in the format +NNN.NNNNNNNNNN "
          },
          {
            "name": "PhoneExt ",
            "type": "String ",
            "maxLength": "10 ",
            "required": "No ",
            "description": "PhoneExt of the user  "
          },
          {
            "name": "Fax ",
            "type": "String ",
            "maxLength": "20 ",
            "required": "No ",
            "description": "Fax number in the format +NNN.NNNNNNNNNN "
          }
        ],
        "delete": [
          {
            "name": "AddressId",
            "type": "Number",
            "maxLength": "20",
            "required": "Yes",
            "description": "The unique AddressID to delete"
          }
        ],
        "getInfo": [
          {
            "name": "AddressId",
            "type": "Number",
            "maxLength": "20",
            "required": "Yes",
            "description": "The unique AddressID"
          }
        ],
        "getList": [
          {
            "number": "4011331 ",
            "description": "StatusCode for update is invalid"
          }
        ],
        "setDefault": [
          {
            "name": "AddressId",
            "type": "Number ",
            "maxLength": "20 ",
            "required": "Yes",
            "description": "The unique addressID to set default  "
          }
        ],
        "update": [
          {
            "name": "AddressId",
            "type": "Number",
            "maxLength": "20",
            "required": "Yes",
            "description": "The unique address ID to update"
          },
          {
            "name": "AddressName  ",
            "type": "String ",
            "maxLength": "20 ",
            "required": "Yes ",
            "description": "The AddressName to update  "
          },
          {
            "name": "DefaultYN",
            "type": "Number ",
            "maxLength": "128 ",
            "required": "No ",
            "description": "Possible values are 0 and 1. If the value of this parameter is set to 1, the updated address is also set as default address for the user.  "
          },
          {
            "name": "EmailAddress ",
            "type": "String ",
            "maxLength": "128 ",
            "required": "Yes ",
            "description": "Email address of the user "
          },
          {
            "name": "FirstName ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "First name of the user  "
          },
          {
            "name": "LastName",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "Last name of the user  "
          },
          {
            "name": "JobTitle ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "Job designation of the user "
          },
          {
            "name": "Organization ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "Organization of the user "
          },
          {
            "name": "Address1 ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "StreetAddress1 of the user  "
          },
          {
            "name": "Address2 ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "No ",
            "description": "StreetAddress2 of the user "
          },
          {
            "name": "City ",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "City  of the user  "
          },
          {
            "name": "StateProvince",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "State/Province of the user  "
          },
          {
            "name": "StateProvinceChoice",
            "type": "String ",
            "maxLength": "60 ",
            "required": "Yes ",
            "description": "State/Province choice of the user  "
          },
          {
            "name": "Zip",
            "type": "String ",
            "maxLength": "15 ",
            "required": "Yes ",
            "description": "Zip/Postal code of the user  "
          },
          {
            "name": "Country",
            "type": "String ",
            "maxLength": "2 ",
            "required": "Yes ",
            "description": "Two letter country code of the user"
          },
          {
            "name": "Phone",
            "type": "String ",
            "maxLength": "20",
            "required": "Yes ",
            "description": "Phone number in the format +NNN.NNNNNNNNNN "
          },
          {
            "name": "PhoneExt ",
            "type": "String ",
            "maxLength": "10 ",
            "required": "No ",
            "description": "PhoneExt of the user  "
          },
          {
            "name": "Fax ",
            "type": "String ",
            "maxLength": "20 ",
            "required": "No ",
            "description": "Fax number in the format +NNN.NNNNNNNNNN "
          }
        ]
      }
    },
    "whoisguard": {
      "changeemailaddress": [
        {
          "name": "WhoisguardID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique WhoisGuardID that you wish to change"
        }
      ],
      "enable": [
        {
          "name": "WhoisguardID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique WhoisGuardID which you get"
        },
        {
          "name": "ForwardedToEmail",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "The email address to which WhoisGuard emails are to be forwarded"
        }
      ],
      "disable": [
        {
          "name": "WhoisguardID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique WhoisGuardID which has to be disabled."
        }
      ],
      "unallot": [
        {
          "name": "WhoisguardID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique WhoisGuardID that has to be unalloted."
        }
      ],
      "discard": [
        {
          "name": "WhoisguardID",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The WhoisGuardID you wish to discard"
        }
      ],
      "allot": [
        {
          "name": "WhoisguardId",
          "type": "Number",
          "maxLength": "10",
          "required": "Yes",
          "description": "The unique WhoisGuardID"
        },
        {
          "name": "DomainName",
          "type": "String",
          "maxLength": "70",
          "required": "Yes",
          "description": "Domain that you wish to allot WhoisGuard to"
        },
        {
          "name": "ForwardedToEmail",
          "type": "String",
          "maxLength": "70",
          "required": "No",
          "description": "The email to which you wish to forward your WhoisGuard emails"
        },
        {
          "name": "EnableWG",
          "type": "String",
          "maxLength": "5",
          "required": "No",
          "description": "Possible Values: True and False Default Value:False"
        }
      ],
      "getList": [
        {
          "name": "ListType",
          "type": "String",
          "maxLength": "10",
          "required": "No",
          "description": "Possible values are ALL, ALLOTED, FREE, DISCARD. Default Value: ALL"
        },
        {
          "name": "Page",
          "type": "Number",
          "maxLength": "10",
          "required": "No",
          "description": "Page to return Default Value: 1 "
        },
        {
          "name": "PageSize ",
          "type": "Number",
          "maxLength": "20",
          "required": "No",
          "description": "Number of WhoisGuard to be listed on a page. Minimum value: 2; Maximum value: 100"
        }
      ],
      "renew": [
        {
          "name": "WhoisguardID",
          "type": "String",
          "maxLength": "10",
          "required": "No",
          "description": "WhoisGuardID to renew"
        },
        {
          "name": "Years",
          "type": "Number",
          "maxLength": "9",
          "required": "No",
          "description": "Number of years to renew Default Value: 1 "
        },
        {
          "name": "PromotionCode ",
          "type": "Number",
          "maxLength": "20",
          "required": "No",
          "description": "Promotional (coupon) code for renewing the WhoisGuard"
        }
      ]
    }
  }
}