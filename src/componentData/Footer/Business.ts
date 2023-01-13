import { goToMerchantPath, MerchantAppPath } from "@shared/libs/helpers";

export const Business = [
  {
    id: 1,
    name: "Become a Merchant",
    route: goToMerchantPath(MerchantAppPath.CREATE_ACCT),
  },
  {
    id: 2,
    name: "Become an API Partner",
    route: "#",
  },
  {
    id: 3,
    name: "Join Us",
    route: "/auth/create-account",
  },
];
