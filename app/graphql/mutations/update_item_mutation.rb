module Mutations
  class UpdateItemMutation < BaseMutation
    argument :id, ID, required: true
    argument :title, String, required: false
    argument :description, String, required: true
    argument :image_url, String, required: false

    field :item, Types::ItemType, null: true
    field :errors, [String], null: false

    def resolve(id: , title:, description: nil, image_url: nil)
      if context[:current_user].blank?
        raise GraphQL::ExecutionError, 'You need to authenticate to perform this action'
      end

      item = Item.find(id)


      if item.update(title: title, description: description, image_url: image_url, user: context[:current_user])
        { item: item }
      else
        { errors: item.errors.full_messages }
      end
    end
  end
end
