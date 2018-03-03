# namecheap-request 

### domains().getList()
#### Parameters
- **ListType** (optional) - String
- **SearchTerm** (optional) - String
- **Page** (optional) - Number
- **PageSize** (optional) - Number
- **SortBy** (optional) - String

### domains().getContacts()
#### Parameters
- **DomainName** (required) - String

### domains().create()
#### Parameters
- **DomainName** (required) - String
- **Years** (required) - Number
- **PromotionCode** (optional) - String
- **RegistrantOrganizationName** (optional) - String
- **RegistrantJobTitle** (optional) - String
- **RegistrantFirstName** (required) - String
- **RegistrantLastName** (required) - String
- **RegistrantAddress1** (required) - String
- **RegistrantAddress2** (optional) - String
- **RegistrantCity** (required) - String
- **RegistrantStateProvince** (required) - String
- **RegistrantStateProvinceChoice** (optional) - String
- **RegistrantPostalCode** (required) - String
- **RegistrantCountry** (required) - String
- **RegistrantPhone** (required) - String
- **RegistrantPhoneExt** (optional) - String
- **RegistrantFax** (optional) - String
- **RegistrantEmailAddress** (required) - String
- **TechOrganizationName** (optional) - String
- **TechJobTitle** (optional) - String
- **TechFirstName** (required) - String
- **TechLastName** (required) - String
- **TechAddress1** (required) - String
- **TechAddress2** (optional) - String
- **TechCity** (required) - String
- **TechStateProvince** (required) - String
- **TechStateProvinceChoice** (optional) - String
- **TechPostalCode** (required) - String
- **TechCountry** (required) - String
- **TechPhone** (required) - String
- **TechPhoneExt** (optional) - String
- **TechFax** (optional) - String
- **TechEmailAddress** (required) - String
- **AdminOrganizationName** (optional) - String
- **AdminJobTitle** (optional) - String
- **AdminFirstName** (required) - String
- **AdminLastName** (required) - String
- **AdminAddress1** (required) - String
- **AdminAddress2** (optional) - String
- **AdminCity** (required) - String
- **AdminStateProvince** (required) - String
- **AdminStateProvinceChoice** (optional) - String
- **AdminPostalCode** (required) - String
- **AdminCountry** (required) - String
- **AdminPhone** (required) - String
- **AdminPhoneExt** (optional) - String
- **AdminFax** (optional) - String
- **AdminEmailAddress** (required) - String
- **AuxBillingOrganizationName** (optional) - String
- **AuxBillingJobTitle** (optional) - String
- **AuxBillingFirstName** (required) - String
- **AuxBillingLastName** (required) - String
- **AuxBillingAddress1** (required) - String
- **AuxBillingAddress2** (optional) - String
- **AuxBillingCity** (required) - String
- **AuxBillingStateProvince** (required) - String
- **AuxBillingStateProvinceChoice** (optional) - String
- **AuxBillingPostalCode** (required) - String
- **AuxBillingCountry** (required) - String
- **AuxBillingPhone** (required) - String
- **AuxBillingPhoneExt** (optional) - String
- **AuxBillingFax** (optional) - String
- **AuxBillingEmailAddress** (required) - String
- **BillingFirstName** (optional) - String
- **BillingLastName** (optional) - String
- **BillingAddress1** (optional) - String
- **BillingAddress2** (optional) - String
- **BillingCity** (optional) - String
- **BillingStateProvince** (optional) - String
- **BillingStateProvinceChoice** (optional) - String
- **BillingPostalCode** (optional) - String
- **BillingCountry** (optional) - String
- **BillingPhone** (optional) - String
- **BillingPhoneExt** (optional) - String
- **BillingFax** (optional) - String
- **BillingEmailAddress** (optional) - String
- **IdnCode** (optional) - String
- **Extended attributes** (required) - String
- **Nameservers** (optional) - String
- **AddFreeWhoisguard** (optional) - String
- **WGEnabled** (optional) - String
- **IsPremiumDomain** (optional) - Boolean
- **PremiumPrice** (optional) - Currency
- **EapFee** (optional) - Currency

