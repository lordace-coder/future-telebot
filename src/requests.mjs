///Create new user Investment Plan on the pocketbase backend
const ZENITH_URL = "https://zenith.pockethost.io/";

const createNewInvestmentPlan = async (userId, investmentId, amount) => {
  try {
    const req = await fetch(
      "https://zenith.pockethost.io/api/collections/Investments/records",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: userId,
          plan: investmentId,
          amount,
        }),
      }
    );
    console.log(req.status, "request");
  } catch (error) {
    console.log(error);
  }
};

export { createNewInvestmentPlan };
