import {GraphQLResolveInfo} from 'graphql'

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> =
    { [X in Exclude<keyof T, K>]?: T[X] }
    & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};

export type InputCreatePerson = {
    name: Scalars['String'];
};

export type InputCreateUser = {
    username: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};

export type InputUpdatePerson = {
    id: Scalars['String'];
    name: Scalars['String'];
};

export type InputUpdateUser = {
    id: Scalars['String'];
    username: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};

export type Mutation = {
    __typename?: 'Mutation';
    createPerson?: Maybe<Person>;
    createUser?: Maybe<User>;
    destroyPerson?: Maybe<Scalars['Int']>;
    destroyUser?: Maybe<Scalars['Int']>;
    updatePerson?: Maybe<Person>;
    updateUser?: Maybe<User>;
};


export type MutationCreatePersonArgs = {
    person: InputCreatePerson;
};


export type MutationCreateUserArgs = {
    user: InputCreateUser;
};


export type MutationDestroyPersonArgs = {
    id: Scalars['ID'];
};


export type MutationDestroyUserArgs = {
    id: Scalars['ID'];
};


export type MutationUpdatePersonArgs = {
    person: InputUpdatePerson;
};


export type MutationUpdateUserArgs = {
    user: InputUpdateUser;
};

export type Person = {
    __typename?: 'Person';
    id: Scalars['String'];
    name: Scalars['String'];
};

export type Query = {
    __typename?: 'Query';
    personById?: Maybe<Person>;
    persons: Array<Person>;
    userById?: Maybe<User>;
    users: Array<User>;
};


export type QueryPersonByIdArgs = {
    id: Scalars['ID'];
};


export type QueryUserByIdArgs = {
    id: Scalars['ID'];
};

export type User = {
    __typename?: 'User';
    id: Scalars['String'];
    username: Scalars['String'];
    name?: Maybe<Scalars['String']>;
    email?: Maybe<Scalars['String']>;
};


export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
    fragment: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
    selectionSet: string;
    resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
    LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
    | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
    | ResolverFn<TResult, TParent, TContext, TArgs>
    | ResolverWithResolve<TResult, TParent, TContext, TArgs>
    | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
    resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
    subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
    resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
    | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
    | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
    | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
    | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
    parent: TParent,
    context: TContext,
    info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
    next: NextResolverFn<TResult>,
    parent: TParent,
    args: TArgs,
    context: TContext,
    info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
    InputCreatePerson: InputCreatePerson;
    String: ResolverTypeWrapper<Scalars['String']>;
    InputCreateUser: InputCreateUser;
    InputUpdatePerson: InputUpdatePerson;
    InputUpdateUser: InputUpdateUser;
    Mutation: ResolverTypeWrapper<{}>;
    Int: ResolverTypeWrapper<Scalars['Int']>;
    ID: ResolverTypeWrapper<Scalars['ID']>;
    Person: ResolverTypeWrapper<Person>;
    Query: ResolverTypeWrapper<{}>;
    User: ResolverTypeWrapper<User>;
    Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
    InputCreatePerson: InputCreatePerson;
    String: Scalars['String'];
    InputCreateUser: InputCreateUser;
    InputUpdatePerson: InputUpdatePerson;
    InputUpdateUser: InputUpdateUser;
    Mutation: {};
    Int: Scalars['Int'];
    ID: Scalars['ID'];
    Person: Person;
    Query: {};
    User: User;
    Boolean: Scalars['Boolean'];
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
    createPerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationCreatePersonArgs, 'person'>>;
    createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'user'>>;
    destroyPerson?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDestroyPersonArgs, 'id'>>;
    destroyUser?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<MutationDestroyUserArgs, 'id'>>;
    updatePerson?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<MutationUpdatePersonArgs, 'person'>>;
    updateUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<MutationUpdateUserArgs, 'user'>>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
    personById?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonByIdArgs, 'id'>>;
    persons?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
    userById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserByIdArgs, 'id'>>;
    users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
    id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
    name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
    __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
    Mutation?: MutationResolvers<ContextType>;
    Person?: PersonResolvers<ContextType>;
    Query?: QueryResolvers<ContextType>;
    User?: UserResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
