import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "//localhost:2998" }),
    tagTypes: [],
    endpoints: (build) => ({
        createConnectionUsingPost: build.mutation<
            CreateConnectionUsingPostApiResponse,
            CreateConnectionUsingPostApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/create_connection`,
                method: "POST",
                body: queryArg.dynamicConnection,
            }),
        }),
        deleteConnectionByIdUsingDelete: build.mutation<
            DeleteConnectionByIdUsingDeleteApiResponse,
            DeleteConnectionByIdUsingDeleteApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/delete_connection_by_id/${queryArg.id}`,
                method: "DELETE",
            }),
        }),
        editConnectionUsingPut: build.mutation<
            EditConnectionUsingPutApiResponse,
            EditConnectionUsingPutApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/edit_connection`,
                method: "PUT",
                body: queryArg.dynamicConnection,
            }),
        }),
        existWithConnectionParamsUsingGet: build.query<
            ExistWithConnectionParamsUsingGetApiResponse,
            ExistWithConnectionParamsUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/exist_with_connection_params`,
                params: {
                    connectionName: queryArg.connectionName,
                    dbName: queryArg.dbName,
                    dbType: queryArg.dbType,
                    host: queryArg.host,
                    id: queryArg.id,
                    password: queryArg.password,
                    port: queryArg.port,
                    url: queryArg.url,
                    user: queryArg.user,
                },
            }),
        }),
        existsWithIdUsingGet: build.query<
            ExistsWithIdUsingGetApiResponse,
            ExistsWithIdUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/exists_connection/${queryArg.id}`,
            }),
        }),
        loadConnectionDataUsingGet: build.query<
            LoadConnectionDataUsingGetApiResponse,
            LoadConnectionDataUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/connections/load_connection_by_id/${queryArg.id}`,
            }),
        }),
        loadAllConnectionsInfoUsingGet: build.query<
            LoadAllConnectionsInfoUsingGetApiResponse,
            LoadAllConnectionsInfoUsingGetApiArg
            >({
            query: () => ({ url: `/connections/load_connections_info` }),
        }),
        getInformationSchemaUsingGet: build.query<
            GetInformationSchemaUsingGetApiResponse,
            GetInformationSchemaUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/information-schema/${queryArg.id}/${queryArg.schema}`,
            }),
        }),
        initializationMigrationSchemaUsingPost: build.mutation<
            InitializationMigrationSchemaUsingPostApiResponse,
            InitializationMigrationSchemaUsingPostApiArg
            >({
            query: (queryArg) => ({
                url: `/initialization-migration-schema`,
                method: "POST",
                body: queryArg.informationSchemaDto,
            }),
        }),
        loadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGet: build.query<
            LoadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGetApiResponse,
            LoadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/load-data-migration-statistic/${queryArg.dataSourceId}/${queryArg.schemaName}`,
            }),
        }),
        loadDataSourceSchemasUsingGet: build.query<
            LoadDataSourceSchemasUsingGetApiResponse,
            LoadDataSourceSchemasUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/load-datasource-schemas/${queryArg.dataSourceId}`,
            }),
        }),
        loadMigrationStateInfoBySchemaIdUsingGet: build.query<
            LoadMigrationStateInfoBySchemaIdUsingGetApiResponse,
            LoadMigrationStateInfoBySchemaIdUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/load-migration-state-by-schema-id`,
                params: { schemaId: queryArg.schemaId },
            }),
        }),
        loadMigrationStatusUsingGet: build.query<
            LoadMigrationStatusUsingGetApiResponse,
            LoadMigrationStatusUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/load-migration-status`,
                params: {
                    dataSourceId: queryArg.dataSourceId,
                    schemaName: queryArg.schemaName,
                },
            }),
        }),
        loadSchemaMigrationStatisticUsingGet: build.query<
            LoadSchemaMigrationStatisticUsingGetApiResponse,
            LoadSchemaMigrationStatisticUsingGetApiArg
            >({
            query: (queryArg) => ({
                url: `/load-schema-migration-statistic`,
                params: {
                    dataSourceId: queryArg.dataSourceId,
                    schemaName: queryArg.schemaName,
                },
            }),
        }),
        migrationDataSchemaUsingPost: build.mutation<
            MigrationDataSchemaUsingPostApiResponse,
            MigrationDataSchemaUsingPostApiArg
            >({
            query: (queryArg) => ({
                url: `/migration-data-schema/${queryArg.dataSourceId}/${queryArg.schemaName}`,
                method: "POST",
            }),
        }),
        startMigrationBySchemaNameUsingPost: build.mutation<
            StartMigrationBySchemaNameUsingPostApiResponse,
            StartMigrationBySchemaNameUsingPostApiArg
            >({
            query: (queryArg) => ({
                url: `/start-migration-schema-by-schema-name`,
                method: "POST",
                params: {
                    dataSourceId: queryArg.dataSourceId,
                    schemaName: queryArg.schemaName,
                },
            }),
        }),
    }),
});
export type CreateConnectionUsingPostApiResponse = /** status 200 OK */
    | DynamicConnection
    | /** status 201 Created */ undefined;
export type CreateConnectionUsingPostApiArg = {
    /** dynamicConnection */
    dynamicConnection: DynamicConnection;
};
export type DeleteConnectionByIdUsingDeleteApiResponse = unknown;
export type DeleteConnectionByIdUsingDeleteApiArg = {
    /** id */
    id: number;
};
export type EditConnectionUsingPutApiResponse = /** status 200 OK */
    | DynamicConnection
    | /** status 201 Created */ undefined;
export type EditConnectionUsingPutApiArg = {
    /** dynamicConnection */
    dynamicConnection: DynamicConnection;
};
export type ExistWithConnectionParamsUsingGetApiResponse =
/** status 200 OK */ boolean;
export type ExistWithConnectionParamsUsingGetApiArg = {
    connectionName: string;
    dbName: string;
    dbType: "Oracle" | "PostgreSql";
    host: string;
    id?: number;
    password: string;
    port: number;
    url?: string;
    user: string;
};
export type ExistsWithIdUsingGetApiResponse = /** status 200 OK */ boolean;
export type ExistsWithIdUsingGetApiArg = {
    /** id */
    id: number;
};
export type LoadConnectionDataUsingGetApiResponse =
/** status 200 OK */ DynamicConnection;
export type LoadConnectionDataUsingGetApiArg = {
    /** id */
    id: number;
};
export type LoadAllConnectionsInfoUsingGetApiResponse =
/** status 200 OK */ DynamicConnectionDto[];
export type LoadAllConnectionsInfoUsingGetApiArg = void;
export type GetInformationSchemaUsingGetApiResponse =
/** status 200 OK */ InformationSchemaDto;
export type GetInformationSchemaUsingGetApiArg = {
    /** id */
    id: number;
    /** schema */
    schema: string;
};
export type InitializationMigrationSchemaUsingPostApiResponse = unknown;
export type InitializationMigrationSchemaUsingPostApiArg = {
    /** informationSchemaDto */
    informationSchemaDto: InformationSchemaDto;
};
export type LoadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGetApiResponse =
/** status 200 OK */ DataMigrationStatisticDto;
export type LoadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGetApiArg =
    {
        /** dataSourceId */
        dataSourceId: number;
        /** schemaName */
        schemaName: string;
    };
export type LoadDataSourceSchemasUsingGetApiResponse =
/** status 200 OK */ SchemesStatusDto[];
export type LoadDataSourceSchemasUsingGetApiArg = {
    /** dataSourceId */
    dataSourceId: number;
};
export type LoadMigrationStateInfoBySchemaIdUsingGetApiResponse =
/** status 200 OK */ SchemaMigrationStatisticDto;
export type LoadMigrationStateInfoBySchemaIdUsingGetApiArg = {
    /** schemaId */
    schemaId: number;
};
export type LoadMigrationStatusUsingGetApiResponse =
/** status 200 OK */ SchemaMigrationStatisticInfo;
export type LoadMigrationStatusUsingGetApiArg = {
    /** dataSourceId */
    dataSourceId: number;
    /** schemaName */
    schemaName: string;
};
export type LoadSchemaMigrationStatisticUsingGetApiResponse =
/** status 200 OK */ SchemaMigrationStatisticDto;
export type LoadSchemaMigrationStatisticUsingGetApiArg = {
    /** dataSourceId */
    dataSourceId: number;
    /** schemaName */
    schemaName: string;
};
export type MigrationDataSchemaUsingPostApiResponse = unknown;
export type MigrationDataSchemaUsingPostApiArg = {
    /** dataSourceId */
    dataSourceId: number;
    /** schemaName */
    schemaName: string;
};
export type StartMigrationBySchemaNameUsingPostApiResponse = unknown;
export type StartMigrationBySchemaNameUsingPostApiArg = {
    /** dataSourceId */
    dataSourceId: number;
    /** schemaName */
    schemaName: string;
};
export type DynamicConnection = {
    connectionName: string;
    dbName: string;
    dbType: "Oracle" | "PostgreSql";
    host: string;
    id?: number;
    password: string;
    port: number;
    user: string;
};
export type DynamicConnectionDto = {
    connectId?: number;
    connectUrl?: string;
    connected?: boolean;
    connectionName?: string;
};
export type Sequences = {
    cycle_option?: string;
    data_type?: string;
    increment?: string;
    maximum_value?: string;
    minimum_value?: string;
    numeric_precision?: string;
    numeric_precision_radix?: string;
    numeric_scale?: string;
    sequence_catalog?: string;
    sequence_name?: string;
    sequence_schema?: string;
    start_value?: string;
};
export type ColumnSchemaDto = {
    characterMaximumLength?: number;
    characterOctetLength?: number;
    columnDefault?: string;
    columnName?: string;
    dataType?: string;
    datetimePrecision?: number;
    elementType?: string;
    intervalPrecision?: number;
    intervalType?: string;
    nullable?: boolean;
    numericPrecision?: number;
    numericPrecisionRadix?: number;
    numericScale?: number;
    ordinalPosition?: string;
    tableName?: string;
    tableSchema?: string;
    updatable?: boolean;
};
export type ForeignKey = {
    columnNames?: string[];
    foreignColumnNames?: string[];
    foreignTableName?: string;
    foreignTableSchema?: string;
    name?: string;
    tableName?: string;
    tableSchema?: string;
};
export type PrimaryKey = {
    columnNames?: string[];
    name?: string;
    tableName?: string;
};
export type UniqueConstraint = {
    columnNames?: string[];
    name?: string;
    tableName?: string;
};
export type TableSchemaDto = {
    columnsSchema?: ColumnSchemaDto[];
    foreignKeys?: ForeignKey[];
    name?: string;
    primaryKey?: PrimaryKey;
    uniqueConstraints?: UniqueConstraint[];
};
export type InformationSchemaDto = {
    dataSourceId?: number;
    schemaName?: string;
    sequences?: Sequences[];
    tables?: TableSchemaDto[];
};
export type DataMigrationStatisticError = {
    errorId?: number;
    errorMessage?: string;
};
export type DataMigrationStatistic = {
    errors?: DataMigrationStatisticError[];
    migratedCount?: number;
    tableName?: string;
    totalCount?: number;
};
export type DataMigrationStatisticDto = {
    dataMigrationStatistics?: DataMigrationStatistic[];
    migrationStatus?:
        | "DATA_MIGRATION_ERROR"
        | "DATA_MIGRATION_IN_PROGRESS"
        | "DATA_MIGRATION_SUCCESS"
        | "SCHEMA_INITIALIZATION_IN_PROGRESS"
        | "SCHEMA_INITIALIZATION_SUCCESS"
        | "SCHEMA_MIGRATION_ERROR"
        | "SCHEMA_MIGRATION_IN_PROGRESS"
        | "SCHEMA_MIGRATION_SUCCESS";
    schemaDescription?: string;
    schemaId?: number;
    schemaName?: string;
};
export type SchemesStatusDto = {
    id?: number;
    schemaName?: string;
    statusEnum?:
        | "DATA_MIGRATION_ERROR"
        | "DATA_MIGRATION_IN_PROGRESS"
        | "DATA_MIGRATION_SUCCESS"
        | "SCHEMA_INITIALIZATION_IN_PROGRESS"
        | "SCHEMA_INITIALIZATION_SUCCESS"
        | "SCHEMA_MIGRATION_ERROR"
        | "SCHEMA_MIGRATION_IN_PROGRESS"
        | "SCHEMA_MIGRATION_SUCCESS";
};
export type SchemaMigrationStatisticWithTypeEnum = {
    docMigrationStatusEnum?:
        | "DATA_MIGRATION_ERROR"
        | "DATA_MIGRATION_IN_PROGRESS"
        | "DATA_MIGRATION_SUCCESS"
        | "SCHEMA_INITIALIZATION_IN_PROGRESS"
        | "SCHEMA_INITIALIZATION_SUCCESS"
        | "SCHEMA_MIGRATION_ERROR"
        | "SCHEMA_MIGRATION_IN_PROGRESS"
        | "SCHEMA_MIGRATION_SUCCESS";
    errorMessage?: string;
    name?: string;
    typeEnum?: "FOREIGN_KEY" | "PRIMARY_KEY" | "SEQUENCE" | "TABLE" | "UNIQUE";
};
export type SchemaMigrationStatisticInfo = {
    migrationStatus?:
        | "DATA_MIGRATION_ERROR"
        | "DATA_MIGRATION_IN_PROGRESS"
        | "DATA_MIGRATION_SUCCESS"
        | "SCHEMA_INITIALIZATION_IN_PROGRESS"
        | "SCHEMA_INITIALIZATION_SUCCESS"
        | "SCHEMA_MIGRATION_ERROR"
        | "SCHEMA_MIGRATION_IN_PROGRESS"
        | "SCHEMA_MIGRATION_SUCCESS";
    schemaDescription?: string;
    schemaId?: number;
    schemaName?: string;
};
export type SchemaMigrationStatistic = {
    docMigrationStatusEnum?:
        | "DATA_MIGRATION_ERROR"
        | "DATA_MIGRATION_IN_PROGRESS"
        | "DATA_MIGRATION_SUCCESS"
        | "SCHEMA_INITIALIZATION_IN_PROGRESS"
        | "SCHEMA_INITIALIZATION_SUCCESS"
        | "SCHEMA_MIGRATION_ERROR"
        | "SCHEMA_MIGRATION_IN_PROGRESS"
        | "SCHEMA_MIGRATION_SUCCESS";
    errorMessage?: string;
    name?: string;
};
export type SchemaMigrationStatisticDto = {
    schemaMigrationStatisticConstraints?: SchemaMigrationStatisticWithTypeEnum[];
    schemaMigrationStatisticInfo?: SchemaMigrationStatisticInfo;
    schemaMigrationStatisticSequences?: SchemaMigrationStatistic[];
    schemaMigrationStatisticTables?: SchemaMigrationStatistic[];
};
export const {
    useCreateConnectionUsingPostMutation,
    useDeleteConnectionByIdUsingDeleteMutation,
    useEditConnectionUsingPutMutation,
    useExistWithConnectionParamsUsingGetQuery,
    useExistsWithIdUsingGetQuery,
    useLoadConnectionDataUsingGetQuery,
    useLoadAllConnectionsInfoUsingGetQuery,
    useGetInformationSchemaUsingGetQuery,
    useInitializationMigrationSchemaUsingPostMutation,
    useLoadDataMigrationStatisticBySchemaNameAndDataSourceIdUsingGetQuery,
    useLoadDataSourceSchemasUsingGetQuery,
    useLoadMigrationStateInfoBySchemaIdUsingGetQuery,
    useLoadMigrationStatusUsingGetQuery,
    useLoadSchemaMigrationStatisticUsingGetQuery,
    useMigrationDataSchemaUsingPostMutation,
    useStartMigrationBySchemaNameUsingPostMutation,
} = api;

