/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  Tooltip,
  YAxis,
} from "recharts";
import DownIcon from "../../assets/landingPage/icons/down.svg";
import UpIcon from "../../assets/landingPage/icons/up.svg";
import greenArrow from "../../assets/company-profile/green.svg";
import redArrow from "../../assets/company-profile/red.svg";
import { useRouter } from "next/router";

const VisualDataCard = () => {
  const { id: companyId } = useRouter().query;
  const [state, setState] = React.useState({
    show: false,
    showRevenue: true,
    showIncome: true,
    showExpenses: false,
    showProfit: false,
    value: "2022",
    position: 0,
  });

  const [data, setData] = React.useState([]);

  const getStartDate = () => {
    const year = parseInt(state.value) - 5;
    return `${year}-12-31`;
  };

  const getDateIndex = () => {
    data.forEach((each, key) => {
      if (each["date"] === `${state.value}-12-31`) {
        setState({ ...state, position: key });
      } else {
        console.log(each);
      }
    });
  };

  const getEndDate = () => {
    return `${state.value}-12-31`;
  };

  const isNegative = (value) => {
    const res = Math.sign(value) === -1 ? true : false;
    return res;
  };

  React.useEffect(() => {
    axios
      .get(
        `https://api.yieldvest.hng.tech/company/${companyId}/interval?startDate=${getStartDate()}&endDate=${getEndDate()}`
      )
      .then((res) => {
        const raw = res.data["financials"];

        raw.forEach((each) => {
          const newRevenue = each["total_revenue"] / 1e9;
          const newDate = `${each["date"]}`.substring(0, 4).trim();
          const newIncome = each["net_income"] / 1e9;
          const grossProfit = each["gross_profit"] / 1e9;
          const newExpenses = each["operating_expenses"] / 1e9;
          const pos = raw.indexOf(each);

          raw[pos]["total_revenue"] = newRevenue;
          raw[pos]["date"] = newDate;
          raw[pos]["net_income"] = newIncome;
          raw[pos]["gross_profit"] = grossProfit;
          raw[pos]["operating_expenses"] = newExpenses;
        });

        setData(raw.reverse());
        getDateIndex();
        console.log(data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    state.value,
    state.showExpenses,
    state.showIncome,
    state.showProfit,
    state.showRevenue,
  ]);

  const generateYLabel = () => {
    const used = [];
    if (state.showRevenue) used.push("Revenue");
    if (state.showIncome) used.push("Net Income");
    if (state.showExpenses) used.push("Expenses");
    if (state.showProfit) used.push("Gross Profit");

    //return used.join(", ") + " (Billions)";
    return "Output (Billions)";
  };

  return (
    <div className="h-auto flex flex-col bg-white text-[#5C5A5A] border rounded-lg px-6 py-4 font-HauoraLight">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row text-xs md:text-lg font-HauoraBold font-bold text-[#5C5A5A] border-b-2 border-[#1BD47B] px-1">
          <button className="text-[#1BD47B] rounded-lg">
            Income Statement
          </button>
        </div>

        <div className="relative inline-block">
          <button className="text-left text-xs md:text-lg bg-[#FFFFFF] rounded-xl align-middle text-[#5C5A5A] px-4 py-2 md:py-3 border flex flex-row font-semibold justify-between gap-0 md:gap-10">
            {state.value}{" "}
            <img
              className="p-2 ml-3 md:m-auto h-6 md:h-auto border bg-[#E8FBF2] rounded-full"
              src={(state.show ? UpIcon : DownIcon).src}
              onClick={() => setState({ ...state, show: !state.show })}
              alt="open"
            />
          </button>

          {state.show && (
            <div
              className="absolute text-sm md:text-lg right-0 z-10 mt-2 w-full text-center origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                {["2022", "2021", "2020", "2019", "2018"].map((each, key) => (
                  <a
                    href="#"
                    key={key}
                    className="text-gray-700 hover:bg-gray-700 hover:text-white block px-4 py-2"
                    role="menuitem"
                    onClick={() =>
                      setState({ ...state, show: false, value: each })
                    }
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    {each}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="h-100 my-10 w-full border border-1px rounded-lg bg-transparent">
        <div className="flex flex-row justify-between text-xl md:text-2xl font-semibold pt-6 pl-5">
          {companyId} Chart
          <div className="flex flex-row justify-end text-xs md:text-md gap-2 mr-5">
            {state.showRevenue && (
              <>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.50032"
                    cy="8.33333"
                    r="8.33333"
                    fill="#1BD47B"
                  />
                </svg>
                Total Revenue
              </>
            )}
            {state.showIncome && (
              <>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.50032"
                    cy="8.33333"
                    r="8.33333"
                    fill="#000000"
                  />
                </svg>
                Net Income
              </>
            )}
            {state.showExpenses && (
              <>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.50032"
                    cy="8.33333"
                    r="8.33333"
                    fill="#ff2c2c"
                  />
                </svg>
                Operating expenses
              </>
            )}
            {state.showProfit && (
              <>
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="8.50032"
                    cy="8.33333"
                    r="8.33333"
                    fill="#3388ff"
                  />
                </svg>
                Gross Profit
              </>
            )}
          </div>
        </div>

        <ResponsiveContainer className="mt-10" width="100%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#1BD47B" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#1BD47B" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#000000" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#000000" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff2c2c" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ff2c2c" stopOpacity={0} />
              </linearGradient>

              <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3388ff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3388ff" stopOpacity={0} />
              </linearGradient>
            </defs>
            {state.showRevenue && (
              <Area
                type="monotone"
                dataKey="total_revenue"
                stroke="#1BD47B"
                fill="url(#colorRevenue)"
                strokeWidth={1}
              />
            )}
            {state.showIncome && (
              <Area
                type="monotone"
                dataKey="net_income"
                stroke="#000000"
                fill="url(#colorIncome)"
                strokeWidth={1}
              />
            )}
            {state.showExpenses && (
              <Area
                type="monotone"
                dataKey="operating_expenses"
                stroke="#ff2c2c"
                fill="url(#colorExpenses)"
                strokeWidth={1}
              />
            )}
            {state.showProfit && (
              <Area
                type="monotone"
                dataKey="gross_profit"
                stroke="#3388ff"
                fill="url(#colorProfit)"
                strokeWidth={1}
              />
            )}
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis
              dataKey="total_revenue"
              label={{
                angle: -90,
                value: generateYLabel(),
                position: "insideLeft",
                textAnchor: "middle",
              }}
            />
            <Tooltip />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-5 md:my-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
        <h2 className="opacity-50 pl-4">Key Metric</h2>
        <h2 className="opacity-50 pl-0 md:pl-20">USD ({state.value})</h2>
        <h2 className="opacity-50 pl-4">% Change</h2>
      </div>

      {data.length > 0 ? (
        <>
          <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
            <span className="flex flex-row md:w-1/4">
              <input
                className="text-[#1BD47B]"
                type="checkbox"
                checked={state.showRevenue}
                onChange={() =>
                  setState({ ...state, showRevenue: !state.showRevenue })
                }
              />
              <p className="pl-5">Revenue</p>
            </span>
            <p className="text-left pr-10">{`${data[data.length - 1][
              "total_revenue"
            ].toFixed(2)}B`}</p>
            <p className="flex flex-row gap-2">
              <img
                src={
                  (isNegative(data[data.length - 1]["revenue_growth"])
                    ? redArrow
                    : greenArrow
                  ).src
                }
                className="block mt-2 h-2"
                alt="loss"
              />
              {`${Math.abs(
                data[data.length - 1]["revenue_growth"].toFixed(2)
              )}%`}
            </p>
          </div>
          <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
            <span className="flex flex-row md:w-1/4">
              <input
                className="text-[#1BD47B]"
                type="checkbox"
                checked={state.showExpenses}
                onChange={() =>
                  setState({ ...state, showExpenses: !state.showExpenses })
                }
              />
              <p className="pl-5">Operating expenses</p>
            </span>
            <p className="text-left pr-10">{`${data[data.length - 1][
              "operating_expenses"
            ].toFixed(2)}B`}</p>
            <p className="flex flex-row gap-2">
              <img
                src={
                  (isNegative(
                    data[data.length - 1]["operating_expenses_growth"]
                  )
                    ? redArrow
                    : greenArrow
                  ).src
                }
                className="block mt-2 h-2"
                alt="loss"
              />
              {`${Math.abs(
                data[data.length - 1]["operating_expenses_growth"].toFixed(2)
              )}%`}
            </p>
          </div>
          <div className="mt-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
            <span className="flex flex-row md:w-1/4">
              <input
                className="text-[#1BD47B]"
                type="checkbox"
                checked={state.showProfit}
                onChange={() =>
                  setState({ ...state, showProfit: !state.showProfit })
                }
              />
              <p className="pl-5">Gross Profit</p>
            </span>
            <p className="text-left pr-10">{`${Math.abs(
              data[data.length - 1]["gross_profit"].toFixed(2)
            )}B`}</p>
            <p className="flex flex-row gap-2">
              <img
                src={
                  (isNegative(data[data.length - 1]["gross_profit_growth"])
                    ? redArrow
                    : greenArrow
                  ).src
                }
                className="block mt-2 h-2"
                alt="loss"
              />
              {`${Math.abs(
                data[data.length - 1]["gross_profit_growth"].toFixed(2)
              )}%`}
            </p>
          </div>
          <div className="my-6 mr-5 flex text-sm md:text-lg font-HauoraBold font-bold flex-row justify-between">
            <span className="flex flex-row md:w-1/4">
              <input
                className="text-[#1BD47B]"
                type="checkbox"
                checked={state.showIncome}
                onChange={() =>
                  setState({ ...state, showIncome: !state.showIncome })
                }
              />
              <p className="pl-5">Net Income</p>
            </span>
            <p className="text-left pr-10">{`${data[data.length - 1][
              "net_income"
            ].toFixed(2)}B`}</p>
            <p className="flex flex-row gap-2">
              <img
                src={
                  (isNegative(data[data.length - 1]["net_income_growth"])
                    ? redArrow
                    : greenArrow
                  ).src
                }
                className="block mt-2 h-2"
                alt="loss"
              />
              {`${Math.abs(
                data[data.length - 1]["net_income_growth"].toFixed(2)
              )}%`}
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default VisualDataCard;
