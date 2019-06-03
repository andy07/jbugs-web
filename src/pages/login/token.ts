export interface Token {
  token: string;
}
export interface infoTokenDecoded {
  sub: string;
  roles: string[];
  permissions: string[];
}


function initializeInfoToken(tokenEncoded:string ) {
  const x = tokenEncoded.split('.');
  // decodific din baza 64 (atob)
  return  JSON.parse(atob(x[1]));


}
