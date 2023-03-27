import React, { useState, useEffect } from "react";
import Card from "./Card"
const RenderCards = ({ data, title }) => {
    if (data?.length > 0) {
        return data.map((post) => { return <Card key={post.id} {...post} /> })
    }
    else
        return <h2 className="mt-5 font-bold text-[#6449ff]">{title}</h2>
}
export default RenderCards;