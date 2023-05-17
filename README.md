## CoderBlog

This is a simple blog app for programmers built with the MERN stack (MongoDB, Express, React, Node.js).

### Getting Started

1. Clone the repository:

```
git clone https://github.com/Bygidhasan/CoderBlog.git
```

2. Install the dependencies:

```
cd CoderBlog
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:

```
MONGODB_URI=mongodb://localhost:27017/coderblog
SECRET_KEY=your-secret-key
```

4. Start the development server:

```
npm run dev
```

The app will be available at http://localhost:3000.

### Features

* Create, read, update, and delete blog posts
* Comment on blog posts
* Login and logout with Google


### License

This project is licensed under the MIT License.

## .env Files

The `.env` files in this project contain secret information, such as the database password and the secret key. These files should not be committed to the public repository.

To create a `.env` file, open a text editor and create a new file called `.env` in the root directory of the project. Then, add the following environment variables to the file:

```
MONGODB_URI=mongodb://localhost:27017/coderblog
SECRET_KEY=your-secret-key
```

Once you have created the `.env` file, do not commit it to the public repository.
