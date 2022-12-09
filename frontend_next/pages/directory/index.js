import Layout from "../../components/Layout";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const CompanyIndexerPage = ({ indexer, data }) => {
  return (
    <Layout>
      <Head>
        <title>Stock Directory</title>
        <meta
          name="description"
          content="Get the directory to any comapny on this website"
        />
      </Head>

      <div className="bg-[#f5f5f5] w-full font-Hauora h-full">
        <br />

        <div className="flex flex-col text-left md:flex-col md:px-[100px] px-[1rem] mt-5 gap-5 ">
          <h3 className="text-2xl md:text-4xl text-[#5C5A5A] pt-10">
            Stock Directory
          </h3>

          <hr className="md:w-full mx-2 mb-10 opacity-40 border-[#0A0B0D] group-hover:border-white" />

          <span>Browse By:</span>
          <div className="flex flex-auto md:flex-row gap-2 md:gap-5">
            {alphabets.map((letter, key) => {
              switch (letter) {
                case indexer?.toUpperCase():
                  return (
                    <span
                      className="cursor-pointer border-b-2 border-[#1BD47B]"
                      key={key}
                    >
                      {letter}
                    </span>
                  );
                default:
                  return (
                    <span
                      onClick={() =>
                        Router.push(`/directory?substring=${letter}`)
                      }
                      className="cursor-pointer"
                      key={key}
                    >
                      {letter}
                    </span>
                  );
              }
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full my-10 gap-x-[3em] gap-y-5">
            {data.map((company, key) => {
              return (
                <Link href={`/company/${company.ticker}`} key={key}>
                  <p style={{ fontSize: ".8rem", color: "#0F7544" }}>
                    {company.name}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }) {
  const indexer = query.substring || "";
  console.log(indexer);
  let data = [];
  try {
    const res = await axios.get(
      `https://api.yieldvest.hng.tech/companies?substring=${indexer}`
    );
    if (res.status === 200) {
      data = [...res.data];
    }
  } catch (err) {
    //console.log(err);
    console.log("Failed to fetch companies stock: " + err);
  }

  return {
    props: {
      indexer: indexer,
      data: data,
    },
  };
}

export default CompanyIndexerPage;
