# API Platform with an admin client on Platform.sh

This example provides a simple configuration to deploy [API Platform](https://api-platform.com) with the ReactJS [admin client](https://github.com/api-platform/admin) on [Platform.sh](https://platform.sh).

It is setup as a multi-application project where:
* the backend `api` application is running on `PHP:7.1`.
* the frontend `admin` application is running on `nodejs:6.9` and is based on [API Platform Admin](https://github.com/api-platform/admin).

## Setup

[Create a Platform.sh project](https://platform.sh/free-trial).

Clone the GitHub repository and push its content to your Platform.sh project:

```
git clone git@github.com:platformsh/platformsh-example-api-platform-reactjs.git
cd platformsh-example-api-platform-reactjs/
git remote add platform [project-id]@git.[region].platform.sh:[project-id].git
git push platform master
```

SSH to the `api` remote application and create the database schema:

```
ssh [project-id]-master-[string-identifier]--api@ssh.[region].platform.sh
php bin/console doctrine:schema:create
```

You can now access the `admin` URL provided by Platform.sh and enjoy.