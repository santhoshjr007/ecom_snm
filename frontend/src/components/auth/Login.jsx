

const Login = () => {
  return (
    <div className="bg-white-100 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">SIXNINE-Market</h1>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form>
          <div className="mb-4">

            <div className="flex">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label> 

            </div>
            <input
              type="email" 
              id="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <div className="flex">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>

            </div>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
             <div className="flex mt-0 justify-end">
              <a href="#" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
              </div>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-indigo-600 border-indigo-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Dont have an account?{" "}
          <a href="#" className="text-indigo-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;