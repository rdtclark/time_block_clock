# Activate and configure extensions
# https://middlemanapp.com/advanced/configuration/#configuring-extensions

configure :development do
  activate :livereload
end

activate :directory_indexes
activate :autoprefixer

helpers do 
  def hours
    return (1..12).to_a.flat_map { |i| [ i ] * 60}
  end

  def minutes
    mins_count = (1..60).to_a
    mins = []
    12.times do mins.push(mins_count) end
    return mins.flatten
  end

  def days
    days_count = (1..365).to_a
  end

end

# Per-page layout changes
page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

# configure :build do
#   activate :minify_css
#   activate :minify_javascript
# end
