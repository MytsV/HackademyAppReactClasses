class Authenticator
{
    private static _instance: Authenticator;
    private static _emailKey: string = 'email';
    private static _passwordKey: string = 'password'; 

    public static get Instance()
    {
        return this._instance || (this._instance = new this());
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem(Authenticator._emailKey) != null && localStorage.getItem(Authenticator._passwordKey) != null;
    }

    public authenticate(email: string, password: string): void {
        localStorage.setItem(Authenticator._emailKey, email);
        localStorage.setItem(Authenticator._passwordKey, password);
    };
}

export const authenticator = Authenticator.Instance;
