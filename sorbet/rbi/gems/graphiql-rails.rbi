# This file is autogenerated. Do not edit it by hand. Regenerate it with:
#   srb rbi gems

# typed: strong
#
# If you would like to make changes to this file, great! Please create the gem's shim here:
#
#   https://github.com/sorbet/sorbet-typed/new/master?filename=lib/graphiql-rails/all/graphiql-rails.rbi
#
# graphiql-rails-1.7.0
module GraphiQL
end
module GraphiQL::Rails
  def self.config; end
  def self.config=(arg0); end
  def self.railtie_helpers_paths; end
  def self.railtie_namespace; end
  def self.railtie_routes_url_helpers(include_path_helpers = nil); end
  def self.table_name_prefix; end
  def self.use_relative_model_naming?; end
end
class GraphiQL::Rails::Config
  def csrf; end
  def csrf=(arg0); end
  def headers; end
  def headers=(arg0); end
  def initial_query; end
  def initial_query=(arg0); end
  def initialize(query_params: nil, initial_query: nil, title: nil, logo: nil, csrf: nil, headers: nil); end
  def logo; end
  def logo=(arg0); end
  def query_params; end
  def query_params=(arg0); end
  def resolve_headers(view_context); end
  def title; end
  def title=(arg0); end
end
class GraphiQL::Rails::Engine < Rails::Engine
end
