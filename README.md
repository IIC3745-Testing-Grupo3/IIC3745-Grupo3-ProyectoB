# Proyecto B

**Production URL:** https://testing-proyecto-b.herokuapp.com/

1. [Setup](#setup)
2. [Run the app](#run-the-app)
3. [The magical Makefile](#the-magical-makefile)
4. [Using different selenium drivers with capybara](#using-different-selenium-drivers-with-capybara)
5. [How to contribute](#how-to-contribute)
6. [Branch naming](#branch-naming)

## Prerequisites

- Ruby 3.0.0
- PostgreSQL
- Node 14.x
- Yarn

## Setup

After cloning this repository, install the project's dependencies:

```bash
bundle install # to install ruby gems
yarn install # to install npm packages
```

Then run:

```bash
cp .env.example .env
```

and fill the variables in the newly created file.

**Make sure that the postgres user you are using has superuser permissions**

Finally, create your databases, run migrations and seeds:

```
bundle exec rails db:setup
```

## Run the app

To run the app open two windows in your terminal and first run `webpack-dev-server` to allow hot module reload:

```bash
./bin/webpack-dev-server
```

Then run your rails server:

```
bundle exec rails s
```

and go to http://localhost:3000

## The magical Makefile

All the useful commands are centralized in a Makefile:

```bash
make tests # runs the tests
make eslint # checks for eslint offences
make eslint! # fixes eslint offences
```

## Using different selenium drivers with capybara

By default, the tests run with firefox, but if you want to use a different driver, you can use the `SELENIUM_DRIVER` variable:
```bash
SELENIUM_DRIVER=selenium_headless bundle exec rspec # :selenium_chrome and :selenium_chrome_headless are also valid values
```

## How to contribute

1. First update your `main` branch:

   ```bash
   git switch main
   git pull
   ```

2. Then create a new branch and start working on it. For this be sure to follow our [branch naming convention](#branch-naming):

   ```bash
   git switch -c feat/resource-list-endpoint
   ```

3. Now develop the new feature and commit your changes. Commits must start with an imperative verb in English: "change" not "changed" nor "changes":

   ```bash
   git add ./app/controllers/api/v1/resources_controller.rb
   git commit -m "feat(resources): add a new resource list endpoint"
   git add ./app/controllers/api/v1/resources_controller.rb
   git commit -m "fix(resources): fix bug in the resource list endpoint"
   ```

   If you find it coherent to attach all changes up to a certain point in a single commit, you can run `git add`.

   **To write our commits we use [platanus commits convention](https://la-guia.platan.us/setup/proyectos/git#commits)**

4. Once your functionality is ready, it's time to upload your branch to Github:

   ```bash
   git push -u origin HEAD
   ```

5. Then create a Pull Request from your branch to `main`, following the provided template. Also, assign at least one reviewer who is a member of your team, assign yourself as assignee and add labels. In this way we will know who is in charge of the PR, who should review it and what it is about.

   In case you are asked to make changes, go back to step 3 and when you finish run `git push`.

6. Once your PR has been accepted merge your changes.

## Branch naming

We devide our branch names in two parts: **type** and **description**.

The type helps us to classify the purpose of the branch to create. The types we use are:

- **chore**: changes to the build process and auxiliary tools
- **docs**: changes in the documentation
- **feat**: a new feature
- **fix**: a bug fix
- **perf**: changes in the code that only improve performance
- **refactor**: a code change that neither fixes a bug nor adds a feature
- **style**: changes focused on the frontend design
- **test**: add, correct or improve tests

The description tells us in more detail the purpose of the branch:

- You must use kebab-case