### domains().getTldList()
#### Parameters
- **** (optional) - 
- **** (optional) - 

### domains().setContacts()
#### Parameters
- **DomainName** (required) - String
- **RegistrantOrganizationName** (optional) - String
- **RegistrantJobTitle** (optional) - String
- **RegistrantFirstName** (required) - String
- **RegistrantLastName** (required) - String
- **RegistrantAddress1** (required) - String
- **RegistrantAddress2** (optional) - String
- **RegistrantCity** (required) - String
- **RegistrantStateProvince** (required) - String
- **RegistrantStateProvinceChoice** (optional) - String
- **RegistrantPostalCode** (required) - String
- **RegistrantCountry** (required) - String
- **RegistrantPhone** (required) - String
- **RegistrantPhoneExt** (optional) - String
- **RegistrantFax** (optional) - String
- **RegistrantEmailAddress** (required) - String
- **TechOrganizationName** (optional) - String
- **TechJobTitle** (optional) - String
- **TechFirstName** (required) - String
- **TechLastName** (required) - String
- **TechAddress1** (required) - String
- **TechAddress2** (optional) - String
- **TechCity** (required) - String
- **TechStateProvince** (required) - String
- **TechStateProvinceChoice** (optional) - String
- **TechPostalCode** (required) - String
- **TechCountry** (required) - String
- **TechPhone** (required) - String
- **TechPhoneExt** (optional) - String
- **TechFax** (optional) - String
- **TechEmailAddress** (required) - String
- **AdminOrganizationName** (optional) - String
- **AdminJobTitle** (optional) - String
- **AdminFirstName** (required) - String
- **AdminLastName** (required) - String
- **AdminAddress1** (required) - String
- **AdminAddress2** (optional) - String
- **AdminCity** (required) - String
- **AdminStateProvince** (required) - String
- **AdminStateProvinceChoice** (optional) - String
- **AdminPostalCode** (required) - String
- **AdminCountry** (required) - String
- **AdminPhone** (required) - String
- **AdminPhoneExt** (optional) - String
- **AdminFax** (optional) - String
- **AdminEmailAddress** (required) - String
- **AuxBillingOrganizationName** (optional) - String
- **AuxBillingJobTitle** (optional) - String
- **AuxBillingFirstName** (required) - String
- **AuxBillingLastName** (required) - String
- **AuxBillingAddress1** (required) - String
- **AuxBillingAddress2** (optional) - String
- **AuxBillingCity** (required) - String
- **AuxBillingStateProvince** (required) - String
- **AuxBillingStateProvinceChoice** (optional) - String
- **AuxBillingPostalCode** (required) - String
- **AuxBillingCountry** (required) - String
- **AuxBillingPhone** (required) - String
- **AuxBillingPhoneExt** (optional) - String
- **AuxBillingFax** (optional) - String
- **AuxBillingEmailAddress** (required) - String
- **Extended attributes** (required) - String

### domains().check()
#### Parameters
- **DomainList** (required) - String

### domains().reactivate()
#### Parameters
- **DomainName** (required) - String
- **PromotionCode** (optional) - String
- **YearsToAdd** (optional) - Number
- **IsPremiumDomain** (optional) - Boolean
- **PremiumPrice** (optional) - Currency

### domains().renew()
#### Parameters
- **DomainName** (required) - String
- **Years** (required) - Number
- **PromotionCode** (optional) - String
- **IsPremiumDomain** (optional) - Boolean
- **PremiumPrice** (optional) - Currency

### domains().getRegistrarLock()
#### Parameters
- **DomainName** (required) - String

### domains().setRegistrarLock()
#### Parameters
- **DomainName** (required) - String
- **LockAction** (optional) - String

### domains().getInfo()
#### Parameters
- **DomainName** (required) - String
- **HostName** (optional) - String

### domains().dns().setDefault()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String

### domains().dns().setCustom()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **Nameservers** (required) - String

### domains().dns().getList()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String

### domains().dns().getHosts()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String

### domains().dns().getEmailForwarding()
#### Parameters
- **DomainName** (required) - String

