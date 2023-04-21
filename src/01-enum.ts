export enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  CUSTOMER = "customer",
 }

export type User = {
  username: string;
  role: ROLES;
}

const oswaUser: User = {
  username: "oswabytes",
  role: ROLES.ADMIN
}


