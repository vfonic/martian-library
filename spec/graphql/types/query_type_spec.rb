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

  describe 'me' do
    let(:query) do
      %(query {
        me {
          email
        }
      })
    end

    context 'when no user is logged in' do
      it 'returns nil' do
        result = MartianLibrarySchema.execute(query).as_json

        expect(result.dig('data', 'me')).to be nil
      end
    end

    context 'when user is logged in' do
      it 'returns curret user' do
        user = create(:user)

        result = MartianLibrarySchema.execute(query, context: { current_user: user }).as_json

        expect(result.dig('data', 'me', 'email')).to eq(user.email)
      end
    end
  end
end
