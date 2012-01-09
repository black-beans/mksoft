notification :ruby_gntp

guard 'sass', :input => 'src/styles', :output => 'public/styles'
guard 'coffeescript', :input => 'src/coffee', :output => 'public/scripts'

guard 'haml', :output => 'public', :input => 'src' do
  watch %r{^src/.+(\.html\.haml)}
end

guard 'jammit' do
  watch(/^public\/scripts\/(.*)\.js$/)
  watch(/^public\/styles\/(.*)\.css$/)
end
