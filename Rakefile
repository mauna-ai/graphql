desc 'Generate the documentation'

task :generate_docs do
  require 'graphql-docs'

  options = {}
  options[:base_url] = "/graphql/docs"
  options[:delete_output] = true
  options[:output_dir] = "./docs"
  options[:filename] = File.join(File.dirname(__FILE__), 'schema.graphql')

  GraphQLDocs.build(options)
end
