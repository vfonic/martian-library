# typed: false
require 'rails_helper'

RSpec.describe Types::QueryType do
  describe 'items' do
    let(:query) do
      %(query {
        items {
          title
          user {
            fullName
          }
        }
      })
    end

    it 'returns all items' do
      items = create_pair(:item)

      result = MartianLibrarySchema.execute(query).as_json

      expect(result.dig('data', 'items').map{ |item| item['title'] }).to match_array(
        items.map(&:title)
      )
    end
  end
end
