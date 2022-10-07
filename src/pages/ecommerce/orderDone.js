export function OrderDone() {
  return (
    <div>
      <h1>Your order is ready !</h1>
      <h2>Check the shipping date and the details bellow </h2>
      <button
        type="submit"
        className="relative block w-25 py-2 content-center text-white bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 border rounded uppercase font-roboto font-medium"
      >
        Check
      </button>
    </div>
  );
}
