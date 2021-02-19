export const apiTemplate = `
import keystoneConfig from '../../../../keystone';
import { initConfig, createSystem, createApolloServerMicro } from '@keystone-next/keystone';

const config = initConfig(keystoneConfig);
const { graphQLSchema, keystone, createContext } = createSystem(config, '.keystone', 'start');
const apolloServer = createApolloServerMicro({
  graphQLSchema,
  createContext,
  sessionStrategy: config.session ? config.session() : undefined,
  apolloConfig: config.graphql?.apolloConfig,
  connectionPromise: keystone.connect(),
});

export const config = {
  api: {
    bodyParser: false,
  },
};
export default apolloServer.createHandler({ path: '/api/graphql' });
`;
