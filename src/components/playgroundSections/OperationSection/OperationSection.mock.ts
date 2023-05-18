import { GraphQLSchema } from 'graphql';

export const schema: GraphQLSchema = JSON.parse(
  `{"__validationErrors":[],"extensions":{},"extensionASTNodes":[],"_queryType":"Query","_mutationType":null,"_subscriptionType":null,"_directives":["@cacheControl","@skip","@include","@deprecated"],"_typeMap":{"Query":"Query","ID":"ID","Character":"Character","String":"String","Location":"Location","Episode":"Episode","Int":"Int","FilterCharacter":"FilterCharacter","Characters":"Characters","Info":"Info","FilterLocation":"FilterLocation","Locations":"Locations","FilterEpisode":"FilterEpisode","Episodes":"Episodes","__Schema":"__Schema","__Type":"__Type","__TypeKind":"__TypeKind","Boolean":"Boolean","__Field":"__Field","__InputValue":"__InputValue","__EnumValue":"__EnumValue","__Directive":"__Directive","__DirectiveLocation":"__DirectiveLocation","CacheControlScope":"CacheControlScope","Upload":"Upload"},"_subTypeMap":{},"_implementationsMap":{}}`
);
