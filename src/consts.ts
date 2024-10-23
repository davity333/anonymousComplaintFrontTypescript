import { HexString } from '@gear-js/api';

interface ContractSails {
  programId: HexString,
  idl: string
}

export const ACCOUNT_ID_LOCAL_STORAGE_KEY = 'account';

export const ADDRESS = {
  NODE: 'wss://testnet.vara.network', 
};

export const ROUTES = {
  HOME: '/',
  EXAMPLES: '/examples',
  NOTFOUND: '*',
};

// To use the example code, enter the details of the account that will pay the vouchers, etc. (name and mnemonic)
export const sponsorName = "Alice";
export const sponsorMnemonic = "bottom drive obey lake curtain smoke basket hold race lonely fit walk";

export const CONTRACT_DATA: ContractSails = {
  programId: '0x51d318a0578f914109a69c33d9efd3e75bab32d7cab284d95ad6464462f4216e',
  idl: `
    type Enterprise = struct {
        name: str,
        code_post: str,
        location: str,
        hour: str,
        name_owner: str,
    };

    type PersonReport = struct {
        firstname_denuncied: str,
        lastname_denuncied: str,
        img_denuncied: str,
        description_denuncied: str,
        age_denuncied: u128,
    };

    type IoReportDataMent = struct {
        person_report: PersonReport,
        report_id: str,
        details: str,
        is_public: bool,
        description: str,
    };

    // type SignlessEvent = enum {
    //   NoWalletAccountSet,
    //   Error: KeyringError,
    // };

    
    constructor {
        New : ();
        };
        
        service EnterpriseService {
            CreateEnterprise : (name: str, code_post: str, location: str, hour: str, name_owner: str) -> Enterprise;
            query GetAllEnterprises : () -> vec Enterprise;
        };

    // service Signless {
    //   BindKeyringDataToUserCodedName : (no_wallet_account: str, keyring_data: KeyringData) -> SignlessEvent;
    // };

    service ReportService {
        CreatedReport : (person_report: PersonReport, report_id: str, details: str, is_public: bool, description: str) -> IoReportDataMent;
        query GetAllReports : () -> vec IoReportDataMent;
    };
  `
};