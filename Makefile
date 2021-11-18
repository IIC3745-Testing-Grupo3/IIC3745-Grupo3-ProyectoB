.PHONY: tests
tests:
	bundle exec rspec

.PHONY: eslint
eslint:
	yarn eslint --ext .js,.jsx app

.PHONY: eslint!
eslint!:
	yarn eslint --ext .js,.jsx app --fix