### domains().dns().setEmailForwarding()
#### Parameters
- **DomainName** (required) - String
- **MailBox[1..n]** (required) - String
- **ForwardTo[1..n]** (required) - String

### domains().dns().setHosts()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **HostName[1..n]** (required) - String
- **RecordType[1..n]** (required) - String
- **Address[1..n]** (required) - String
- **MXPref[1..n]** (required) - String
- **EmailType** (optional) - String
- **TTL[1..n]** (optional) - String

### domains().ns().create()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **Nameserver** (required) - String
- **IP** (required) - String

### domains().ns().delete()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **Nameserver** (required) - String

### domains().ns().getInfo()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **Nameserver** (required) - String

### domains().ns().update()
#### Parameters
- **SLD** (required) - String
- **TLD** (required) - String
- **Nameserver** (required) - String
- **OldIP** (required) - String
- **IP** (required) - String

### domains().transfer().create()
#### Parameters
- **DomainName** (required) - String
- **Years** (required) - String
- **EPPCode** (required) - String
- **PromotionCode** (optional) - String
- **AddFreeWhoisguard** (optional) - String
- **WGenable** (optional) - String

### domains().transfer().getStatus()
#### Parameters
- **TransferID** (required) - Number

### domains().transfer().updateStatus()
#### Parameters
- **TransferID** (required) - Number
- **Resubmit** (required) - String

### domains().transfer().getList()
#### Parameters
- **ListType** (optional) - String
- **SearchTerm** (optional) - String
- **Page** (optional) - Number
- **PageSize** (optional) - Number
- **SortBy** (optional) - String

### ssl().activate()
#### Parameters
- **CertificateID** (required) - number
- **CSR** (required) - string
- **AdminEmailAddress** (required) - string
- **WebServerType** (optional) - string

### ssl().getInfo()
#### Parameters
- **CertificateID** (required) - Number

### ssl().parseCSR()
#### Parameters
- **csr** (required) - String
- **CertificateType** (optional) - String

### ssl().getApproverEmailList()
#### Parameters
- **DomainName** (required) - String
- **CertificateType** (required) - String

### ssl().getList()
#### Parameters
- **ListType** (optional) - String
- **SearchTerm** (optional) - String
- **Page** (optional) - Number
- **PageSize** (optional) - Number
- **SortBy** (optional) - String

### ssl().create()
#### Parameters
- **Years** (required) - 
- **Type** (required) - 
- **SANStoADD** (optional) - 
- **PromotionCode** (optional) - 

### ssl().renew()
#### Parameters
- **CertificateID** (required) - 
- **Years** (required) - 
- **SSLType** (required) - 
- **PromotionCode** (optional) - 

### ssl().resendApproverEmail()
#### Parameters
- **CertificateID** (required) - String

### ssl().resendfulfillmentemail()
#### Parameters
- **CertificateID** (required) - String

### ssl().reissue()
#### Parameters
- **CertificateID** (required) - number
- **CSR** (required) - string
- **AdminEmailAddress** (optional) - string
- **WebServerType** (optional) - string

### ssl().purchasemoresans()
#### Parameters
- **CertificateID** (required) - Number
- **NumberOfSANSToAdd** (required) - Number

### ssl().revokecertificate()
#### Parameters
- **CertificateID** (required) - Number
- **CertificateType** (required) - String

### ssl().editDCVMethod()
#### Parameters
- **CertificateID** (required) - Number
- **DCVMethod*** (required) - String
- **DNSNames**** (required) - String
- **DCVMethods**** (required) - String

### users().getPricing()
#### Parameters
- **ProductType** (required) - String
- **ProductCategory** (optional) - String
- **PromotionCode** (optional) - String
- **ActionName** (optional) - String
- **ProductName** (optional) - String

### users().getBalances()
#### Parameters
- **** (optional) - 

### users().changePassword()
#### Parameters
- **OldPassword** (required) - String
- **NewPassword** (required) - String

