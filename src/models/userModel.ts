export interface IUser {
    roles: string[]
    uuid: string
    email: string
    username: string
    status: "ACTIVE" | "LOCKED" | "EXPIRED"
    firstName: string
    lastName: string
}

export interface ILoginResponse {
    accessToken: string
    expiryDuration: number
    refreshToken: string
    type: string
}