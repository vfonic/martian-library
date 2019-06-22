# typed: strict
class MartianLibrarySchema < GraphQL::Schema
  mutation(RootMutations)
  query(RootQueries)
end