### users().update()
#### Parameters
- **FirstName** (required) - String
- **LastName** (required) - String
- **JobTitle** (optional) - String
- **Organization** (optional) - String
- **Address1** (required) - String
- **Address2** (optional) - String
- **City** (required) - String
- **StateProvince** (required) - String
- **Zip** (required) - String
- **Country** (required) - String
- **EmailAddress** (required) - String
- **Phone** (required) - String
- **PhoneExt** (optional) - String
- **Fax** (optional) - String

### users().createaddfundsrequest()
#### Parameters
- **Username** (required) - String
- **PaymentType** (required) - String
- **Amount** (required) - Number
- **ReturnUrl** (required) - String

### users().getAddFundsStatus()
#### Parameters
- **TokenId** (required) - String

### users().create()
#### Parameters
- **NewUserName** (required) - String
- **NewUserPassword** (required) - String
- **EmailAddress** (required) - String
- **IgnoreDuplicateEmailAddress** (optional) - String
- **FirstName** (required) - String
- **LastName** (required) - String
- **AcceptTerms** (required) - Number
- **AcceptNews** (optional) - Number
- **JobTitle** (optional) - String
- **Organization** (optional) - String
- **Address1** (required) - String
- **Address2** (optional) - String
- **City** (required) - String
- **StateProvince** (required) - String
- **Zip** (required) - String
- **Country** (required) - String
- **Phone** (required) - String
- **PhoneExt** (optional) - String
- **Fax** (optional) - String

### users().login()
#### Parameters
- **Password** (required) - String

### users().resetPassword()
#### Parameters
- **FindBy** (required) - String
- **FindByValue** (required) - String
- **EmailFromName** (optional) - String
- **EmailFrom** (optional) - String
- **URLPattern** (optional) - String

### users().address().create()
#### Parameters
- **AddressName** (required) - String
- **DefaultYN** (optional) - Number
- **EmailAddress** (required) - String
- **FirstName** (required) - String
- **LastName** (required) - String
- **JobTitle** (optional) - String
- **Organization** (optional) - String
- **Address1** (required) - String
- **Address2** (optional) - String
- **City** (required) - String
- **StateProvince** (required) - String
- **StateProvinceChoice** (required) - String
- **Zip** (required) - String
- **Country** (required) - String
- **Phone** (required) - String
- **PhoneExt** (optional) - String
- **Fax** (optional) - String

### users().address().delete()
#### Parameters
- **AddressId** (required) - Number

### users().address().getInfo()
#### Parameters
- **AddressId** (required) - Number

### users().address().getList()
#### Parameters
- **** (optional) - 

### users().address().setDefault()
#### Parameters
- **AddressId** (required) - Number

### users().address().update()
#### Parameters
- **AddressId** (required) - Number
- **AddressName** (required) - String
- **DefaultYN** (optional) - Number
- **EmailAddress** (required) - String
- **FirstName** (required) - String
- **LastName** (required) - String
- **JobTitle** (optional) - String
- **Organization** (optional) - String
- **Address1** (required) - String
- **Address2** (optional) - String
- **City** (required) - String
- **StateProvince** (required) - String
- **StateProvinceChoice** (required) - String
- **Zip** (required) - String
- **Country** (required) - String
- **Phone** (required) - String
- **PhoneExt** (optional) - String
- **Fax** (optional) - String

### whoisguard().changeemailaddress()
#### Parameters
- **WhoisguardID** (required) - Number

### whoisguard().enable()
#### Parameters
- **WhoisguardID** (required) - Number
- **ForwardedToEmail** (required) - String

### whoisguard().disable()
#### Parameters
- **WhoisguardID** (required) - Number

### whoisguard().unallot()
#### Parameters
- **WhoisguardID** (required) - Number

### whoisguard().discard()
#### Parameters
- **WhoisguardID** (required) - Number

### whoisguard().allot()
#### Parameters
- **WhoisguardId** (required) - Number
- **DomainName** (required) - String
- **ForwardedToEmail** (optional) - String
- **EnableWG** (optional) - String

### whoisguard().getList()
#### Parameters
- **ListType** (optional) - String
- **Page** (optional) - Number
- **PageSize** (optional) - Number

### whoisguard().renew()
#### Parameters
- **WhoisguardID** (optional) - String
- **Years** (optional) - Number
- **PromotionCode** (optional) - Number
