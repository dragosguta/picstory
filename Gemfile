source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# HAML
gem 'haml', '~> 4.0', '>= 4.0.7'

# Resizing/editing images
gem 'mini_magick', '~> 4.3', '>= 4.3.6'

# Uploading to Amazon Web Services
gem 'carrierwave', '~> 0.10.0'
gem 'fog', '~> 1.37'

gem 'unf', '~> 0.1.4'

# Managing Environment
gem 'figaro', '~> 1.1', '>= 1.1.1'
gem 'fog-aws', '~> 0.8.1'

# Materialize
gem 'materialize-sass', '~> 0.97.5'

# Authentication/Devise
gem 'devise', '~> 3.5', '>= 3.5.5'

# Font Awesome
gem 'font-awesome-rails', '~> 4.5'

gem 'rails_serve_static_assets', '~> 0.0.4'
gem 'rails_stdout_logging', '~> 0.0.4'


# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  # Capistrano Set Up
  gem 'capistrano',           require: false
  gem 'capistrano-rvm',       require: false
  gem 'capistrano-rails',     require: false
  gem 'capistrano-bundler',   require: false
  gem 'capistrano-passenger', require: false
end

group :production do
  gem 'rails_12factor'
end

