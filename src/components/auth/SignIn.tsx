import Link from "next/link";

const SignIn = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span className="text-sm text-gray-600">Remember me</span>
            </label>
            <Link href="#" className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don’t have an account?{" "}
          <Link href="/auth/sign-up" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
