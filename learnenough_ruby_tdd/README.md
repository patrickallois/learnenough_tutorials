# Palindrome detector

`pallois_palindrome` is a sample Ruby gem created in [*Learn Enough Ruby to Be Dangerous*](https://www.learnenough.com/ruby-tutorial) by Michael Hartl.

## Installation

To insall `pallois_palindrome`, add this line to your application's `Gemfile`:

```ruby
gem 'pallois_palindrome'
```

And then execute:

    $ bundle install

Or install it yourself as:

    $ gem install pallois_palindrome

## Usage

`pallois_palindrome` adds a `palindrome?` method to the `String` class, and can be used as follow:

```
$ irb
>> require 'pallois_palindrome'
>> "honey badger".palindrome?
=> false
>> "deified".palindrome?
=> true
>> "Able was I, ere I saw Elba.".palindrome?
=> true
```
