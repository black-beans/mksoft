notification :ruby_gntp

guard 'compass', :configuration_file => 'config/compass.rb' do
  watch(%r{^src/(.*)\.scss})
end

guard 'coffeescript', :input => 'src/coffee', :output => 'public/scripts'

guard 'haml', :output => 'public', :input => 'src' do
  watch %r{^src/.+(\.html\.haml)}
end

guard 'jammit' do
  watch(/^public\/scripts\/(.*)\.js$/)
  watch(/^public\/styles\/(.*)\.css$/)
end
