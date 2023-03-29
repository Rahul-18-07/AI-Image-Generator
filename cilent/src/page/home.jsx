import React, { useState, useEffect } from "react";
import { Card, FormField, Loader, RenderCards } from "../components/index";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState("");
  return (
    <section>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          The Community Showcase
        </h1>
        <p className="mt-2 text-[#666e75] text-[20px] max-w-[600px]">
          Browse Through a collection of imaginative and visually stunning
          images generated by AI.
        </p>
      </div>
      <div className="mt-16">
        <FormField />
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center item-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="font-medium text-[#666e75] text-xl mb-3">
                Showing result for{" "}
                <span className="text-[#222328]">{searchText}</span>
              </h2>
            )}

            <div className=" grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 gid-cols-3 gap-3">
              {searchText ? (
                <RenderCards data={[]} title="No searched result" />
              ) : (
                <>
                  <RenderCards data={[]} title="No data now" />
                </>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};
export default Home;
