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

export enum DocMigrationStatus {
    SCHEMA_INITIALIZATION_SUCCESS,
    SCHEMA_MIGRATION_SUCCESS,
    SCHEMA_MIGRATION_ERROR,
    SCHEMA_MIGRATION_IN_PROGRESS,
    SCHEMA_INITIALIZATION_IN_PROGRESS,
    DATA_MIGRATION_IN_PROGRESS,
    DATA_MIGRATION_ERROR,
    DATA_MIGRATION_SUCCESS
}

export interface ISchemesStatus {
    id: number;
    schemaName: string;
    status: DocMigrationStatus
}