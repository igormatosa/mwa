export class Login {
    message?: string;
    data?: LoginData[]; 
    status?: boolean;
}

export class LoginData {
    ime!: string;
    prezime!: string;
    email!: string;
    tipKorisnika!: number;
}