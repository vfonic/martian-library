module Mutations
  class AddItemMutation < BaseMutation
    argument :title, String, required: true
    argument :description, String, required: false
    argument :image_url, String, required: false

    field :item, Types::ItemType, null: true
    field :errors, [String], null: false

    def resolve(title:, description: nil, image_url: nil)
      if context[:current_user].blank?
        raise GraphQL::ExecutionError, 'You need to authenticate to perform this action'
      end

      item = Item.new(title: title, description: description, image_url: image_url, user: context[:current_user])

      item.save ? { item: item } : { errors: item.errors.full_messages }
    end
  end
end
