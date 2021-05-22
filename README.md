# Hello, React World!

This sample uses an [Auth0 React SDK](https://github.com/auth0/auth0-react) to implement the following security tasks:

- Add user login and logout.
- Retrieve user profile information.
- Protect application routes.
- Make secure calls to an API.

![Hello, React World!](https://images.ctfassets.net/23aumh6u8s0i/3b5tLGdggbe61U8A8OPoxE/3fbf40a054a8597303beb56a18ae1ca6/hello-react.png)

The `add-authentication` branch offers a functional application that consumes an ID token to hydrate the user profile information present in the `/profile` page. It also uses an access token to make a secure call to an external API to hydrate the messages present in the `/external-api` page.

## Quick Auth0 Set Up

### Set up the project

Install the project dependencies:

```bash
npm install
```

### Register a React application with Auth0

- Open the [Applications](https://manage.auth0.com/#/applications) section of the Auth0 Dashboard.

- Click on the **Create Application** button.

- Provide a **Name** value such as _Hello World Client_.

- Choose "Single Page Web Applications" as the **application type**.

- Click on the **Create** button.

> View ["Register Applications" document](https://auth0.com/docs/applications/set-up-an-application) for more details.

Your Auth0 application page loads up.

Your React application will redirect users to Auth0 whenever they trigger an authentication request. Auth0 will present them with a login page. Once they log in, Auth0 will redirect them back to your React application. For that redirecting to happen securely, you must specify in your **Auth0 Application Settings** the URLs to which Auth0 can redirect users once it authenticates them.

As such, click on the "Settings" tab of your Auth0 Application page and fill in the following values:

**Allowed Callback URLs**

```bash
http://localhost:4040
```

**Allowed Logout URLs**

```bash
http://localhost:4040
```

**Allowed Web Origins**

```bash
http://localhost:4040
```

**Scroll down and click the "Save Changes" button.**

### Connect React with Auth0

Create a `.env` file under the project directory and populate it as follows:

```bash
REACT_APP_AUTH0_DOMAIN=
REACT_APP_AUTH0_CLIENT_ID=
REACT_APP_AUTH0_AUDIENCE=https://hello-world.example.com
REACT_APP_API_SERVER_URL=http://localhost:6060
```

Head back to your Auth0 application page. Follow these steps to get the `REACT_APP_AUTH0_DOMAIN` and `REACT_APP_AUTH0_CLIENT_ID` values:

![Auth0 application settings to enable user authentication](https://images.ctfassets.net/23aumh6u8s0i/3jIw7AU2SbVOfAml3x6JNK/206be29f3784c5be87cee993dc8d7947/hello-world-client-settings.png)

1. Click on the "Settings" tab, if you haven't already.

2. Use the "Domain" value from the "Settings" as the value of `REACT_APP_AUTH0_DOMAIN` in `.env`.

3. Use the "Client ID" value from the "Settings" as the value of `REACT_APP_AUTH0_CLIENT_ID` in `.env`.

### Run the project

With the Auth0 configuration set, run the React application by issuing the following command:

```bash
npm start
```

Visit [`http://localhost:4040/`](http://localhost:4040/) to access the application.

## Advanced Auth0 Set Up

### Connecting to an external API

The external API used in this React sample is the ["Hello World API: Express.js Sample"](https://github.com/auth0-sample-gallery/api_express_javascript_hello-world).

Follow the instructions on that `README` of that repository to set up and run the API.

Once set up, you can see the different server responses by interacting with the message box present in [`http://localhost:4040/external-api`](http://localhost:4040/external-api).

### Admin access

When you log in to the application and visit the `/external-api` page, you have different options to test to connection between your React application and a remote API server. You can retrieve a public, protected or admin message.

Requesting the protected message requires React to send an access token with the server request. On the other hand, requesting the admin message requires React to send an access token with the server request that also has the `read:admin-messages` permission.

You can use the Auth0 Dashboard to create an `admin` role and assign it the`read:admin-messages` permission. Then, you can assign the `admin` role to any user that you want to access the `/admin` endpoint.

If you need help doing so, check out the following resources:

- [Create roles](https://auth0.com/docs/authorization/rbac/roles/create-roles)

- [Create permissions](https://auth0.com/docs/get-started/dashboard/add-api-permissions)

- [Add permissions to roles](https://auth0.com/docs/authorization/rbac/roles/add-permissions-to-roles)

- [Assign roles to users](https://auth0.com/docs/users/assign-roles-to-users)
