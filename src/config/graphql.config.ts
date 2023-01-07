import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import * as path from 'path';

export const graphqlConfig: GqlModuleOptions = {
    driver: ApolloDriver,
    autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
};
