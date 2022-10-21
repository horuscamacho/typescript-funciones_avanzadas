enum ROLES {
  ADMIN = "admin",
  SELLER = "seller",
  COSTUMER = "costumer"
}


type User = {
  username: string,
  role: ROLES;
}
const nicoUser: User = {
  username: 'horusbytes',
  role: ROLES.ADMIN
}

