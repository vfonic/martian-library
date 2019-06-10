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

      expect(result.dig('data', 'items')).to match_array(
        items.map { |item| { 'title' => item.title } }
      )
    end
  end
end
