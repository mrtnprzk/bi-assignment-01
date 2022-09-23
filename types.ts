export interface User {
    id: number; // The user's id
    name: string;
    username: string;
    email: string;
    address: {
      street: string; // Address line 1
      suite: string; // Address line 2
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string; // The name of company where the user works
      catchPhrase: string;
      bs: string;
    };
  }