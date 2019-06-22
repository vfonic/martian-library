# typed: strong
# To sum up, in order to add a new mutation you need to complete the following steps:

# Add a class implementing the mutation logic, which includes:
# the input type definition (arguments);
# the return type definition (fields);
# the #resolve method.
# Add a new entry to RootMutations.
module Mutations
  class BaseMutation < GraphQL::Schema::Mutation
  end
end
