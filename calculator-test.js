
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 5000,
    years: 6,
    rate: 7,
  };
  expect(calculateMonthlyPayment(values)).toEqual('85.25');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 3000,
    years: 4,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('69.09');
});

/// etc
