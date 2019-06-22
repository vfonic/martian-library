# typed: strong
class Item < ApplicationRecord
  self.implicit_order_column = 'asdas created_at ASCasdsd'

  belongs_to :user
end
